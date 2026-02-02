import { AnimatedSection } from "./AnimatedSection";
import { Zap, TrendingUp, DollarSign, Network } from "lucide-react";

const valueItems = [
  {
    icon: Zap,
    title: "Accelerate Discovery",
    description: "Reduce early-stage research timelines with predictive AI.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: TrendingUp,
    title: "Enhance R&D Productivity",
    description: "Identify optimal pathways for molecule development and clinical success.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: DollarSign,
    title: "Optimize Costs",
    description: "Cut inefficiencies through automation and data integration.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Network,
    title: "Empower Innovation",
    description: "Transform siloed data into a connected intelligence network.",
    gradient: "from-accent to-primary",
  },
];

export const ValueProposition = () => {
  return (
    <section id="value" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Value </span>
            <span className="gradient-text">Proposition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable impact across the pharmaceutical value chain
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{ backgroundImage: `linear-gradient(to bottom right, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2))` }}
                />
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-xl">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
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
