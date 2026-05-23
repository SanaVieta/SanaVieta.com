import {Badge} from "@/app/components/ui/badge";
import {Check, ShieldCheck, Truck} from "lucide-react";
import {Button} from "@/app/components/ui/button";
import {useProductContext} from "@/hooks/useProductContext";
import {useCartContext} from "@/hooks/useCartContext";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select";
import {useState} from "react";
import Spinner from "./Spinner";

export default function FeaturedProduct() {
    const [redirecting, setRedirecting] = useState<boolean>(false);
    const { 
        image, 
        productTitle, 
        unitPrice, 
        productId, 
        packages, 
        availableForSale, 
        quantityAvailable 
    } = useProductContext();
    const { cart, redirectToCheckout, addToCart } = useCartContext();
    const productQuantity = cart?.lines.edges[0]?.node.quantity ?? 1;
    const [isCalculating, setIsCalculating] = useState<boolean>(false);

    const rawPrice = cart
        ? Number(cart.cost.totalAmount.amount)
        : (unitPrice || 0) * productQuantity;
    const displayPrice = isNaN(rawPrice)
        ? null
        : rawPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const isSoldOut = !availableForSale;
    const lowQuantity = quantityAvailable && (quantityAvailable <= 10 && quantityAvailable >= 0);

    async function handleQuantityChange(value: string) {
        try {
            setIsCalculating(true);
            if (productId) await addToCart(productId, Number(value));
        } finally {
            setIsCalculating(false);
        }
    }

    return (
        <section id="products" className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <img
                            src={image ?? undefined}
                            alt="SanaLymph - Lymphatic System & Vascular Support"
                            className="rounded-2xl shadow-2xl w-full"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <Badge className="bg-[#FFF8E1] text-[#8D6E00] border-[#FFE082] hover:bg-[#FFF8E1]">
                            Featured Product
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20]">
                            {productTitle}
                        </h2>
                        <p className="text-xl text-[#2E7D32] font-semibold">
                            Lymphatic System & Vascular Support
                        </p>
                        <p className="text-[#3E5A3E] leading-relaxed">
                            Our flagship formula combines micronized Diosmin, enteric-coated Bromelain, Horse Chestnut &
                            Butcher's Broom, Gotu Kola, and Selenium for superior bioavailability and targeted relief.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                                <p className="text-[#3E5A3E]"><span className="font-semibold">Micronized Diosmin 600mg</span> - Enhanced absorption</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                                <p className="text-[#3E5A3E]"><span className="font-semibold">Enteric-Coated Bromelain 150mg</span> - Optimizes Bioavailability</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                                <p className="text-[#3E5A3E]"><span className="font-semibold">Butcher's Broom and Horse Chestnut 200mg</span> - Vascular Integrity Support</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                                <p className="text-[#3E5A3E]"><span className="font-semibold">Gotu Kola 50mg</span> - Stimulates Collagen Production to Reinforce Vein Walls</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                                <p className="text-[#3E5A3E]"><span className="font-semibold">Selenium 100mcg</span> - Antioxidant Support</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                                <p className="text-[#3E5A3E]"><span className="font-semibold">60 Capsules</span> - 30-day supply</p>
                            </div>
                        </div>

                        <div className="flex items-baseline gap-4">
                            {isCalculating || displayPrice === null ?
                                <>
                                    <span className="text-4xl font-bold text-[#1B5E20]">Calculating price</span>
                                    <Spinner theme="dark"/>
                                </> :<>
                                <span className="text-4xl font-bold text-[#1B5E20]">${displayPrice}</span>
                                <span className="text-[#6B7D6B]">{productQuantity > 1 ? `${productQuantity} bottles` : 'per bottle'}</span>
                            </>}
                        </div>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <Select value={productQuantity.toString()} onValueChange={handleQuantityChange}>
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="Select Quantity"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Quantity</SelectLabel>
                                        {packages.map((pkg, i) => <SelectItem key={i} value={pkg.bottles.toString()}>{pkg.bottles}</SelectItem>)}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Button
                                size="lg"
                                disabled={!cart?.checkoutUrl || isSoldOut}
                                onClick={() => {
                                    setRedirecting(true) 
                                    redirectToCheckout()
                                }}
                                className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white w-full sm:w-auto px-8 h-12"
                            >
                                <div className="flex items-center gap-2 ">
                                    {redirecting &&<Spinner theme="light" />}
                                    <span>Buy Now</span>
                                </div>
                            </Button>
                            
                        </div>
                        { isSoldOut && <p className="text-sm font-bold text-red-600">This product is currently sold out.</p>}
                        { lowQuantity && <p className="text-sm font-bold text-red-600">Only {quantityAvailable} left. Order Now!.</p> }
                        <div className="flex items-center gap-2 text-sm text[#3E5A3E] pt-4">
                            <Truck className="w-5 h-5 text-[#4CAF50]" />
                            <span className="text-[#6B7D6B]">Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-[#3E5A3E] pt-4">
                            <ShieldCheck className="w-5 h-5 text-[#4CAF50]"/>
                            <span>180-Day Money-Back Guarantee</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}