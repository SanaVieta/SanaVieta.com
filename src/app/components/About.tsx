import {Card, CardContent} from "./ui/card";
import {Heart, Leaf, ShieldCheck} from "lucide-react";

export default function About(){
    return (
        <section id="about" className="bg-gradient-to-br from-[#E8F5E9] to-white py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-4">
                            Senior Wellness Through Radical Transparency
                        </h2>
                        <p className="text-lg text-[#3E5A3E] leading-relaxed">
                            At SanaVieta, we believe in naturopathic wellness backed by science and delivered with complete transparency.
                            Every ingredient is carefully selected, every claim is substantiated, and every bottle is crafted with your
                            well-being in mind.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <Card className="border-[#D7E5D7] bg-white/80 backdrop-blur">
                            <CardContent className="pt-6 text-center">
                                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Leaf className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Natural First</h3>
                                <p className="text-sm text-[#3E5A3E]">
                                    Pure botanical ingredients sourced with care and formulated for maximum efficacy
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-[#D7E5D7] bg-white/80 backdrop-blur">
                            <CardContent className="pt-6 text-center">
                                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Science Backed</h3>
                                <p className="text-sm text-[#3E5A3E]">
                                    Every formulation is supported by published research and third-party testing
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-[#D7E5D7] bg-white/80 backdrop-blur">
                            <CardContent className="pt-6 text-center">
                                <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Heart className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">Your Vitality</h3>
                                <p className="text-sm text-[#3E5A3E]">
                                    Dedicated to helping you maintain independence and quality of life at every age
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}