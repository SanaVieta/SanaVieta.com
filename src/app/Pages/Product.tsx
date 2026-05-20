import { ShieldCheck, Star, StarHalf, Check, Package, Truck, RefreshCw, ChevronDown, Play } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { useState, useEffect, useMemo, useRef } from 'react';
import productImage from '@/imports/Revitalize_your_flow_CTA.png';
import circulationBanner from '@/imports/SanaVieta_Circulation_Banner.png';
import trustedBanner from '@/imports/Trusted_by_1000s_updated.png';
import infoBanner from '@/imports/SanaLymph_Info_Banner.png';
import ingredientsShowcase from '@/imports/SanaLymph_Ingredients_Showcase.png';
import ingredientsList from '@/imports/Ingredients_-1.png';
import margaretReview from '@/imports/Screenshot_2026-05-07_at_7.21.56_PM.png';
import robertReview from '@/imports/Screenshot_2026-05-07_at_7.30.07_PM.png';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/app/components/ui/carousel';
import { useCartContext } from '@/hooks/useCartContext';
import { useProductContext } from '@/hooks/useProductContext';
import type { ProductPackage } from '@/types/ProductPackage';

const PACKAGE_TIERS = [
    { id: '1-bottle' as const,  name: 'Starter',        bottles: 1,  savings: 0,  subscribeSavings: 15, badge: 'Trial Size',       frequency: 'every 30 days'    },
    { id: '3-bottle' as const,  name: 'Most Popular',   bottles: 3,  savings: 15, subscribeSavings: 23, badge: 'Best Value',        frequency: 'every 3 months',  popular: true  },
    { id: '6-bottle' as const,  name: 'Best Deal',      bottles: 6,  savings: 25, subscribeSavings: 32, badge: 'Maximum Savings',   frequency: 'every 6 months'   },
    { id: '12-bottle' as const, name: 'Ultimate Value', bottles: 12, savings: 33, subscribeSavings: 41, badge: 'Best Price',        frequency: 'every 12 months', ultimate: true },
] as const;

