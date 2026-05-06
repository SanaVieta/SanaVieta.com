import {createContext, type JSX, useEffect, useState} from "react";
import { type ProductsResponse } from "@/types/product";
import {fetchProductData} from "../services/shopifyServices";

export const ProductContext = createContext<ProductsResponse | null>(null);

type ProductProviderProps = {
    children: JSX.Element | JSX.Element [];
}

export default function ProductProvider(props: ProductProviderProps){
    const [products, setProducts] = useState<ProductsResponse>();
    useEffect(() => {
        (async () => {
            const productData = await fetchProductData();
            setProducts(productData)
        })()
    },[])


    return(
        <ProductContext.Provider value={products as ProductsResponse}>
            {props.children}
        </ProductContext.Provider>
    )
}