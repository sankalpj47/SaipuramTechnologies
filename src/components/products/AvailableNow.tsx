import { AnimatedSection } from "../AnimatedSection";
import { Target, BookOpen, Network, Star, ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Target,
    name: "TBEP",
    tagline: "Target-Based Evidence Platform",
    badge: "COMMERCIAL",
    externalLink: "https://tbep.saipuram.in/",
    internalLink: "/products/tbep",
    description:
      "A powerful platform for drug target validation that combines multi-source biomedical data with AI-driven scoring. It helps researchers assess targets, explore mechanisms, and understand competitive landscapes efficiently.",
    features: [
      "AI-driven target validation scoring",
      "Multi-source evidence synthesis",
      "Competitive landscape intelligence",
      "Mechanistic pathway analysis",
      "Real-time literature monitoring",
      "Exportable reports & dashboards",
    ],
  },
  {
    icon: BookOpen,
    name: "TRACES",
    tagline: "Translational Research And Clinical Evidence System",
    badge: "EDUCATIONAL",
    externalLink: "https://traces.mbi.in.net/",
    internalLink: "/products/traces",
    description:
      "An interactive learning platform for understanding the drug development process. It guides students and researchers through real-world case studies, workflows, and clinical evidence evaluation.",
    features: [
      "Interactive drug development case studies",
      "Guided translational research workflows",
      "Clinical evidence evaluation training",
      "Structured learning modules",
      "Real-world dataset access",
      "Collaborative project workspace",
    ],
  },
  {
    icon: Network,
    name: "TAU-KG",
    tagline: "Therapeutic Area Understanding Knowledge Graph",
    badge: "EDUCATIONAL",
    externalLink: "https://tbep.mbi.in.net/tau-kg/",
    internalLink: "/products/tau-kg",
    description:
      "A knowledge graph platform that maps relationships between diseases, targets, and drugs. It enables intuitive exploration of complex biomedical networks and deeper therapeutic insights.",
    features: [
      "Interactive knowledge graph visualization",
      "Disease-target-drug network exploration",
      "Pathway and mechanism mapping",
      "Ontology-based semantic search",
      "Cross-therapeutic area analysis",
      "API access for integration",
    ],
  },
];

export const AvailableNow = () => {
  return (
    <section id="platform" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-2">
            Available Now
          </h2>
          <p className="text-accent">
            Production-ready platforms you can use today
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <div className="bg-card rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-8 md:gap-12 border border-border">

                {/* LEFT */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                      <product.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wider">
                      {product.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground mb-1">
                    {product.name}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {product.tagline}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-3">

                    {/* External Launch */}
                    <Button
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
                    >
                      <a
                        href={product.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Launch {product.name}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>

                    {/* Internal Details */}
                    <Button
                      asChild
                      className="rounded-full px-6 bg-white text-black hover:bg-white/90"
                    >
                      <Link to={product.internalLink}>
                        Details
                        <Info className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>

                  </div>
                </div>

                {/* RIGHT */}
                <div className="md:pl-8 md:border-l md:border-border">
                  <h4 className="text-xs font-semibold tracking-widest text-muted-foreground mb-4">
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-3">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Star className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};