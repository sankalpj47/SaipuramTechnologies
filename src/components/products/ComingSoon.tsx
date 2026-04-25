import { AnimatedSection } from "../AnimatedSection";
import { Atom, TrendingUp, FlaskConical, Brain } from "lucide-react";

const products = [
  {
    icon: Atom,
    name: "MolGen AI",
    tagline: "Molecular Generation AI Engine",
    quarter: "Q3 2026",
    description:
      "AI-powered de novo molecule generation and lead optimization. Design drug candidates with desired pharmacological properties using state-of-the-art generative chemistry models.",
  },
  {
    icon: TrendingUp,
    name: "ClinPredict",
    tagline: "Clinical Trial Prediction Suite",
    quarter: "Q4 2026",
    description:
      "Predict clinical trial outcomes using multi-modal AI analysis. Reduce trial failure rates by identifying risks early in the development pipeline.",
  },
  {
    icon: FlaskConical,
    name: "OmicsLab",
    tagline: "Integrated Multi-Omics Analysis Platform",
    quarter: "Q1 2027",
    description:
      "Unified multi-omics data analysis combining genomics, proteomics, transcriptomics, and metabolomics with AI-driven biomarker discovery.",
  },
  {
    icon: Brain,
    name: "NeuroMap",
    tagline: "Neuroscience Research Intelligence",
    quarter: "Q2 2027",
    description:
      "Specialized AI platform for neuroscience research, integrating brain imaging data, electrophysiology, and molecular data for neurological drug discovery.",
  },
];

export const ComingSoon = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-2">
            Coming Soon
          </h2>
          <p className="text-accent">Next-generation products in our pipeline</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <div className="bg-card rounded-3xl p-8 h-full border border-dashed border-border hover:border-accent/40 transition-colors duration-500">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">
                    {product.quarter}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-accent text-sm mb-4">{product.tagline}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
