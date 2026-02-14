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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight max-w-2xl">
            End-to-end AI services powering{" "}
            <span className="text-accent">every stage</span> of drug discovery
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.1}>
              <div className="group bg-card rounded-3xl p-8 h-full hover:bg-primary transition-all duration-500 cursor-pointer">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center shrink-0 transition-colors duration-500">
                    <service.icon className="w-6 h-6 text-accent transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary-foreground mb-2 transition-colors duration-500">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors duration-500">
                      {service.description}
                    </p>
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