function buildPackages(unitPrice: number): ProductPackage[] {
    return PACKAGE_TIERS.map(tier => {
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

export default function Product() {
    const productMedia = [
        {
            type: 'image' as const,
            src: productImage,
            alt: 'Revitalize Your Flow - SanaLymph',
        },
        {
            type: 'image' as const,
            src: circulationBanner,
            alt: 'SanaVieta Circulation Support Benefits',
        },
        {
            type: 'image' as const,
            src: infoBanner,
            alt: 'SanaLymph Product Information',
        },
        {
            type: 'image' as const,
            src: ingredientsShowcase,
            alt: 'SanaLymph Premium Ingredients Showcase',
        },
        {
            type: 'image' as const,
            src: ingredientsList,
            alt: 'SanaLymph Ingredients List',
        },
        {
            type: 'video' as const,
            src: 'https://drive.google.com/file/d/1ix9KpMxrsuGk0ZjPaouCfddXQZS3WLK8/view?usp=sharing',
            alt: 'Meet SanaLymph - Product Video',
        },
    ];
    const benefits = [
        'Supports healthy lymphatic function',
        'Promotes comfortable fluid balance',
        'Helps maintain healthy circulation',
        'Supports vascular integrity',
        'May help reduce occasional swelling',
        'Promotes overall wellness',
    ];

    const ingredients = [
        {
            name: 'Micronized Diosmin',
            amount: '600mg',
            description: 'A high-absorption flavonoid that supports healthy vein tonicity and maintains normal capillary permeability to promote leg comfort and reduce seasonal or activity-related swelling',
        },
        {
            name: 'Enteric-Coated Bromelain',
            amount: '150mg',
            description: 'Acid-resistant for systemic delivery; promotes a healthy inflammatory response and helps the body naturally manage fluid balance and protein breakdown',
        },
        {
            name: 'Horse Chestnut & Butcher\'s Broom',
            amount: '200mg',
            description: 'A synergistic botanical duo formulated to strengthen capillary walls and maintain healthy circulation for those experiencing occasional heaviness in the lower limbs',
        },
        {
            name: 'Gotu Kola',
            amount: '50mg',
            description: 'Supports the natural integrity of vascular connective tissue and collagen production, helping to maintain strong, resilient blood vessel walls',
        },
        {
            name: 'Selenium',
            amount: '100mcg',
            description: 'An essential mineral that provides antioxidant support to protect compromised tissues from oxidative stress and supports healthy lymphatic system function',
        },
    ];

    const faqs = [
        {
            question: 'How long does it take to see results?',
            answer: 'Individual results may vary. Most users report noticing improvements in comfort and fluid balance within 2-4 weeks of consistent use. For optimal results, we recommend taking SanaLymph daily for at least 90 days.',
        },
        // {
        //     question: 'How does the Subscribe & Save option work?',
        //     answer: 'With Subscribe & Save, you receive automatic deliveries based on your package size (1 bottle every 30 days, 3 bottles every 3 months, 6 bottles every 6 months, or 12 bottles every year) at a discounted price (save up to 41%). You can cancel, pause, or modify your subscription anytime - no commitments or penalties. Plus, you get free shipping on all subscription orders.',
        // },
        {
            question: 'Are there any side effects?',
            answer: 'SanaLymph is formulated with natural ingredients and is generally well-tolerated. However, as with any supplement, some individuals may experience mild digestive changes. If you have any concerns or are taking medications, please consult your healthcare provider before use.',
        },
        {
            question: 'How should I take SanaLymph?',
            answer: 'Take 2 capsules daily with meals and a full glass of water. For best results, take consistently at the same time each day. Do not exceed the recommended dosage.',
        },
        {
            question: 'Can I take this with other medications?',
            answer: 'While SanaLymph uses natural ingredients, it\'s important to consult with your healthcare provider before combining with any medications, especially blood thinners or medications affecting circulation.',
        },
        {
            question: 'What is your return policy?',
            answer: 'We offer a 180-day money-back guarantee. If you\'re not completely satisfied with your results, simply contact our customer service team for a full refund - no questions asked.',
        },
    ];
    const [selectedPackage, setSelectedPackage] = useState<ProductPackage['id']>('3-bottle');
    const [purchaseType, setPurchaseType] = useState<'onetime' | 'subscribe'>('onetime');
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [carouselApi, setCarouselApi] = useState<any>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const initializedFromCart = useRef(false);
    const product = useProductContext();
    const { cart, redirectToCheckout, addToCart } = useCartContext();
    const unitPrice = Number(product?.data.products.edges[0].node.variants.edges[0].node.price.amount);
    const productId = product?.data.products.edges[0].node.variants.edges[0].node.id;
    const packages = useMemo(() => buildPackages(unitPrice || 0), [unitPrice]);

    useEffect(() => {
        if (!carouselApi) return;

        carouselApi.on('select', () => {
            setCurrentSlide(carouselApi.selectedScrollSnap());
        });
    }, [carouselApi]);

    useEffect(() => {
        if (cart && !initializedFromCart.current) {
            const pkg = packages.find(pkg => pkg.bottles === cart.totalQuantity);
            if (pkg) setSelectedPackage(pkg.id);
            initializedFromCart.current = true;
        }
    }, [cart, packages]);

    async function handleAddToCart(pkgId: ProductPackage['id']){
        const pkg: ProductPackage | undefined= packages.find(pkg => pkg.id === pkgId);
        if(pkg && productId){
            const quantity = pkg.bottles;
            setSelectedPackage(pkgId)
            await addToCart(productId, quantity); 
        }
        return;
    }

    return (
        <div className="pb-16">
            <section className="bg-gradient-to-br from-[#E8F5E9] to-white py-8 md:py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-[#6B7D6B] mb-4">
                        <a href="/" className="hover:text-[#2E7D32]">Home</a>
                        <span>/</span>
                        <span className="text-[#1B5E20]">SanaLymph™</span>
                    </div>
                </div>
            </section>

            {/* Product Details */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {/* Product Image Carousel */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                            <Badge className="absolute top-4 right-4 z-10 bg-[#FFF8E1] text-[#8D6E00] border-[#FFE082]">
                                Best Seller
                            </Badge>

                            <Carousel className="w-full" setApi={setCarouselApi}>
                                <CarouselContent>
                                    {productMedia.map((media, index) => (
                                        <CarouselItem key={index}>
                                            {media.type === 'image' ? (
                                                <img
                                                    src={media.src}
                                                    alt={media.alt}
                                                    className="w-full rounded-lg object-contain h-[600px]"
                                                />
                                            ) : (
                                                <div className="relative w-full rounded-lg overflow-hidden bg-black flex items-center justify-center h-[600px]">
                                                    <iframe
                                                        title='Video Player'
                                                        src={media.src.replace('/view?usp=sharing', '/preview')}
                                                        className="w-full h-full"
                                                        allow="autoplay"
                                                        allowFullScreen
                                                    />
                                                </div>
                                            )}
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {productMedia.length > 1 && (
                                    <>
                                        <CarouselPrevious className="left-2" />
                                        <CarouselNext className="right-2" />
                                    </>
                                )}
                            </Carousel>

                            {/* Thumbnail Navigation */}
                            {productMedia.length > 1 && (
                                <div className="flex gap-2 mt-4 justify-center">
                                    {productMedia.map((media, index) => (
                                        <button
                                            key={index}
                                            onClick={() => carouselApi?.scrollTo(index)}
                                            className={`w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${
                                                currentSlide === index
                                                    ? 'border-[#4CAF50] ring-2 ring-[#4CAF50] ring-opacity-50'
                                                    : 'border-[#D7E5D7] hover:border-[#4CAF50]'
                                            }`}
                                        >
                                            {media.type === 'image' ? (
                                                <img
                                                    src={media.src}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                                    <Play className="w-6 h-6 text-[#4CAF50]" />
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div className="flex items-center justify-center gap-2 mt-6 text-[#1B5E20]">
                                <ShieldCheck className="w-5 h-5" />
                                <span className="text-sm font-medium">180-Day Money-Back Guarantee</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-2">
                                SanaLymph™
                            </h1>
                            <p className="text-xl text-[#2E7D32] font-semibold mb-4">
                                Lymphatic System & Vascular Support
                            </p>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-[#4CAF50] text-[#4CAF50]" />
                                    ))}
                                </div>
                                <span className="text-sm text-[#6B7D6B]">(1,247 reviews)</span>
                            </div>
                        </div>

                        <div className="bg-[#E8F5E9] rounded-xl p-6 border border-[#C8E6C9]">
                            <p className="text-[#1B5E20] leading-relaxed">
                                Premium formula combining micronized Diosmin, enteric-coated Bromelain, and traditional botanicals
                                for comprehensive lymphatic and vascular support. Designed for superior bioavailability and targeted relief.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h3 className="font-semibold text-[#1B5E20] mb-3">Key Benefits:</h3>
                            <div className="grid grid-cols-1 gap-2">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                                        <span className="text-[#3E5A3E]">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Purchase Type Selection
                        // <div>
                        //     <h3 className="font-semibold text-[#1B5E20] mb-4">Purchase Type:</h3>
                        //     <div className="grid grid-cols-2 gap-3 mb-6">
                        //         <Card
                        //             className={`cursor-pointer transition-all ${
                        //                 purchaseType === 'onetime'
                        //                     ? 'border-[#4CAF50] border-2 shadow-md'
                        //                     : 'border-[#D7E5D7] hover:border-[#4CAF50]'
                        //             }`}
                        //             onClick={() => setPurchaseType('onetime')}
                        //         >
                        //             <CardContent className="p-4 text-center">
                        //                 <input
                        //                     placeholder='onetime'
                        //                     type="radio"
                        //                     checked={purchaseType === 'onetime'}
                        //                     onChange={() => setPurchaseType('onetime')}
                        //                     className="mb-2"
                        //                 />
                        //                 <h4 className="font-semibold text-[#1B5E20]">One-Time Purchase</h4>
                        //                 <p className="text-xs text-[#6B7D6B] mt-1">Pay once, no commitment</p>
                        //             </CardContent>
                        //         </Card>
                        //         <Card
                        //             className={`cursor-pointer transition-all ${
                        //                 purchaseType === 'subscribe'
                        //                     ? 'border-[#4CAF50] border-2 shadow-md'
                        //                     : 'border-[#D7E5D7] hover:border-[#4CAF50]'
                        //             }`}
                        //             onClick={() => setPurchaseType('subscribe')}
                        //         >
                        //             <CardContent className="p-4 text-center relative">
                        //                 <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#4CAF50] text-white text-xs">
                        //                     Extra Savings
                        //                 </Badge>
                        //                 <input
                        //                     title='subscribe-onetime-purchase'
                        //                     type="radio"
                        //                     checked={purchaseType === 'subscribe'}
                        //                     onChange={() => setPurchaseType('subscribe')}
                        //                     className="mb-2"
                        //                 />
                        //                 <h4 className="font-semibold text-[#1B5E20]">Subscribe & Save</h4>
                        //                 <p className="text-xs text-[#6B7D6B] mt-1">Save up to 41%</p>
                        //             </CardContent>
                        //         </Card>
                        //     </div>
                        // </div> */}

                        {/* Package Selection */}
                        <div>
                            <h3 className="font-semibold text-[#1B5E20] mb-4">Choose Your Package:</h3>
                            <div className="space-y-3">
                                {packages.map((pkg) => {
                                    const currentPrice = purchaseType === 'subscribe' ? pkg.subscribePrice : pkg.price;
                                    const currentPricePerBottle = purchaseType === 'subscribe' ? pkg.subscribePricePerBottle : pkg.pricePerBottle;
                                    const currentSavings = purchaseType === 'subscribe' ? pkg.subscribeSavings : pkg.savings;

                                    return (
                                        <Card
                                            key={pkg.id}
                                            onClick={() => handleAddToCart(pkg.id)}
                                            className={`cursor-pointer transition-all ${
                                                selectedPackage === pkg.id
                                                    ? 'border-[#4CAF50] border-2 shadow-md'
                                                    : 'border-[#D7E5D7] hover:border-[#4CAF50]'
                                            } ${pkg.popular || pkg.ultimate ? 'ring-2 ring-[#4CAF50] ring-opacity-50' : ''}`}
                                        >
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4 flex-1">
                                                        <input
                                                            onChange={(() => handleAddToCart(pkg.id))}
                                                            placeholder='select package'
                                                            type="radio"
                                                            checked={selectedPackage === pkg.id}
                                                            className="w-5 h-5 text-[#4CAF50]"
                                                        />
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                <span className="font-semibold text-[#1B5E20]">
                                  {pkg.bottles} Bottle{pkg.bottles > 1 ? 's' : ''}
                                </span>
                                                                {(pkg.popular || pkg.ultimate) && (
                                                                    <Badge className="bg-[#4CAF50] text-white text-xs">
                                                                        {pkg.badge}
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                            <p className="text-sm text-[#6B7D6B]">
                                                                ${currentPricePerBottle} per bottle
                                                                {currentSavings > 0 && (
                                                                    <span className="text-[#2E7D32] font-semibold ml-2">
                                    Save {currentSavings}%
                                  </span>
                                                                )}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        {purchaseType === 'subscribe' && pkg.price !== pkg.subscribePrice && (
                                                            <p className="text-sm text-[#6B7D6B] line-through">
                                                                ${pkg.price.toFixed(2)}
                                                            </p>
                                                        )}
                                                        <p className="text-2xl font-bold text-[#1B5E20]">
                                                            ${currentPrice.toFixed(2)}
                                                        </p>
                                                        {purchaseType === 'subscribe' && (
                                                            <p className="text-xs text-[#2E7D32]">{pkg.frequency}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <div className="space-y-4">
                            <Button
                                size="lg"
                                onClick={redirectToCheckout}
                                className="w-full bg-[#4CAF50] hover:bg-[#2E7D32] text-white h-14 text-lg"
                            >
                                {purchaseType === 'subscribe' ? 'Subscribe Now' : 'Proceed to Checkout'} - $
                                {purchaseType === 'subscribe'
                                    ? packages.find(p => p.id === selectedPackage)?.subscribePrice.toFixed(2)
                                    : packages.find(p => p.id === selectedPackage)?.price.toFixed(2)}
                            </Button>
                            {purchaseType === 'subscribe' && (
                                <p className="text-xs text-center text-[#6B7D6B]">
                                    Delivered {packages.find(p => p.id === selectedPackage)?.frequency}. Cancel anytime. Free shipping on all subscription orders.
                                </p>
                            )}

                            <div className="grid grid-cols-3 gap-4 text-center text-sm">
                                <div className="flex flex-col items-center gap-2">
                                    <Truck className="w-5 h-5 text-[#4CAF50]" />
                                    <span className="text-[#6B7D6B]">Free Shipping</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-[#4CAF50]" />
                                    <span className="text-[#6B7D6B]">180-Day Guarantee</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <Package className="w-5 h-5 text-[#4CAF50]" />
                                    <span className="text-[#6B7D6B]">Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ingredients Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <h2 className="text-3xl font-bold text-[#1B5E20] text-center mb-12">
                        Premium Ingredients
                    </h2>
                    <div className="space-y-6">
                        {ingredients.map((ingredient, index) => (
                            <Card key={index} className="border-[#D7E5D7]">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Check className="w-6 h-6 text-[#2E7D32]" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="font-semibold text-[#1B5E20]">{ingredient.name}</h3>
                                                <Badge className="bg-[#E8F5E9] text-[#2E7D32] border-[#C8E6C9]">
                                                    {ingredient.amount}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-[#3E5A3E]">{ingredient.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted Banner */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <img
                        src={trustedBanner}
                        alt="Trusted by thousands of customers"
                        className="w-full rounded-xl shadow-md"
                    />
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
                            What Our Customers Say
                        </h2>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-[#4CAF50] text-[#4CAF50]" />
                            ))}
                            <StarHalf className="w-6 h-6 fill-[#4CAF50] text-[#4CAF50]" />
                        </div>
                        <p className="text-[#3E5A3E]">Based on 1,247 verified reviews</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Review 1 */}
                        <Card className="border-[#D7E5D7]">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Life-Changing Results</h3>
                                <p className="text-sm text-[#3E5A3E] mb-4 leading-relaxed">
                                    "After just 3 weeks, I noticed a significant improvement in my leg comfort. The swelling has reduced dramatically and I can finally enjoy my daily walks again. This product has truly changed my life!"
                                </p>
                                <img src={margaretReview} alt="Customer review photo" className="w-full max-h-64 object-contain rounded-lg mb-4" />
                                <p className="text-sm font-medium text-[#2E7D32]">- Margaret S.</p>
                                <p className="text-xs text-[#6B7D6B]">Verified Purchase • February 12, 2025</p>
                            </CardContent>
                        </Card>

                        {/* Review 2 */}
                        <Card className="border-[#D7E5D7]">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Finally Found Relief</h3>
                                <p className="text-sm text-[#3E5A3E] mb-4 leading-relaxed">
                                    "I've tried so many products over the years, but SanaLymph is the only one that actually works. My ankles feel so much better and I have more energy throughout the day. Highly recommend!"
                                </p>
                                <img src={robertReview} alt="Customer review photo" className="w-full max-h-64 object-contain rounded-lg mb-4" />
                                <p className="text-sm font-medium text-[#2E7D32]">- Robert T.</p>
                                <p className="text-xs text-[#6B7D6B]">Verified Purchase • March 28, 2025</p>
                            </CardContent>
                        </Card>

                        {/* Review 3 */}
                        <Card className="border-[#D7E5D7]">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Quality You Can Trust</h3>
                                <p className="text-sm text-[#3E5A3E] mb-4 leading-relaxed">
                                    "The transparency about ingredients and third-party testing gave me confidence to try this. I'm so glad I did! Natural ingredients that actually work. My circulation has never felt better."
                                </p>
                                <p className="text-sm font-medium text-[#2E7D32]">- Linda M.</p>
                                <p className="text-xs text-[#6B7D6B]">Verified Purchase • January 5, 2026</p>
                            </CardContent>
                        </Card>

                        {/* Review 4 */}
                        <Card className="border-[#D7E5D7]">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Amazing Support</h3>
                                <p className="text-sm text-[#3E5A3E] mb-4 leading-relaxed">
                                    "Not only does the product work incredibly well, but the customer service is outstanding. They genuinely care about their customers. I'm on my third bottle and couldn't be happier!"
                                </p>
                                <p className="text-sm font-medium text-[#2E7D32]">- James K.</p>
                                <p className="text-xs text-[#6B7D6B]">Verified Purchase • April 18, 2026</p>
                            </CardContent>
                        </Card>

                        {/* Review 5 */}
                        <Card className="border-[#D7E5D7]">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Noticeable Difference</h3>
                                <p className="text-sm text-[#3E5A3E] mb-4 leading-relaxed">
                                    "Within the first month, I noticed my legs felt lighter and less heavy at the end of the day. The natural ingredients give me peace of mind. This is now part of my daily routine!"
                                </p>
                                <p className="text-sm font-medium text-[#2E7D32]">- Patricia W.</p>
                                <p className="text-xs text-[#6B7D6B]">Verified Purchase • December 9, 2025</p>
                            </CardContent>
                        </Card>

                        {/* Review 6 */}
                        <Card className="border-[#D7E5D7]">
                            <CardContent className="pt-6">
                                <div className="flex items-center gap-1 mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#4CAF50] text-[#4CAF50]" />
                                    ))}
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Exceeded Expectations</h3>
                                <p className="text-sm text-[#3E5A3E] mb-4 leading-relaxed">
                                    "I was skeptical at first, but SanaLymph has exceeded all my expectations. My overall wellness has improved and I feel more comfortable throughout the day. Worth every penny!"
                                </p>
                                <p className="text-sm font-medium text-[#2E7D32]">- David H.</p>
                                <p className="text-xs text-[#6B7D6B]">Verified Purchase • April 3, 2026</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="bg-gradient-to-br from-[#E8F5E9] to-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#1B5E20] text-center mb-12">
                            Why Choose SanaVieta?
                        </h2>
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Made in USA</h3>
                                <p className="text-sm text-[#6B7D6B]">GMP-certified facilities</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Third-Party Tested</h3>
                                <p className="text-sm text-[#6B7D6B]">Independent lab verified</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <RefreshCw className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">180-Day Guarantee</h3>
                                <p className="text-sm text-[#6B7D6B]">Money-back promise</p>
                            </div>
                            <div>
                                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Truck className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Free Shipping</h3>
                                <p className="text-sm text-[#6B7D6B]">On all orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <h2 className="text-3xl font-bold text-[#1B5E20] text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index} className="border-[#D7E5D7] overflow-hidden">
                                <CardContent className="p-0">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full text-left p-6 flex items-center justify-between hover:bg-[#F1F8F1] transition-colors"
                                    >
                                        <span className="font-semibold text-[#1B5E20] pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-[#4CAF50] flex-shrink-0 transition-transform duration-300 ${
                                                openFaq === index ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                            openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="px-6 pb-6">
                                            <p className="text-[#3E5A3E] leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#1B5E20] text-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Support Your Lymphatic Health?
                    </h2>
                    <p className="text-lg text-[#E8F5E9] mb-8 max-w-2xl mx-auto">
                        Join thousands who have discovered natural comfort and vitality with SanaLymph
                    </p>
                    <Button
                        size="lg"
                        onClick={() => console.log('something')}
                        className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-12 h-14 text-lg"
                    >
                        Order Now
                    </Button>
                    <p className="text-sm text-[#E8F5E9] mt-6">
                        Free shipping • 180-Day Money-Back Guarantee • Secure checkout
                    </p>
                </div>
            </section>
        </div>
    );
}
