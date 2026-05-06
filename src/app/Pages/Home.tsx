import Hero from "@/app/components/Hero";
import Showcase from "@/app/components/Showcase";
import logoText from "@/imports/Screen_Shot_2024-06-09_at_3.04.30_PM.png";
import Benefits from "@/app/components/Benefits";
import FeaturedProduct from "@/app/components/FeaturedProduct";
import About from "@/app/components/About";
import Trust from "@/app/components/Trust";
import CTA from "@/app/components/CTA";
export default function Home(){

   return(
       <>
           <Hero />
           <Showcase logoText={logoText} />
           <Benefits />
           <FeaturedProduct />
           <About />
           <Trust />
           <CTA />
       </>
   )
}