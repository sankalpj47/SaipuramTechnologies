import { AnimatedSection } from "../AnimatedSection";
import { motion } from "framer-motion";
import { Database, BarChart3, Cog } from "lucide-react";

const products = [
  {
    icon: Database,
    name: "Elevare Studio",
    tagline: "Disease-Centric Knowledge Base",
    description:
      "A disease-centric knowledge base enabling ML/AI models for data-driven novel discovery. Integrates complex biomedical datasets into a unified, queryable intelligence layer.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: BarChart3,
    name: "Elevare Insight",
    tagline: "AI-Powered Analytics",
    description:
      "An AI-powered analytics platform that transforms raw data into strategic decisions. Surface hidden patterns across R&D pipelines and clinical datasets.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Cog,
    name: "Elevare Engine",
    tagline: "Custom AI Models",
    description:
      "Custom AI models for businesses seeking tailored automation and intelligence. Built to your specifications, trained on your domain, deployed at your scale.",
    gradient: "from-primary to-accent",
  },
];

export const ProductsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built AI tools for pharmaceutical intelligence
          </p>
        </AnimatedSection>

        <div className="space-y-8">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className={`w-full md:w-2 bg-gradient-to-b ${product.gradient} shrink-0`} />
                  <div className="p-8 md:p-10 flex-1">
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center shrink-0`}>
                        <product.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm font-medium text-primary mb-3">{product.tagline}</p>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
