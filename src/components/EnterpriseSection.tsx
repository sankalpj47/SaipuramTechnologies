import { AnimatedSection } from "./AnimatedSection";
import { Shield, Database, Brain, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, HIPAA, GDPR compliant. Single-tenant architecture with granular RBAC.",
  },
  {
    icon: Database,
    title: "Flexible Deployment",
    description: "SaaS, VPC, or on-premise. Deploy on AWS, Azure, or GCP with BYO LLM options.",
  },
  {
    icon: Brain,
    title: "Adaptive Context Engine",
    description: "Grounds AI agents in formal and informal data semantics for 95%+ accuracy at scale.",
  },
  {
    icon: BarChart3,
    title: "Federated Insights",
    description: "Structured, semi-structured, unstructured — cross-source analytics with full lineage.",
  },
];

export const EnterpriseSection = () => {
  return (
    <>
      {/* Built for Enterprise */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
                Built for Enterprise
              </h2>
              <p className="text-primary-foreground/60 text-lg">
                Secure, compliant, and scalable — trusted by leading research institutions and pharmaceutical companies
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <AnimatedSection key={feature.title} delay={idx * 0.1}>
                <div className="border border-primary-foreground/15 rounded-2xl p-6 h-full hover:border-accent/60 hover:bg-primary-foreground/5 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-accent mb-5" />
                  <h3 className="font-display text-xl text-primary-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-primary-foreground/55 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerate Discovery CTA */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-5">
                Accelerate Discovery. Scale Expertise.
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Join leading research teams transforming how science is done. From drug repurposing to clinical trial prediction — Saipuram powers it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
                  <Link 
                   to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary/90 transition-all hover-scale">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                  </Link>
            
                <Link
                  to="/products-services"
                  className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground px-7 py-3.5 rounded-full font-medium hover:bg-secondary transition-all hover-scale"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};
