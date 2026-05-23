import {createContext, type JSX, useEffect, useMemo,  useState} from "react";
import {fetchProductData} from "../services/shopifyServices";
import type { ProductPackage } from "@/types/ProductPackage";


type ProductProviderProps = {
    children: JSX.Element | JSX.Element [];
}

interface IProductContext{
    packages: ProductPackage[];
    productId: string | null | undefined;
    image: string | null | undefined;
    productTitle: string | null | undefined;
    unitPrice: number | null | undefined;
    quantityAvailable: number| null | undefined;
    availableForSale: boolean | null | undefined;
}

export const ProductContext = createContext<IProductContext>({
    packages: [], 
    productId: null, 
    image: null, 
    productTitle: null, 
    unitPrice: null,
    availableForSale: null,
    quantityAvailable: null
});


const PACKAGE_TIERS = [
    { id: '1-bottle' as const,  name: 'Starter',        bottles: 1,  savings: 0,  subscribeSavings: 15, badge: 'Trial Size',       frequency: 'every 30 days'    },
    { id: '3-bottle' as const,  name: 'Most Popular',   bottles: 3,  savings: 15, subscribeSavings: 23, badge: 'Best Value',        frequency: 'every 3 months',  popular: true  },
    { id: '6-bottle' as const,  name: 'Best Deal',      bottles: 6,  savings: 25, subscribeSavings: 32, badge: 'Maximum Savings',   frequency: 'every 6 months'   },
    { id: '12-bottle' as const, name: 'Ultimate Value', bottles: 12, savings: 33, subscribeSavings: 41, badge: 'Best Price',        frequency: 'every 12 months', ultimate: true },
] as const;

function buildPackages(unitPrice: number, quantityAvailable: number): ProductPackage[] {
    return PACKAGE_TIERS.filter(tier => quantityAvailable >= tier.bottles).map(tier => {
        const pricePerBottle         = Math.round(unitPrice * (1 - tier.savings         / 100) * 100) / 100;
        const subscribePricePerBottle = Math.round(unitPrice * (1 - tier.subscribeSavings / 100) * 100) / 100;
        return {
            ...tier,
            price:                  Math.round(pricePerBottle          * tier.bottles * 100) / 100,
            subscribePrice:         Math.round(subscribePricePerBottle * tier.bottles * 100) / 100,
            pricePerBottle,
            subscribePricePerBottle,
        };
    });
}

export default function ProductProvider(props: ProductProviderProps){
    const [unitPrice, setUnitPrice] = useState<number | null>(null);
    const [productId, setProductId] = useState<string | null>(null);
    const [image, setImage] = useState<string | null>(null);
    const [productTitle, setProductTitle] = useState<string | null>(null);
    const [quantityAvailable, setQuantityAvailable] = useState<number | null>(null);
    const [availableForSale, setAvailableForSale] = useState<boolean>(false);
    const packages = useMemo(() => buildPackages(unitPrice ?? 0, quantityAvailable as number), [unitPrice, quantityAvailable])
    useEffect(() => {
        (async () => {
            const productData = await fetchProductData();
            const node = productData?.data.products.edges[0].node;
            const variant = node?.variants.edges[0].node;
            setUnitPrice(Number(variant?.price.amount));
            setProductId(variant?.id ?? null);
            setImage(node?.images.edges[0].node.url ?? null);
            setProductTitle(node?.title ?? null);
            setQuantityAvailable(variant.quantityAvailable);
            setAvailableForSale(variant.availableForSale);
        })()
    },[])

    return(
        <ProductContext.Provider value={{
            packages, 
            productId, 
            image, 
            productTitle, 
            unitPrice, 
            availableForSale, 
            quantityAvailable
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}