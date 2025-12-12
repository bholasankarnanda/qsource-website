import HeroSection from "@/components/Home/HeroSection";
import HowWeWorkSection from "@/components/Home/HowWeWorkSection";
import PartnershipSection from "@/components/Home/PartnershipSection";
import ServicesSection from "@/components/Home/ServicesSection";
import WhatWeOfferSection from "@/components/Home/WhatWeOfferSection";

// Helper function to fetch data
async function getStrapiData() {
  const res = await fetch("http://localhost:1337/api/home-page?populate=*", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const strapiResponse = await getStrapiData();

  // Clean up the response structure
  // Strapi returns { data: { attributes: { ... } } }
  const pageData = strapiResponse?.data;

  return (
    <main>
      {/*---------- Home component call start ------------ */}
      <HeroSection />
      <ServicesSection data={pageData} />
      <WhatWeOfferSection />
      <HowWeWorkSection />
      <PartnershipSection />
      {/*---------- Home component call end ------------ */}
    </main>
  );
}
