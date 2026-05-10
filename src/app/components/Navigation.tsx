import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from 'react-router'
type NavigationProps ={
    scrollToSection: (id: string) => void
    handleCheckout: () => void
    logoFull: string
}

const routes = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/product' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export default function Navigation({ scrollToSection, logoFull }: NavigationProps ){
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    function navigateTo(path: string) {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'instant' });
        setMenuOpen(false);
    }
    function handleNavClick(section: string){
        setMenuOpen(false);
        if(window.location.pathname === '/'){
            scrollToSection(section);
        }
        else{
            navigate('/')
            setTimeout(() => {
                scrollToSection(section);
            }, 100)
        }
    }

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#D7E5D7]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button  className="flex items-center" onClick={() => navigateTo('/')}>
                        <img src={logoFull} alt="SanaVieta" className="h-14 w-auto" />
                    </button>
                    <div className="hidden md:flex items-center gap-8">
                        {routes.map(({ label, path }) => (
                            <button
                                type="button"
                                key={path}
                                onClick={() => navigateTo(path)}
                                className="text-[#3E5A3E] hover:text-[#2E7D32] transition-colors"
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            onClick={() => handleNavClick('products')}
                            className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white"
                        >
                            Shop Now
                        </Button>
                        <button
                            className="md:hidden flex flex-col gap-1.5 p-1"
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-0.5 bg-[#3E5A3E] transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-[#3E5A3E] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-[#3E5A3E] transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-white border-t border-[#D7E5D7] px-4 pb-4 flex flex-col gap-4 pt-3">
                    {routes.map(({ label, path }) => (
                        <button type="button" key={path} onClick={() => navigateTo(path)} className="text-left text-[#3E5A3E] hover:text-[#2E7D32] transition-colors">{label}</button>
                    ))}
                </div>
            </div>
        </nav>
    )
}