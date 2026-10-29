import type { Cart, CartContextType } from "@/types/cart";
import {createContext, type JSX, useEffect, useState} from "react";
import {createCart, fetchCart, addLineToCart, removeFromCart as deleteFromCart, addNoteToCart } from "@/services/shopifyServices";


const defaultCartContext: CartContextType = {
    cart: null,
    addToCart: (_merchandiseId: string, _quantity: number) => Promise.resolve(),
    removeFromCart: (_merchandiseId: string, _quantity: number) => {},
    buyNow: (_merchandiseId: string, _quantity: number) => {},
    redirectToCheckout: () => {},
    addCartNote: (content: string) => {}
};

export const CartContext = createContext<CartContextType>(defaultCartContext);

type CartContextProps = {
    children: JSX.Element | JSX.Element[];
}

export default function CartProvider(props: CartContextProps){
    const [cart, setCart] = useState<Cart | null>(null);

    async function addToCart(merchandiseId: string, quantity: number, sellingPlanId?: string){
        const cartId = sessionStorage.getItem('cartId');
        if (!cartId) {
            const response = await createCart(merchandiseId, quantity, sellingPlanId);
            const newCart = response.data.cartCreate.cart;
            sessionStorage.setItem('cartId', newCart.id);
            setCart(newCart);
            return;
        }
        const freshCartResponse = await fetchCart(cartId);
        const freshCart = freshCartResponse.data.cart;
        if (!freshCart) {
            const response = await createCart(merchandiseId, quantity, sellingPlanId);
            const newCart = response.data.cartCreate.cart;
            sessionStorage.setItem('cartId', newCart.id);
            setCart(newCart);
            return;
        }
        const existingLineIds = freshCart.lines.edges.map(e => e.node.id);
        if (existingLineIds.length > 0) {
            await deleteFromCart(cartId, existingLineIds);
        }
        const response = await addLineToCart(cartId, merchandiseId, quantity, sellingPlanId);
        setCart(response.data.cartLinesAdd.cart);
    }
    async function addCartNote(content: string){
        const cartId = sessionStorage.getItem('cartId');
        if(cartId){
            await addNoteToCart(cartId, content);
        }
    }
    async function removeFromCart(merchandiseId: string){
        const cartId = sessionStorage.getItem('cartId');
        if (cartId) {
            const response = await deleteFromCart(cartId, [merchandiseId]);
            setCart(response.data.cartLinesRemove.cart);
        }
    }

    async function buyNow(merchandiseId: string, quantity: number): Promise<void> {
        const response = await createCart(merchandiseId, quantity);
        window.location.href = response.data.cartCreate.cart.checkoutUrl;
    }


    function redirectToCheckout(){
        const checkoutLink = cart?.checkoutUrl;
        if(checkoutLink){
            window.location.href = checkoutLink;

        }
    }

    useEffect(() => {
        const cartId = sessionStorage.getItem('cartId');
        if (cartId) {
            fetchCart(cartId).then(response =>setCart(response.data.cart));
        }
    }, []);

   return (
       <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyNow, redirectToCheckout, addCartNote }}>
           {props.children}
       </CartContext.Provider>
   )
}
