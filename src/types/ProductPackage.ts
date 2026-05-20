
export type ProductPackage = {
    id: '1-bottle' | '3-bottle' | '6-bottle' | '12-bottle';
    name: string;
    bottles: number;
    price: number;
    subscribePrice: number;
    pricePerBottle: number;
    subscribePricePerBottle: number;
    savings: number;
    subscribeSavings: number;
    badge: string;
    frequency: string;
    popular?: boolean;
    ultimate?: boolean;
};