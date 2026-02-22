import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Brain, Microscope, Shield, Activity, ArrowDown } from "lucide-react";

const therapeuticAreas = [
  {
    area: "Neuroscience",
    icon: Brain,
    diseases: ["Parkinson's Disease", "Alzheimer's Disease"],
    color: "from-primary to-primary/70",
  },
  {
    area: "Oncology",
    icon: Microscope,
    diseases: ["Glioblastoma"],
    color: "from-accent to-accent/70",
  },
  {
    area: "Immunology",
    icon: Shield,
    diseases: ["Rheumatoid Arthritis"],
    color: "from-primary to-accent",
  },
  {
    area: "Nephrology",
    icon: Activity,
    diseases: ["Chronic Kidney Disease"],
    color: "from-accent to-primary",
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-0">
        <div className="bg-primary rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 min-h-[calc(100vh-2rem)] flex items-center justify-center">
          <div className="container mx-auto px-6 py-20">
            <div className="flex flex-col items-center text-center">
              <div className="max-w-5xl">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/70 mb-8"
                >
                  Case Studies
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight max-w-5xl mb-8"
                >
                  Transforming Drug Discovery with{" "}
                  <span className="text-accent">Conversational AI</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
                >
                  We're replacing the months of manual data mining in drug discovery with an LLM-powered portal that lets scientists 'talk' to biological data. Based on a breakthrough real-time network analysis framework, we help biotech companies identify the right drug targets and biomarkers in minutes, not months.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <button onClick={() => document.getElementById('therapeutic-areas')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float hover-scale">
                    <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section id="therapeutic-areas" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
                Therapeutic Areas
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Deep expertise across{" "}
                <span className="text-accent">critical disease areas</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {therapeuticAreas.map((item, i) => (
              <AnimatedSection key={item.area} delay={i * 0.12}>
                <div className="group bg-card rounded-3xl p-8 h-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center transition-colors duration-500">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full border border-border text-xs text-muted-foreground group-hover:border-primary-foreground/30 group-hover:text-primary-foreground/70 transition-colors duration-500">
                      {item.area}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {item.diseases.map((disease) => (
                      <div
                        key={disease}
                        className="flex items-center gap-3 py-3 px-4 rounded-xl bg-background/50 group-hover:bg-primary-foreground/5 transition-colors duration-500"
                      >
                        <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-foreground group-hover:text-primary-foreground font-medium transition-colors duration-500">
                          {disease}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-primary rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl md:text-4xl text-primary-foreground leading-tight mb-2">
                  Interested in partnering on a case study?
                </h3>
                <p className="text-primary-foreground/60">
                  Let's explore how our platform can accelerate your drug discovery pipeline.
                </p>
              </div>
              <button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-4 text-base font-medium flex-shrink-0 transition-colors">
                Contact Us
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
