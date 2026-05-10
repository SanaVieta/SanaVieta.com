import logoFull from '@/imports/SanaV_Logo_-_BG_removed.png';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { Outlet } from "react-router";
import { handleCheckout } from "@/services/handleCheckout";
export default function Layout(){
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#F1F8F1]">
            {/* Navigation */}
            <Navigation
                scrollToSection={scrollToSection}
                handleCheckout={handleCheckout}
                logoFull={logoFull}
            />
                <Outlet/>
            <Footer />
        </div>
    );

}