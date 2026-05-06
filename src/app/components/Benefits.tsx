import {Badge} from "@/app/components/ui/badge";
import {Card, CardContent} from "@/app/components/ui/card";
import {Heart, Leaf, ShieldCheck, Sparkles} from "lucide-react";

export default function Benefits(){
    return (

        <section id="benefits" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge className="bg-[#E8F5E9] text-[#1B5E20] border-[#C8E6C9] hover:bg-[#E8F5E9] mb-4">
                        Why Choose SanaVieta
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
                        Natural Support for Your Well-Being
                    </h2>
                    <p className="text-lg text-[#3E5A3E] max-w-2xl mx-auto">
                        Experience the difference that pure, scientifically-backed ingredients can make in your daily comfort and vitality
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card className="border-[#D7E5D7] hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-[#2E7D32]" />
                            </div>
                            <h3 className="font-semibold text-[#1B5E20] mb-2">Circulation Support</h3>
                            <p className="text-sm text-[#3E5A3E]">
                                Support healthy fluid movement throughout your body for optimal comfort
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#D7E5D7] hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6 text-[#2E7D32]" />
                            </div>
                            <h3 className="font-semibold text-[#1B5E20] mb-2">Immune Foundation</h3>
                            <p className="text-sm text-[#3E5A3E]">
                                Your lymphatic system is the backbone of your body's natural defenses
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#D7E5D7] hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-[#2E7D32]" />
                            </div>
                            <h3 className="font-semibold text-[#1B5E20] mb-2">Enhanced Vitality</h3>
                            <p className="text-sm text-[#3E5A3E]">
                                Feel the energy that comes when your body flows freely and naturally
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-[#D7E5D7] hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center mb-4">
                                <Leaf className="w-6 h-6 text-[#2E7D32]" />
                            </div>
                            <h3 className="font-semibold text-[#1B5E20] mb-2">Natural Ingredients</h3>
                            <p className="text-sm text-[#3E5A3E]">
                                Pure, carefully selected botanicals backed by traditional wisdom and research
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}