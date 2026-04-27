import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquareText, GitMerge, Sparkles, ArrowDown, Newspaper, Tv, BookOpen, CalendarDays } from "lucide-react";

const tabs = [
  { id: "blog", label: "Blog", icon: Newspaper },
  { id: "media", label: "Media Coverage", icon: Tv },
  { id: "publication", label: "Publication", icon: BookOpen },
  { id: "events", label: "Events", icon: CalendarDays },
] as const;

type TabId = (typeof tabs)[number]["id"];

const blogPosts = [
  {
    icon: MessageSquareText,
    title: "Natural Language Discovery",
    content:
      "Instead of writing code or complex queries, a scientist asks: \"Show me the protein-protein interaction network for Alzheimer's targets that have high druggability scores.\"",
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
      "The platform doesn't just show a graph; it explains why a specific protein is a high-priority target, citing the specific pathways and causal mechanisms.",
    tag: "Explainability",
  },
];

const mediaCoverage = [
  {
    icon: Tv,
    title: "Featured in BioPharma Today",
    content: "Saipuram's AI platform highlighted as a leading innovator transforming early-stage drug discovery workflows.",
    tag: "BioPharma Today",
  },
  {
    icon: Tv,
    title: "TechCrunch: AI Meets Pharma",
    content: "Coverage of how Saipuram is applying conversational AI to make biological data accessible to every scientist.",
    tag: "TechCrunch",
  },
  {
    icon: Tv,
    title: "Forbes 30 Under 30 — Healthcare",
    content: "Saipuram leadership recognized for advancing accessible AI in life sciences and biomedical research.",
    tag: "Forbes",
  },
];

const publications = [
  {
    icon: BookOpen,
    title: "Conversational AI for Target Discovery",
    content: "Peer-reviewed paper outlining the LLM-powered framework behind TBEP, published in Nature Machine Intelligence.",
    tag: "Nature MI · 2025",
  },
  {
    icon: BookOpen,
    title: "Knowledge Graphs in Drug Repurposing",
    content: "Methodology and benchmarks for federated multi-omic knowledge graphs across 50M+ biomedical entities.",
    tag: "Bioinformatics · 2025",
  },
  {
    icon: BookOpen,
    title: "Explainable AI in Pharma R&D",
    content: "A framework for transparent, citation-backed AI reasoning in regulated drug discovery environments.",
    tag: "Cell Patterns · 2024",
  },
];

const events = [
  {
    icon: CalendarDays,
    title: "BIO International Convention 2026",
    content: "Visit our booth and live demo of TBEP at the world's largest biotech industry gathering, San Diego.",
    tag: "Jun 2026 · San Diego",
  },
  {
    icon: CalendarDays,
    title: "AI in Drug Discovery Summit",
    content: "Keynote by Dr. Arjun Venkatesh on building autonomous research agents for pharma R&D.",
    tag: "Sep 2026 · Boston",
  },
  {
    icon: CalendarDays,
    title: "NeurIPS Workshop: AI for Science",
    content: "Saipuram research team presenting novel methods for explainable biomedical reasoning.",
    tag: "Dec 2026 · Vancouver",
  },
];

const contentMap: Record<TabId, typeof blogPosts> = {
  blog: blogPosts,
  media: mediaCoverage,
  publication: publications,
  events: events,
};

const Blog = () => {
  const [activeTab, setActiveTab] = useState<TabId>("blog");
  const items = contentMap[activeTab];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-0">
        <div className="bg-primary rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 min-h-[60vh] md:min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-6 py-12 md:py-16">
            <div className="flex flex-col items-center text-center">
              <div className="max-w-5xl">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/70 mt-8 md:mt-12 mb-6"
                >
                  News & Media
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] max-w-5xl mb-6"
                >
                  Stories, Press & Research from{" "}
                  <span className="text-accent">Saipuram</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
                >
                  Insights, media coverage, peer-reviewed publications, and upcoming events shaping AI-driven discovery.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <button onClick={() => document.getElementById('articles')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float hover-scale">
                    <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs + Content */}
      <section id="articles" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-10">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
                Latest Updates
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight">
                Pioneering the future of{" "}
                <span className="text-accent">drug discovery</span>
              </h2>
            </div>
          </AnimatedSection>

          {/* Tab Switcher */}
          <div className="flex flex-wrap gap-3 mb-10">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {items.map((post, i) => (
              <AnimatedSection key={`${activeTab}-${post.title}`} delay={i * 0.1}>
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
