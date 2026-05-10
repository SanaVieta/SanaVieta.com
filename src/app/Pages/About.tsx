import {
    ShieldCheck,
    Leaf,
    Heart,
    Users,
    Award,
    Target,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import storyImage from "../../imports/Screenshot_2026-05-08_at_3.21.28_PM.png";

export default function About() {
    const values = [
        {
            icon: Leaf,
            title: "Natural First",
            description:
                "We believe in the power of nature. Every ingredient is carefully selected from pure, natural sources and formulated for maximum efficacy.",
        },
        {
            icon: ShieldCheck,
            title: "Science-Backed",
            description:
                "Our formulations are supported by published research and validated through rigorous third-party testing for purity and potency.",
        },
        {
            icon: Heart,
            title: "Customer-Centric",
            description:
                "Your health and satisfaction are our top priorities. We stand behind every product with our 180-day money-back guarantee.",
        },
        {
            icon: Award,
            title: "Quality Standards",
            description:
                "Manufactured in GMP-certified facilities in the USA, meeting the highest standards of quality and safety.",
        },
    ];

    const commitments = [
        {
            title: "Radical Transparency",
            description:
                "We list every ingredient with exact amounts - no proprietary blends hiding what you're really getting. You deserve to know exactly what you're putting in your body.",
        },
        {
            title: "Evidence-Based Formulation",
            description:
                "Each ingredient is selected based on published scientific research. We don't follow trends - we follow the science.",
        },
        {
            title: "Senior Wellness Focus",
            description:
                "We specifically design our products for adults 60+ who want to maintain their independence, vitality, and quality of life.",
        },
        {
            title: "No Compromise on Quality",
            description:
                "From sourcing to manufacturing to testing, we never cut corners. Your health is too important for anything less than the best.",
        },
    ];

    return (
        <div className="pb-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#E8F5E9] to-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-[#E8F5E9] text-[#1B5E20] border-[#C8E6C9] hover:bg-[#E8F5E9] mb-6">
                            About SanaVieta
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#1B5E20] mb-6">
                            Senior Wellness Through Radical Transparency
                        </h1>
                        <p className="text-lg text-[#3E5A3E] leading-relaxed">
                            We're on a mission to provide natural,
                            science-backed wellness solutions for adults who
                            refuse to let age define their vitality. At
                            SanaVieta, we believe you deserve complete
                            transparency about what you're putting in your
                            body - and supplements that actually work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-6 text-center">
                            Our Story
                        </h2>
                        <div className="space-y-6 text-[#3E5A3E] leading-relaxed">
                            <p>
                                SanaVieta was born from a simple frustration:
                                the supplement industry was failing seniors.
                                Overpromising miracle cures, hiding ingredients
                                in proprietary blends, and treating older adults
                                like they didn't deserve straight answers.
                            </p>
                            <p>
                                We knew there had to be a better way. A way that
                                respected the intelligence and experience of
                                adults 60+ while providing real, research-backed
                                solutions for the health challenges that come
                                with aging.
                            </p>
                            <p>
                                That's why we created SanaVieta - a naturopathic
                                wellness company built on radical transparency,
                                scientific rigor, and genuine care for our
                                customers. We don't hide behind marketing hype
                                or vague promises. Every ingredient is listed
                                with exact amounts. Every claim is backed by
                                research. Every bottle is tested by independent
                                third parties.
                            </p>
                            <p className="font-semibold text-[#1B5E20]">
                                Because you deserve to know exactly what you're
                                getting - and to get exactly what you need.
                            </p>
                        </div>
                        <div className="mt-8 flex justify-center">
                            <img
                                src={storyImage}
                                alt="Our Story"
                                className="max-w-sm w-full rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-12 text-center">
                            Our Core Values
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="border-[#D7E5D7] hover:shadow-lg transition-shadow"
                                    >
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 bg-[#E8F5E9] rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-6 h-6 text-[#2E7D32]" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-[#1B5E20] mb-2">
                                                        {value.title}
                                                    </h3>
                                                    <p className="text-sm text-[#3E5A3E] leading-relaxed">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Commitments */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-12 text-center">
                            Our Commitments to You
                        </h2>
                        <div className="space-y-6">
                            {commitments.map((commitment, index) => (
                                <Card key={index} className="border-[#D7E5D7]">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-[#1B5E20] mb-2">
                                                    {commitment.title}
                                                </h3>
                                                <p className="text-[#3E5A3E] leading-relaxed">
                                                    {commitment.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Standards */}
            <section className="bg-gradient-to-br from-[#E8F5E9] to-white py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B5E20] mb-12 text-center">
                            Our Quality Standards
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <ShieldCheck className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">
                                    GMP Certified
                                </h3>
                                <p className="text-sm text-[#3E5A3E]">
                                    All products manufactured in FDA-registered,
                                    GMP-certified facilities in the United States
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">
                                    Third-Party Tested
                                </h3>
                                <p className="text-sm text-[#3E5A3E]">
                                    Independent laboratory verification for
                                    purity, potency, and safety on every batch
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="font-semibold text-[#1B5E20] mb-2">
                                    Research-Backed
                                </h3>
                                <p className="text-sm text-[#3E5A3E]">
                                    Every ingredient supported by published
                                    scientific research and clinical studies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Promise */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <Card className="border-[#4CAF50] border-2 bg-gradient-to-br from-[#E8F5E9] to-white">
                            <CardContent className="p-8 md:p-12 text-center">
                                <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1B5E20] mb-4">
                                    Our Promise to You
                                </h2>
                                <p className="text-[#3E5A3E] leading-relaxed mb-6">
                                    We will never compromise on quality. We will
                                    never hide behind vague claims or proprietary
                                    blends. We will always put your health and
                                    trust above profits. And we will always stand
                                    behind our products with our 180-day
                                    money-back guarantee.
                                </p>
                                <p className="text-lg font-semibold text-[#1B5E20]">
                                    Because at SanaVieta, your vitality is our
                                    mission.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-[#1B5E20] text-white py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Users className="w-16 h-16 mx-auto mb-6 text-[#E8F5E9]" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            A Team That Cares
                        </h2>
                        <p className="text-lg text-[#E8F5E9] leading-relaxed mb-8">
                            Behind SanaVieta is a dedicated team of
                            researchers, formulators, and customer care
                            specialists who are passionate about senior
                            wellness. We're not just selling supplements -
                            we're on a mission to help you maintain your
                            independence, vitality, and quality of life at
                            every age.
                        </p>
                        <p className="text-[#E8F5E9]">
                            Have questions? Want to share your story? We'd
                            love to hear from you.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block mt-6 bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            Contact Our Team
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}