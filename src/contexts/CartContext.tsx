import type { Cart, CartContextType } from "@/types/cart";
import {createContext, type JSX, useEffect, useState} from "react";
import {createCart, fetchCart, updateCart, removeFromCart as deleteFromCart } from "@/services/shopifyServices";


const defaultCartContext: CartContextType = {
    cart: null,
    addToCart: (_merchandiseId: string, _quantity: number) => Promise.resolve(),
    removeFromCart: (_merchandiseId: string, _quantity: number) => {},
    buyNow: (_merchandiseId: string, _quantity: number) => {},
    redirectToCheckout: (link: string) => {}
};

export const CartContext = createContext<CartContextType>(defaultCartContext);

type CartContextProps = {
    children: JSX.Element | JSX.Element[];
}

export default function CartProvider(props: CartContextProps){
    const [cart, setCart] = useState<Cart | null>(null);

    async function addToCart(merchandiseId: string, quantity: number){
        const cartId = localStorage.getItem('cartId');
        if (!cartId) {
            const response = await createCart(merchandiseId, quantity);
            const newCart = response.data.cartCreate.cart;
            localStorage.setItem('cartId', newCart.id);
            setCart(newCart);
            return;
        }
        const existingLine = cart?.lines.edges.find(
            e => e.node.merchandise.id === merchandiseId
        );
        if (existingLine) {
            const response = await updateCart(cartId, existingLine.node.id, quantity);
            setCart(response.data.cartLinesUpdate.cart);
        } else {
            const response = await createCart(merchandiseId, quantity);
            const newCart = response.data.cartCreate.cart;
            localStorage.setItem('cartId', newCart.id);
            setCart(newCart);
        }
    }

    async function removeFromCart(merchandiseId: string){
        const cartId = localStorage.getItem('cartId');
        if (cartId) {
            const response = await deleteFromCart(cartId, [merchandiseId]);
            setCart(response.data.cartLinesRemove.cart);
        }
    }

    async function buyNow(merchandiseId: string, quantity: number): Promise<void> {
        const response = await createCart(merchandiseId, quantity);
        window.location.href = response.data.cartCreate.cart.checkoutUrl;
    }


    function redirectToCheckout(link: string){
        window.location.href = link;
    }

    useEffect(() => {
        const cartId = localStorage.getItem('cartId');
        if (cartId) {
            fetchCart(cartId).then(response =>{console.log(response.data); setCart(response.data.cart);});
        }
    }, []);

   return (
       <CartContext.Provider value={{ cart, addToCart, removeFromCart, buyNow, redirectToCheckout }}>
           {props.children}
       </CartContext.Provider>
   )
}
