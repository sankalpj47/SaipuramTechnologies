import { AnimatedSection } from "./AnimatedSection";
import { Zap, TrendingUp, DollarSign, Network, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const traits = [
  { icon: Zap, label: "Accelerate Discovery" },
  { icon: TrendingUp, label: "R&D Productivity" },
  { icon: DollarSign, label: "Cost Optimization" },
  { icon: Network, label: "Innovation Network" },
  { icon: CheckCircle2, label: "Data Integration" },
  { icon: Zap, label: "Real-time Insights" },
];

export const ValueProposition = () => {
  return (
    <section id="value" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <AnimatedSection>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-6">
                Our Value
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
                We believe that AI encompasses a range of{" "}
                <span className="text-accent">distinct capabilities</span>{" "}
                that define and empower innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our bold approach transforms pharmaceutical R&D by combining cutting-edge AI with deep biomedical expertise, creating measurable impact across the entire value chain.
              </p>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6">
                Explore Our Platform
              </Button>
            </div>
          </AnimatedSection>

          {/* Right traits grid */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-3xl p-8">
              <span className="inline-block px-3 py-1 rounded-full border border-border text-xs text-muted-foreground mb-6">
                Key Capabilities
              </span>
              <div className="grid grid-cols-2 gap-4">
                {traits.map((trait, i) => (
                  <div key={i} className="flex items-center gap-3 py-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <trait.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{trait.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Testimonial-style section */}
        <AnimatedSection delay={0.3} className="mt-24">
          <div className="bg-card rounded-3xl p-10 md:p-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-8">
              Testimonial
            </span>
            <p className="font-display text-2xl md:text-3xl text-foreground leading-relaxed max-w-3xl mx-auto mb-8">
              "Saipuram helped us recognize hidden patterns in our drug discovery pipeline and accelerate our R&D timelines significantly."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold">P</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Pharma Partner</p>
                <p className="text-sm text-muted-foreground">Global Biotech Leader</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.4} className="mt-16">
          <div className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl md:text-4xl text-primary-foreground leading-tight mb-2">
                Are you ready to uncover your data's potential?
              </h3>
            </div>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base flex-shrink-0">
              Get Started
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
