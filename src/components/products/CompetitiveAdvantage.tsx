import { AnimatedSection } from "../AnimatedSection";
import { Zap, MessageSquare, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    icon: Zap,
    title: "Speed to Insight",
    description:
      "Traditional analysis takes weeks; our system works in real-time, delivering answers when they matter most.",
  },
  {
    icon: MessageSquare,
    title: "The LLM Edge",
    description:
      "Most tools provide data but not narrative. By integrating an LLM directly with the knowledge graph, we bridge raw data and biological hypotheses.",
  },
  {
    icon: Award,
    title: "Proven Framework",
    description:
      "Built on a peer-reviewed, published architecture (University of Missouri / AstraZeneca / Alexion collaboration) validated with real-world datasets like STRING and Open Targets.",
  },
];

export const CompetitiveAdvantage = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Why Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight max-w-2xl">
            Our{" "}
            <span className="text-accent">competitive advantage</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {advantages.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="group bg-card rounded-3xl p-8 h-full flex flex-col hover:bg-primary transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed flex-grow transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <h3 className="font-display text-2xl md:text-4xl text-primary-foreground leading-tight max-w-xl">
              Ready to transform your drug discovery pipeline?
            </h3>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base flex-shrink-0">
              Get in Touch
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
