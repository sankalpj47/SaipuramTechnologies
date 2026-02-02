import { AnimatedSection } from "./AnimatedSection";
import { Brain, Database, Lightbulb, MessageSquare } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About </span>
            <span className="gradient-text">Saipuram Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with pharmaceutical leaders to transform data into discovery. Our AI platforms elevate scientific intelligence and empower innovation—helping you bring life-changing therapies to patients faster.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12 border border-primary/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-foreground">
                  Company Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Saipuram Technologies Pvt. Ltd. is a B2B artificial intelligence startup empowering pharmaceutical and life sciences companies to accelerate drug discovery, optimize R&D processes, and drive data-driven innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By combining AI, machine learning, and predictive analytics, our products and services help transform complex biomedical data into actionable intelligence—helping pharma organizations reduce time-to-market, enhance clinical success rates, and improve patient outcomes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FeatureCard icon={Brain} title="AI & ML" description="Advanced algorithms" delay={0.3} />
                <FeatureCard icon={Database} title="Big Data" description="Biomedical analytics" delay={0.4} />
                <FeatureCard icon={Lightbulb} title="Innovation" description="Drug discovery" delay={0.5} />
                <FeatureCard icon={MessageSquare} title="Intelligence" description="Conversational AI" delay={0.6} />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-16">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  Our Focus
                </h3>
                <p className="text-muted-foreground text-lg italic">
                  "Focusing on 'difficult' biology, where data is messy yet valuable. Democratizing Precision Drug Discovery through Conversational Intelligence."
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay }: FeatureCardProps) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <h4 className="font-display font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </AnimatedSection>
  );
};
