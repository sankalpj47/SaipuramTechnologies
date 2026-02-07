import { AnimatedSection } from "../AnimatedSection";
import { GraduationCap, Building2, Briefcase } from "lucide-react";

const tiers = [
  {
    icon: GraduationCap,
    name: "Academic Tier",
    description:
      "Free or low-cost access for university researchers—democratizing discovery tools for the scientific community.",
    highlight: false,
  },
  {
    icon: Building2,
    name: "Biotech / Pharma Tier",
    description:
      "Secure, private instances where companies upload proprietary internal data alongside integrated public databases.",
    highlight: true,
  },
  {
    icon: Briefcase,
    name: "Consultancy",
    description:
      "Deep-dive target validation reports for venture capital firms or early-stage startups looking to vet a therapeutic lead.",
    highlight: false,
  },
];

export const BusinessModel = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Business </span>
            <span className="gradient-text">Model</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            B2B SaaS with tiered subscription plans
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.15}>
              <div
                className={`rounded-2xl p-8 border h-full flex flex-col transition-all duration-300 shadow-sm hover:shadow-xl ${
                  tier.highlight
                    ? "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30"
                    : "bg-card border-border hover:border-primary/20"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  tier.highlight ? "gradient-bg" : "bg-primary/10"
                }`}>
                  <tier.icon className={`w-6 h-6 ${tier.highlight ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {tier.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {tier.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
