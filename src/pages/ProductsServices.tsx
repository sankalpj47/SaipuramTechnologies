import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PSHero } from "@/components/products/PSHero";
import { AvailableNow } from "@/components/products/AvailableNow";
import { ComingSoon } from "@/components/products/ComingSoon";

const ProductsServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PSHero />
      <AvailableNow />
      <ComingSoon />
      <Footer />
    </div>
  );
};

export default ProductsServices;
