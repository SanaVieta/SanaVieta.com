import {Heart, Leaf, ShieldCheck} from "lucide-react";

export default function Trust(){
   return (
       <section className="bg-[#1B5E20] text-white py-16 md:py-20">
           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                   <h2 className="text-3xl md:text-4xl font-bold mb-4">
                       Committed to Excellence
                   </h2>
                   <p className="text-lg text-[#E8F5E9] max-w-2xl mx-auto">
                       Every bottle meets the highest standards of quality, purity, and transparency
                   </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                   <div className="text-center">
                       <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                           <ShieldCheck className="w-8 h-8 text-white" />
                       </div>
                       <h3 className="font-semibold mb-2">Made in USA</h3>
                       <p className="text-sm text-[#E8F5E9]">
                           Manufactured in GMP-certified facilities
                       </p>
                   </div>

                   <div className="text-center">
                       <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                           <ShieldCheck className="w-8 h-8 text-white" />
                       </div>
                       <h3 className="font-semibold mb-2">Third-Party Tested</h3>
                       <p className="text-sm text-[#E8F5E9]">
                           Independent lab verification for purity
                       </p>
                   </div>

                   <div className="text-center">
                       <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                           <Leaf className="w-8 h-8 text-white" />
                       </div>
                       <h3 className="font-semibold mb-2">Natural Ingredients</h3>
                       <p className="text-sm text-[#E8F5E9]">
                           Pure botanicals, no artificial additives
                       </p>
                   </div>

                   <div className="text-center">
                       <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                           <Heart className="w-8 h-8 text-white" />
                       </div>
                       <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                       <p className="text-sm text-[#E8F5E9]">
                           180-day money-back guarantee
                       </p>
                   </div>
               </div>
           </div>
       </section>
   )
}