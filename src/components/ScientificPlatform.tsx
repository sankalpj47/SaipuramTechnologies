import { AnimatedSection } from "./AnimatedSection";
import { Search, BarChart3, Lightbulb, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "STEP 1",
    title: "Ask",
    description: "Natural language queries across scientific domains",
  },
  {
    icon: BarChart3,
    step: "STEP 2",
    title: "Analyze",
    description: "AI-driven multi-omics and molecular analysis",
  },
  {
    icon: Lightbulb,
    step: "STEP 3",
    title: "Discover",
    description: "Novel targets, molecules, and actionable insights",
  },
  {
    icon: MessageSquare,
    step: "STEP 4",
    title: "Explain",
    description: "Clear, cited, reproducible explanations",
  },
];

export const ScientificPlatform = () => {
  return (
    <section id="platform" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            The Workflow
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-4">
            A Self-Driving <span className="text-accent">Scientific Platform</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end AI workflows that take you from question to breakthrough
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="relative flex">
              <AnimatedSection delay={i * 0.15} className="flex-1">
                <div className="group bg-card rounded-3xl p-8 h-full flex flex-col hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-accent text-xs font-semibold tracking-wider mb-2">
                    {s.step}
                  </p>
                  <h3 className="font-display text-2xl mb-3 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed flex-grow transition-colors duration-500">
                    {s.description}
                  </p>
                </div>
              </AnimatedSection>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
