import { AnimatedSection } from "./AnimatedSection";
import { FlaskConical, Target, MessageSquare } from "lucide-react";
import researchAgentsImg from "@/assets/pillar-research-agents.jpg";
import discoveryEngineImg from "@/assets/pillar-discovery-engine.jpg";
import conversationalImg from "@/assets/pillar-conversational.jpg";

const pillars = [
  {
    icon: FlaskConical,
    title: "AI Research Agents",
    description:
      "Automated experimentation, multi-omics analysis, and hypothesis generation. Like having a tireless PhD student that never sleeps.",
    bullets: ["Experiment Design", "Data Analysis", "Literature Mining", "Hypothesis Testing"],
    image: researchAgentsImg,
    reverse: false,
  },
  {
    icon: Target,
    title: "Discovery Engine",
    description:
      "End-to-end drug discovery from target identification to molecule optimization. Predict success before the first experiment.",
    bullets: ["Target Identification", "Molecule Generation", "Drug Repurposing", "Clinical Prediction"],
    image: discoveryEngineImg,
    reverse: true,
  },
  {
    icon: MessageSquare,
    title: "Conversational Intelligence",
    description:
      "Natural language interface for enterprise decision support. 95%+ accuracy across complex, multi-source scientific data.",
    bullets: ["NLP Insights", "Decision Support", "Data Visualization", "Enterprise Analytics"],
    image: conversationalImg,
    reverse: false,
  },
];

export const ThreePillars = () => {
  return (
    <section id="pillars" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Our Platform
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-4">
            Three Pillars. <span className="text-accent">One Platform.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Research, discovery, and intelligence unified under Saipuram
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  p.reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <p.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl mb-4 text-foreground">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {p.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm md:text-base">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            <div className="rounded-3xl overflow-hidden shadow-lg w-[90%] md:w-[85%] mx-auto">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
