import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ScientificPlatform } from "@/components/ScientificPlatform";
import { ThreePillars } from "@/components/ThreePillars";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ScientificPlatform />
      <ThreePillars />
      <Footer />
    </div>
  );
};

export default Index;
