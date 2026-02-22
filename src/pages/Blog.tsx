import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { MessageSquareText, GitMerge, Sparkles, ArrowDown } from "lucide-react";

const blogPosts = [
  {
    icon: MessageSquareText,
    title: "Natural Language Discovery",
    content:
      "Instead of writing code or complex queries, a scientist asks: \"Show me the protein-protein interaction network for Alzheimer's targets that have high druggability scores in the DrugnomeAI database and are upregulated in recent transcriptomic studies.\"",
    tag: "Conversational AI",
  },
  {
    icon: GitMerge,
    title: "Real-time Multi-Omic Integration",
    content:
      "The platform automatically merges human genetics, functional genomics, and PPI networks into a live \"Knowledge Graph.\"",
    tag: "Data Integration",
  },
  {
    icon: Sparkles,
    title: "Explainable AI (XAI)",
    content:
      "Using the LLM integration described in the paper, the platform doesn't just show a graph; it explains why a specific protein is a high-priority target, citing the specific pathways (KEGG/Reactome) and causal mechanisms.",
    tag: "Explainability",
  },
];

const Blog = () => {
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
                  Blog
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight max-w-5xl mb-8"
                >
                  Insights & Innovation in{" "}
                  <span className="text-accent">AI-Driven Discovery</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-primary-foreground/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
                >
                  Exploring how conversational AI, multi-omic integration, and explainable models are reshaping pharmaceutical research.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <a href="#articles" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float hover-scale">
                    <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
                Latest Articles
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Pioneering the future of{" "}
                <span className="text-accent">drug discovery</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 0.15}>
                <div className="group bg-card rounded-3xl p-8 h-full flex flex-col hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                  <span className="inline-block px-3 py-1 rounded-full border border-border text-xs text-muted-foreground group-hover:border-primary-foreground/30 group-hover:text-primary-foreground/70 mb-6 w-fit transition-colors duration-500">
                    {post.tag}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                    <post.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed flex-grow transition-colors duration-500">
                    {post.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
