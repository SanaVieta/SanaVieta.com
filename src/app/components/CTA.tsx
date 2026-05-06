import {Card, CardContent} from "@/app/components/ui/card";
import {Button} from "@/app/components/ui/button";
import { handleCheckout } from "../../services/handleCheckout"
import { useNavigate } from "react-router";

export default function CTA(){
    const navigate = useNavigate();
    function onNavigateToContact(){
        navigate('/contact');
        window.scroll({
            top: 0,
            behavior: 'instant'
        })
    }
    return (

        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="border-[#4CAF50] border-2 overflow-hidden">
                    <CardContent className="p-8 md:p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
                            Ready to Feel the Difference?
                        </h2>
                        <p className="text-lg text-[#3E5A3E] mb-8 max-w-2xl mx-auto">
                            Join thousands who have discovered natural comfort and vitality through SanaVieta's premium formulations
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={handleCheckout}
                                className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-8 h-12"
                            >
                                Shop Now
                            </Button>
                            <Button onClick={onNavigateToContact} size="lg" variant="outline" className="border-[#4CAF50] text-[#2E7D32] hover:bg-[#E8F5E9] h-12">
                                Contact Us
                            </Button>
                        </div>
                        <p className="text-sm text-[#6B7D6B] mt-6">
                            Free shipping on all orders • 180-Day Money-Back Guarantee
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>

    )
}