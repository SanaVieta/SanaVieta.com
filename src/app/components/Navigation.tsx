import { Button } from "./ui/button";
import { useNavigate } from 'react-router'
type NavigationProps ={
    scrollToSection: (id: string) => void
    handleCheckout: () => void
    logoFull: string
}

export default function Navigation({ scrollToSection, logoFull }: NavigationProps ){
    const navigate = useNavigate();
    function handleNavClick(section: string){
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
                    <div className="flex items-center">
                        <img src={logoFull} alt="SanaVieta" className="h-14 w-auto" />
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => handleNavClick('benefits')}
                            className="text-[#3E5A3E] hover:text-[#2E7D32] transition-colors"
                        >
                            Benefits
                        </button>
                        <button
                            onClick={() => handleNavClick('products')}
                            className="text-[#3E5A3E] hover:text-[#2E7D32] transition-colors"
                        >
                            Products
                        </button>
                        <button
                            onClick={() => handleNavClick('about')}
                            className="text-[#3E5A3E] hover:text-[#2E7D32] transition-colors"
                        >
                            Our Story
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="text-[#3E5A3E] hover:text-[#2E7D32] transition-colors"
                        >
                           Contact
                        </button>
                    </div>
                    <Button
                        onClick={() => handleNavClick('products')}
                        className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white"
                    >
                        Shop Now
                    </Button>
                </div>
            </div>
        </nav>
    )
}