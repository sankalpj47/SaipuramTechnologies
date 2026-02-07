import { AnimatedSection } from "../AnimatedSection";
import { Zap, MessageSquare, Award } from "lucide-react";

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
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Competitive </span>
            <span className="gradient-text">Advantage</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="relative h-full group">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background rounded-2xl p-8 h-full flex flex-col border border-transparent">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
