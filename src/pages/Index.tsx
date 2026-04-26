import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ScientificPlatform } from "@/components/ScientificPlatform";
import { ThreePillars } from "@/components/ThreePillars";
import { Footer } from "@/components/Footer";
import { EnterpriseSection } from "@/components/EnterpriseSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <ScientificPlatform />
      <ThreePillars />
      <EnterpriseSection />
      <Footer />
    </div>
  );
};

export default Index;
