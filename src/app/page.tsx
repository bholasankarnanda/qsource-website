import HeroSection from "@/components/Home/HeroSection";
import HowWeWorkSection from "@/components/Home/HowWeWorkSection";
import ServicesSection from "@/components/Home/ServicesSection";
import WhatWeOfferSection from "@/components/Home/WhatWeOfferSection";


export default function Home() {
  return (
    <main>
      {/*---------- Home component call start ------------ */}
      <HeroSection />
      <ServicesSection />
      <WhatWeOfferSection />
      <HowWeWorkSection />
      
      {/*---------- Home component call end ------------ */}
    </main>
  );
}
