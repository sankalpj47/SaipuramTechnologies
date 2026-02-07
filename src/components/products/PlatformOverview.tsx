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
    <section id="platform" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="gradient-text">Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our SaaS-based Discovery Operating System built on advanced cloud architecture
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <div className="group relative h-full">
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
                />
                <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-xl">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
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
