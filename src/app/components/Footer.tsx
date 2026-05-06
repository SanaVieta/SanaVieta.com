import logoTextLight from "@/imports/Screen_Shot_2024-06-10_at_4.05.39_PM.png";

export default function Footer(){
    return (
        <footer className="bg-[#1B5E20] text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="mb-4">
                            <img src={logoTextLight} alt="SanaVieta" className="h-8 w-auto brightness-0 invert" />
                        </div>
                        <p className="text-sm text-[#E8F5E9]">
                            Natural wellness solutions for your vibrant life
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm text-[#E8F5E9]">
                            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Bundles</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-sm text-[#E8F5E9]">
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-[#E8F5E9]">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Quality</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-[#4CAF50] pt-8 text-center">
                    <p className="text-sm text-[#E8F5E9]">
                        © 2026 SanaVieta. All rights reserved. These statements have not been evaluated by the FDA.
                        This product is not intended to diagnose, treat, cure, or prevent any disease.
                    </p>
                </div>
            </div>
        </footer>
    )
}