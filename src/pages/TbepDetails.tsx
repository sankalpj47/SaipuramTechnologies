import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Database, Network, Cpu, Sparkles, Cloud, Brain } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Multi-Omics Integration",
    description:
      "Combines diverse omics datasets rooted in human genetics for a holistic view of disease biology.",
  },
  {
    icon: Network,
    title: "Validated PPI Networks",
    description:
      "Leverages experimentally validated protein-protein interaction networks for genome-wide analysis.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Real-time large-scale data processing powered by an efficient, scalable cloud framework.",
  },
  {
    icon: Brain,
    title: "Integrated LLM Assistant",
    description:
      "An embedded large language model helps scientists explore biological insights interactively.",
  },
  {
    icon: Sparkles,
    title: "AI-Driven Exploration",
    description:
      "Intuitive interpretation of complex relationships across networks and multi-omics data.",
  },
  {
    icon: Cpu,
    title: "Genome-Wide Analysis",
    description:
      "Identifies proteins physically interacting with disease-associated genes at scale.",
  },
];

const TbepDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-primary-foreground relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  to="/products-services"
                  className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Products & Services
                </Link>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-semibold tracking-widest">
                  COMMERCIAL · FLAGSHIP PLATFORM
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-4xl mb-6">
                TBEP — Target-Based Evidence Platform
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
                A novel web-based bioinformatics tool for identifying therapeutic targets and biomarkers — powered by multi-omics data, validated PPI networks, and an integrated LLM.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
               <Button
  asChild
  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
>
  <a
    href="https://tbep.saipuram.in/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Launch TBEP
    <ExternalLink className="w-4 h-4 ml-2" />
  </a>
</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Overview
            </h2>
            <div className="space-y-5 text-foreground/80 leading-relaxed text-lg">
              <p>
                We present a novel web-based bioinformatics tool designed to facilitate the identification of novel therapeutic targets and biomarkers for drug discovery. The tool integrates multi-omics datasets rooted in human genetics and utilizes experimentally validated protein-protein interaction (PPI) networks to perform genome-wide analyses of proteins that physically interact with genes responsible for disease phenotypes.
              </p>
              <p>
                A key feature of TBEP is its real-time, large-scale data processing capability — enabled by an efficient architecture and a cloud-based framework. The platform also incorporates an integrated large language model (LLM) that helps scientists explore biological insights drawn from the generated networks and multi-omics data, enhancing interpretation through a more interactive and intuitive analysis experience.
              </p>
              <p>
                Together, this integration of multi-omics data, PPI networks, and AI-driven exploration provides a powerful framework for accelerating the discovery of novel drug targets and biomarkers.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="mb-6">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                See TBEP in Action
              </h2>
              <p className="text-muted-foreground">A short walkthrough of the platform</p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-lg">
              <video
                src="/videos/tbep-intro.mp4"
                controls
                playsInline
                className="w-full h-auto block"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection className="mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
              Platform Highlights
            </h2>
            <p className="text-accent">What makes TBEP distinctive</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="bg-card rounded-3xl p-7 border border-border h-full hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection>
            <div className="bg-primary rounded-[3rem] p-10 md:p-14 text-primary-foreground text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Ready to accelerate your discovery?
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Explore TBEP and put multi-omics, PPI networks, and AI-driven analysis to work for your research.
              </p>
            <Button
  asChild
  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
>
  <a
    href="https://tbep.saipuram.in/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Launch TBEP
    <ExternalLink className="w-4 h-4 ml-2" />
  </a>
</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TbepDetails;
