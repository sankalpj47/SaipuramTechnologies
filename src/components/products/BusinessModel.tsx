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
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Business Model
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight max-w-2xl">
            B2B SaaS with{" "}
            <span className="text-accent">tiered subscription</span> plans
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.15}>
              <div
                className={`rounded-3xl p-8 h-full flex flex-col transition-all duration-500 cursor-pointer ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-primary hover:text-primary-foreground group"
                }`}
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                  tier.highlight ? "bg-accent" : "bg-primary/10 group-hover:bg-primary-foreground/10"
                }`}>
                  <tier.icon className={`w-6 h-6 transition-colors duration-500 ${
                    tier.highlight ? "text-accent-foreground" : "text-primary group-hover:text-primary-foreground"
                  }`} />
                </div>
                <h3 className={`font-display text-xl mb-3 transition-colors duration-500 ${
                  tier.highlight ? "text-primary-foreground" : "text-foreground group-hover:text-primary-foreground"
                }`}>
                  {tier.name}
                </h3>
                <p className={`leading-relaxed flex-grow transition-colors duration-500 ${
                  tier.highlight ? "text-primary-foreground/70" : "text-muted-foreground group-hover:text-primary-foreground/70"
                }`}>
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
