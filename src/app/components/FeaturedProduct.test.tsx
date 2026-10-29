import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeaturedProduct from "./FeaturedProduct";

const addToCart = vi.fn();
const addCartNote = vi.fn();

vi.mock("@/hooks/useProductContext", () => ({
    useProductContext: () => ({
        image: "/bottle.png",
        productTitle: "SanaLymph",
        unitPrice: 58.65,
        productId: "gid://shopify/ProductVariant/1",
        packages: [
            { id: "1-bottle", name: "Starter", bottles: 1, price: 58.65 },
            { id: "3-bottle", name: "Most Popular", bottles: 3, price: 175.95 },
        ],
        availableForSale: true,
        quantityAvailable: 50,
        isPreOrder: false,
        releaseDate: null,
    }),
}));

vi.mock("@/hooks/useCartContext", () => ({
    useCartContext: () => ({
        cart: null,
        redirectToCheckout: vi.fn(),
        addToCart,
        addCartNote,
    }),
}));

// addToCart never resolves on its own here, so the test controls exactly
// when the in-flight request completes.
function pendingAddToCart() {
    let resolve!: () => void;
    const promise = new Promise<void>((r) => (resolve = r));
    addToCart.mockReturnValueOnce(promise);
    return resolve;
}

describe("FeaturedProduct quantity select", () => {
    it("disables the quantity select while a cart update is in flight, preventing a second overlapping addToCart call", async () => {
        const user = userEvent.setup();
        const resolveAddToCart = pendingAddToCart();
        render(<FeaturedProduct />);

        const trigger = screen.getByRole("combobox");
        await user.click(trigger);
        await user.click(screen.getByRole("option", { name: "3" }));

        expect(addToCart).toHaveBeenCalledTimes(1);

        // Root-cause regression check: while the first addToCart is still
        // pending, the trigger must be disabled so a second selection can't
        // fire a second, overlapping addToCart call (which is what let the
        // Shopify cart merge quantities and double the checkout total).
        await waitFor(() => expect(trigger).toBeDisabled());

        await user.click(trigger);
        expect(screen.queryByRole("option", { name: "1" })).not.toBeInTheDocument();
        expect(addToCart).toHaveBeenCalledTimes(1);

        resolveAddToCart();
        await waitFor(() => expect(trigger).not.toBeDisabled());
    });
});
