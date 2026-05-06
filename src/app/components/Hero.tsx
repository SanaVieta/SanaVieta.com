import {Badge} from "@/app/components/ui/badge";
import {Button} from "@/app/components/ui/button";
import {ShieldCheck} from "lucide-react";
import heroImage from "@/imports/WhatsApp_Image_2026-04-21_at_13.38.31.jpeg";

export default function Hero(){
    function scrollToSection(id: string){
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
   return (
       <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-6">
                   <Badge className="bg-[#E8F5E9] text-[#1B5E20] border-[#C8E6C9] hover:bg-[#E8F5E9]">
                       Natural Wellness Solutions
                   </Badge>
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B5E20] leading-tight">
                       Discover Pure, Natural Solutions for Your Vibrant Life
                   </h1>
                   <p className="text-lg text-[#3E5A3E] leading-relaxed">
                       Premium lymphatic system support designed for adults seeking comfort, vitality, and natural wellness through scientifically-backed herbal formulations.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-4">
                       <Button
                           size="lg"
                           onClick={() => scrollToSection('products')}
                           className="bg-[#4CAF50] hover:bg-[#2E7D32] text-white px-8 h-12"
                       >
                           Explore Products
                       </Button>
                       <Button
                           size="lg"
                           variant="outline"
                           onClick={() => scrollToSection('about')}
                           className="border-[#4CAF50] text-[#2E7D32] hover:bg-[#E8F5E9] h-12"
                       >
                           Learn More
                       </Button>
                   </div>
                   <div className="flex flex-wrap gap-6 pt-4">
                       <div className="flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5 text-[#4CAF50]" />
                           <span className="text-sm text-[#3E5A3E]">Made in USA</span>
                       </div>
                       <div className="flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5 text-[#4CAF50]" />
                           <span className="text-sm text-[#3E5A3E]">GMP Certified</span>
                       </div>
                       <div className="flex items-center gap-2">
                           <ShieldCheck className="w-5 h-5 text-[#4CAF50]" />
                           <span className="text-sm text-[#3E5A3E]">Third-Party Tested</span>
                       </div>
                   </div>
               </div>
               <div className="relative">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] to-transparent rounded-3xl -rotate-3"></div>
                   <img
                       src={heroImage}
                       alt="SanaVieta Lymphatic Support Supplements"
                       className="relative rounded-2xl shadow-2xl w-full"
                   />
               </div>
           </div>
       </section>
   )
}