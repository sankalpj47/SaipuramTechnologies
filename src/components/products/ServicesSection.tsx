import { AnimatedSection } from "../AnimatedSection";
import { Atom, ShieldCheck, LineChart, HeartPulse } from "lucide-react";

const services = [
  {
    icon: Atom,
    name: "Elevare Discovery",
    description:
      "An AI-powered molecular modeling and compound optimization platform that identifies promising drug candidates faster.",
  },
  {
    icon: ShieldCheck,
    name: "Elevare Collaborate",
    description:
      "Secure AI-driven data collaboration suite enabling pharma and biotech partners to share, analyze, and innovate safely across ecosystems.",
  },
  {
    icon: LineChart,
    name: "Elevare Insights",
    description:
      "An advanced analytics engine that integrates R&D, clinical, and real-world data to uncover hidden patterns and optimize decision-making.",
  },
  {
    icon: HeartPulse,
    name: "Elevare Clinical",
    description:
      "Predictive AI models for patient recruitment, trial design, and adverse event forecasting—reducing trial costs and improving success rates.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end AI services powering every stage of drug discovery
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.1}>
              <div className="group relative h-full">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                <div className="bg-background rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-300 h-full shadow-sm hover:shadow-xl">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
