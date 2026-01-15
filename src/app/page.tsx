import AboutSection from "./(site)/_sections/home/AboutSection";
import ClientsSection from "./(site)/_sections/home/ClientsSection";
import EcosystemSection from "./(site)/_sections/home/EcosystemSection";
import HeroSection from "./(site)/_sections/home/HeroSection";
import PartnershipsSection from "./(site)/_sections/home/PartnershipsSection";
import ProductSalesCtaSection from "./(site)/_sections/home/ProductSalesCtaSection";
import Range from "./(site)/_components/Range";
import RoutesSection from "./(site)/_sections/home/RoutesSection";
import ServicesSection from "./(site)/_sections/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Range /> {/* Feito */}
      <RoutesSection />
      <AboutSection /> {/* Feito */}
      <EcosystemSection /> {/* Feito */}
      <PartnershipsSection /> {/* Feito */}
      <ServicesSection /> {/* Feito */}
      <ClientsSection /> {/* Feito */}
      <ProductSalesCtaSection />
      <Range /> {/* Feito */}
    </main>
  );
}
