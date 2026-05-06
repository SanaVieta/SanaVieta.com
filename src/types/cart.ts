export type MoneyV2 = {
    amount: string;
    currencyCode: string;
};

export type CartLineNode = {
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        priceV2: MoneyV2;
        product: {
            title: string;
            handle: string;
        };
    };
    cost: {
        totalAmount: MoneyV2;
    };
};

export type Cart = {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;
    lines: { edges: { node: CartLineNode }[] };
    cost: {
        totalAmount: MoneyV2;
        subtotalAmount: MoneyV2;
    };
};

export type CartCreateResponse = {
    data: {
        cartCreate: {
            cart: Cart;
        };
    };
};

export type CartFetchResponse = {
    data: {
        cart: Cart;
    };
};

export type CartUpdateResponse = {
    data: {
        cartLinesUpdate: {
            cart: Cart;
        };
    };
};

export type CartRemoveResponse = {
    data: {
        cartLinesRemove: {
            cart: Cart;
        };
    };
};

export type CartContextType = {
    cart: Cart | null;
    addToCart: (merchandiseId: string, quantity: number) => Promise<void>;
    removeFromCart: (merchandiseId: string, quantity: number) => void;
    buyNow: (merchandiseId: string, quantity: number) => void;
    redirectToCheckout: (link: string) => void;
};
