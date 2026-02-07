import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PSHero } from "@/components/products/PSHero";
import { PlatformOverview } from "@/components/products/PlatformOverview";
import { ProductsSection } from "@/components/products/ProductsSection";
import { ServicesSection } from "@/components/products/ServicesSection";
import { BusinessModel } from "@/components/products/BusinessModel";
import { CompetitiveAdvantage } from "@/components/products/CompetitiveAdvantage";

const ProductsServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PSHero />
      <PlatformOverview />
      <ProductsSection />
      <ServicesSection />
      <BusinessModel />
      <CompetitiveAdvantage />
      <Footer />
    </div>
  );
};

export default ProductsServices;
