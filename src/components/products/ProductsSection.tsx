import { AnimatedSection } from "../AnimatedSection";
import { Database, BarChart3, Cog, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: Database,
    name: "Elevare Studio",
    tagline: "Disease-Centric Knowledge Base",
    description:
      "A disease-centric knowledge base enabling ML/AI models for data-driven novel discovery. Integrates complex biomedical datasets into a unified, queryable intelligence layer.",
  },
  {
    icon: BarChart3,
    name: "Elevare Insight",
    tagline: "AI-Powered Analytics",
    description:
      "An AI-powered analytics platform that transforms raw data into strategic decisions. Surface hidden patterns across R&D pipelines and clinical datasets.",
  },
  {
    icon: Cog,
    name: "Elevare Engine",
    tagline: "Custom AI Models",
    description:
      "Custom AI models for businesses seeking tailored automation and intelligence. Built to your specifications, trained on your domain, deployed at your scale.",
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Products
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight max-w-2xl">
            Purpose-built AI tools for{" "}
            <span className="text-accent">pharma intelligence</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <div className="group bg-background rounded-3xl p-8 md:p-10 hover:bg-primary transition-all duration-500 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center shrink-0 transition-colors duration-500">
                    <product.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-2xl text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                        {product.name}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full border border-border group-hover:border-primary-foreground/20 text-xs text-muted-foreground group-hover:text-primary-foreground/60 transition-colors duration-500">
                        {product.tagline}
                      </span>
                    </div>
                    <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed max-w-2xl transition-colors duration-500">
                      {product.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent shrink-0 transition-colors duration-500" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
