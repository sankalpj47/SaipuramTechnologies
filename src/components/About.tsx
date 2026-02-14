import { AnimatedSection } from "./AnimatedSection";
import { Brain, Database, Lightbulb, MessageSquare, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    label: "Our Mission",
    title: "AI & ML Powered Discovery",
    description: "Our mission is to empower pharmaceutical companies to accelerate drug discovery through advanced AI and machine learning.",
    detail: "We believe that every scientific insight, when harnessed properly, can lead to personal growth, better treatments, and global impact.",
  },
  {
    icon: Database,
    label: "Our Expertise",
    title: "Decades of Biomedical Data",
    description: "With deep expertise in biomedical analytics, we transform complex datasets into clear, actionable intelligence.",
    detail: "Our professionals hold advanced expertise in computational biology, bioinformatics, and AI-driven research methodologies.",
  },
  {
    icon: Lightbulb,
    label: "Our Approach",
    title: "Holistic Innovation",
    description: "At Saipuram, we take a holistic approach to help organizations embrace data-driven innovation at every stage.",
    detail: "We understand that innovation encompasses various aspects of pharma, including R&D, clinical trials, and market strategy.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Our mission is to provide pharma leaders with valuable{" "}
                <span className="text-accent">AI-powered insights</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.15}>
              <div className="group bg-card rounded-3xl p-8 h-full flex flex-col hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                <span className="inline-block px-3 py-1 rounded-full border border-border text-xs text-muted-foreground group-hover:border-primary-foreground/30 group-hover:text-primary-foreground/70 mb-6 w-fit transition-colors duration-500">
                  {pillar.label}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                  <pillar.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed mb-4 transition-colors duration-500">
                  {pillar.description}
                </p>
                <p className="text-sm text-muted-foreground/70 group-hover:text-primary-foreground/50 leading-relaxed flex-grow transition-colors duration-500">
                  {pillar.detail}
                </p>
                <div className="mt-6 flex items-center gap-2 text-accent group-hover:text-accent transition-colors duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote Section */}
        <AnimatedSection delay={0.4} className="mt-20">
          <div className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-8 h-8 text-accent-foreground" />
            </div>
            <div>
              <p className="font-display text-xl md:text-2xl text-primary-foreground leading-relaxed mb-4">
                "Focusing on 'difficult' biology, where data is messy yet valuable. Democratizing Precision Drug Discovery through Conversational Intelligence."
              </p>
              <p className="text-primary-foreground/60 font-medium">
                Saipuram Technologies
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
