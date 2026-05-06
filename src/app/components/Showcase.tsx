type ShowcaseProps = {
    logoText: string;
}
export default function Showcase({logoText}: ShowcaseProps){
    return(
        <section className="py-12 border-y border-[#D7E5D7]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-8">
                    <div className="text-center">
                        <img src={logoText} alt="SanaVieta" className="h-12 md:h-16 w-auto mx-auto mb-4" />
                        <p className="text-sm text-[#6B7D6B] uppercase tracking-wider">
                            Naturopathic Wellness • Radical Transparency
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#1B5E20]">100%</p>
                            <p className="text-sm text-[#6B7D6B] mt-1">Natural</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#1B5E20]">GMP</p>
                            <p className="text-sm text-[#6B7D6B] mt-1">Certified</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#1B5E20]">USA</p>
                            <p className="text-sm text-[#6B7D6B] mt-1">Made</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold text-[#1B5E20]">180</p>
                            <p className="text-sm text-[#6B7D6B] mt-1">Day Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}