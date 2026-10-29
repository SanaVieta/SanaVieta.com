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
    isPreOrder: boolean | null | undefined
    releaseDate: Date | null | undefined;
}

export const ProductContext = createContext<IProductContext>({
    packages: [], 
    productId: null, 
    image: null, 
    productTitle: null, 
    unitPrice: null,
    availableForSale: null,
    quantityAvailable: null,
    isPreOrder: null,
    releaseDate: null
});

const PACKAGE_TIERS = [
    { id: '1-bottle' as const,  name: 'Starter',        bottles: 1,  savings: 0,  badge: 'Trial Size',       frequency: 'every 30 days'    },
    { id: '3-bottle' as const,  name: 'Most Popular',   bottles: 3,  savings: 15, badge: 'Best Value',        frequency: 'every 3 months',  popular: true  },
    { id: '6-bottle' as const,  name: 'Best Deal',      bottles: 6,  savings: 25, badge: 'Maximum Savings',   frequency: 'every 6 months'   },
    { id: '12-bottle' as const, name: 'Ultimate Value', bottles: 12, savings: 33, badge: 'Best Price',        frequency: 'every 12 months', ultimate: true },
] as const;

type SellingPlanInfo = { id: string; discountPct: number } | null;

function buildPackages(unitPrice: number, quantityAvailable: number, sellingPlan: SellingPlanInfo): ProductPackage[] {
    const subscribeDiscountPct = sellingPlan?.discountPct ?? 0;
    return PACKAGE_TIERS.filter(tier => quantityAvailable >= tier.bottles).map(tier => {
        const pricePerBottle          = Math.round(unitPrice      * (1 - tier.savings            / 100) * 100) / 100;
        const subscribePricePerBottle = Math.round(pricePerBottle * (1 - subscribeDiscountPct     / 100) * 100) / 100;
        return {
            ...tier,
            price:                  Math.round(pricePerBottle          * tier.bottles * 100) / 100,
            subscribePrice:         Math.round(subscribePricePerBottle * tier.bottles * 100) / 100,
            pricePerBottle,
            subscribePricePerBottle,
            subscribeSavings: Math.round(100 - (subscribePricePerBottle / unitPrice * 100)),
            sellingPlanId: sellingPlan?.id ?? null,
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
    const [isPreOrder, setIsPreOrder] = useState<boolean>(false);
    const [releaseDate, setReleaseDate] = useState<Date | null>();
    const [sellingPlan, setSellingPlan] = useState<SellingPlanInfo>(null);
    const packages = useMemo(() => buildPackages(unitPrice ?? 0, quantityAvailable as number, sellingPlan), [unitPrice, quantityAvailable, sellingPlan])
    useEffect(() => {
        (async () => {
            const productData = await fetchProductData();
            const node = productData?.data.products.edges[0].node;
            const variant = node?.variants.edges[0].node;
            const isPreOrder = node?.preorder?.value === "true";
            const releaseDate = new Date(node?.release_date?.value);
            const plan = node?.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node;
            const adjustmentPercentage = plan?.priceAdjustments[0]?.adjustmentValue.adjustmentPercentage;
            setUnitPrice(Number(variant?.price.amount));
            setProductId(variant?.id ?? null);
            setImage(node?.images.edges[0].node.url ?? null);
            setProductTitle(node?.title ?? null);
            setQuantityAvailable(variant.quantityAvailable);
            setAvailableForSale(variant.availableForSale);
            setSellingPlan(plan && adjustmentPercentage !== undefined ? {
                id: plan.id,
                discountPct: adjustmentPercentage,
            } : null);
            setIsPreOrder(isPreOrder)
            setReleaseDate(releaseDate);

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
            quantityAvailable,
            isPreOrder,
            releaseDate
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}