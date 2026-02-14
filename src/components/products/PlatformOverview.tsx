import { AnimatedSection } from "../AnimatedSection";
import { Bot, Search, Cloud } from "lucide-react";

const features = [
  {
    icon: Cloud,
    title: "SaaS Discovery OS",
    description:
      "A cloud-based Discovery Operating System that moves beyond static data visualization—providing a \"Copilot for Drug Discovery.\"",
  },
  {
    icon: Bot,
    title: "Autonomous Agents",
    description:
      "Agents that actively scout the interactome—continuously monitoring newly published CRISPR screens and alerting when genes show high network centrality in target pathways.",
  },
  {
    icon: Search,
    title: "AI Scientist Interface",
    description:
      "A \"Search Engine for Biology\" where PageRank isn't for websites but for disease-driving proteins, powered by real-time visualization and knowledge graphs.",
  },
];

export const PlatformOverview = () => {
  return (
    <section id="platform" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            The Platform
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight max-w-2xl">
            Our SaaS-based{" "}
            <span className="text-accent">Discovery Operating System</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="group bg-card rounded-3xl p-8 h-full flex flex-col hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
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
      </div>
    </section>
  );
};
