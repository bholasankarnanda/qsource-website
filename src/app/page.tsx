import HeroSection from "@/components/Home/HeroSection";
import HowWeWorkSection from "@/components/Home/HowWeWorkSection";
import PartnershipSection from "@/components/Home/PartnershipSection";
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
      <PartnershipSection />
      {/*---------- Home component call end ------------ */}
    </main>
  );
}
