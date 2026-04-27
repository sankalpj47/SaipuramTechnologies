import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Sparkles,
  Lightbulb,
  Bot,
  ShieldCheck,
  FlaskConical,
  Microscope,
  BarChart3,
  BookOpenCheck,
  HeartPulse,
  Database,
  Users,
  Beaker,
  Briefcase,
  TrendingUp,
  Globe,
} from "lucide-react";

const objectives = [
  {
    icon: Sparkles,
    title: "Democratize Scientific AI",
    content:
      "Make cutting-edge AI tools accessible to every researcher — from global pharma leaders to independent university labs — eliminating the resource gap in scientific computing.",
  },
  {
    icon: Lightbulb,
    title: "Compress Discovery Timelines",
    content:
      "Reduce drug discovery and research cycles from 10+ years to months by automating experimentation, hypothesis generation, and clinical outcome prediction.",
  },
  {
    icon: Bot,
    title: "Build Autonomous Research Systems",
    content:
      "Create self-improving AI agents that design experiments, interpret results, and generate novel hypotheses — functioning as tireless, rigorous research partners.",
  },
  {
    icon: ShieldCheck,
    title: "Ensure Scientific Integrity",
    content:
      "Every AI-generated insight is transparent, cited, reproducible, and hallucination-screened — maintaining the highest standards of scientific rigor.",
  },
];

const scope = [
  {
    icon: FlaskConical,
    title: "Pharmaceutical R&D",
    content:
      "End-to-end drug discovery — target identification, de novo molecule generation, ADMET prediction, drug repurposing, and clinical trial success forecasting.",
  },
  {
    icon: Microscope,
    title: "Biomedical Research",
    content:
      "Multi-omics data analysis, protein design, genomic variant interpretation, and automated literature mining across millions of publications.",
  },
  {
    icon: BarChart3,
    title: "Enterprise Intelligence",
    content:
      "Natural language analytics, decision support systems, federated data access, and AI-powered dashboards for life sciences organizations.",
  },
  {
    icon: BookOpenCheck,
    title: "Academic & Education",
    content:
      "Knowledge graphs, translational research training tools, and open educational platforms bridging classroom learning with real-world research.",
  },
  {
    icon: HeartPulse,
    title: "Clinical & Translational",
    content:
      "Biomarker discovery, patient stratification, clinical evidence synthesis, and regulatory-grade documentation generation.",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    content:
      "Adaptive context engines, knowledge graph navigation, cross-source analytics with full data lineage, and BYO LLM enterprise deployment.",
  },
];

const leadership = [
  {
    icon: Users,
    name: "Dr. Arjun Venkatesh",
    role: "Founder & CEO",
    content:
      "Former Principal Scientist at a top-10 pharma company with 15+ years in computational biology and AI-driven drug discovery. PhD in Bioinformatics from IIT Madras.",
  },
  {
    icon: Bot,
    name: "Priya Nair",
    role: "Chief Technology Officer",
    content:
      "Ex-engineering lead at a leading AI research lab. Expert in large language models, knowledge graphs, and scalable ML infrastructure. MS in Computer Science from Stanford.",
  },
  {
    icon: Beaker,
    name: "Dr. Kavitha Raman",
    role: "Chief Science Officer",
    content:
      "Published 80+ peer-reviewed papers in molecular biology and systems pharmacology. Led multi-omics research programs at CSIR-NCL and NCBS Bangalore.",
  },
  {
    icon: Briefcase,
    name: "Rajesh Iyer",
    role: "VP of Enterprise & Partnerships",
    content:
      "20+ years in life sciences enterprise sales and strategic partnerships. Previously led APAC business development at a global SaaS analytics firm.",
  },
  {
    icon: Lightbulb,
    name: "Dr. Meera Subramaniam",
    role: "Head of AI Research",
    content:
      "Specialist in reinforcement learning for molecular optimization and autonomous experimentation. Postdoc at MIT's CSAIL, PhD from ETH Zurich.",
  },
  {
    icon: Sparkles,
    name: "Anil Kumar",
    role: "VP of Product",
    content:
      "Product leader with a decade of experience building B2B SaaS platforms for healthcare and life sciences. Former product head at a biotech unicorn.",
  },
];

const investors = [
  {
    icon: TrendingUp,
    name: "Horizon Ventures",
    role: "Lead Investor — Series A",
    content:
      "A premier deep-tech venture fund focused on AI, biotech, and scientific computing. Known for early bets on transformative platform companies.",
  },
  {
    icon: FlaskConical,
    name: "BioNexus Capital",
    role: "Strategic Investor",
    content:
      "Life sciences investment firm with a portfolio spanning computational drug discovery, precision medicine, and clinical AI — bringing domain expertise and pharma partnerships.",
  },
  {
    icon: Lightbulb,
    name: "Catalyst Partners",
    role: "Seed Investor",
    content:
      "Early-stage fund backing AI-first enterprise software. Supported Saipuram from inception, providing capital and go-to-market mentorship.",
  },
  {
    icon: Globe,
    name: "Global Health Innovation Fund",
    role: "Impact Investor",
    content:
      "Mission-driven fund dedicated to democratizing healthcare through technology. Invested to accelerate Saipuram's educational and open-access research tools.",
  },
];

const grants = [
  {
    title: "Department of Biotechnology (DBT)",
    content: "Government of India grant for AI-powered drug repurposing research.",
  },
  {
    title: "BIRAC BIG Grant",
    content: "Biotechnology Industry Research Assistance Council innovation grant.",
  },
  {
    title: "NVIDIA Inception Program",
    content: "GPU computing credits and AI research collaboration.",
  },
];

const Company = () => {
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
                  Who We Are
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] max-w-5xl mb-6"
                >
                  <span className="text-accent">Company</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-primary-foreground/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
                >
                  Building the operating system for scientific discovery — where AI doesn't just assist research, it drives it.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <button onClick={() => document.getElementById('objective')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float hover-scale">
                    <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Objective */}
      <section id="objective" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-accent mb-4">
              Why We Exist
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Company Objective
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Saipuram's mission is to accelerate humanity's scientific progress by building AI infrastructure that transforms how discoveries are made — making breakthrough research faster, cheaper, and accessible to all.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group bg-card rounded-3xl p-8 h-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors duration-500">
                    {item.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of Operations */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-accent mb-4">
              What We Cover
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Scope of Operations
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Saipuram operates at the intersection of artificial intelligence, biomedical science, and enterprise analytics — serving organizations across the full spectrum of scientific discovery and data-driven decision making.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scope.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="group bg-card rounded-3xl p-8 h-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl mb-3 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors duration-500">
                    {item.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-accent mb-4">
              Our Team
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Scientific Leadership
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              A world-class team of scientists, engineers, and business leaders united by the mission to transform scientific discovery with AI.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person, i) => (
              <AnimatedSection key={person.name} delay={i * 0.08}>
                <div className="group bg-card rounded-3xl p-8 h-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                    <person.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl mb-1 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                    {person.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">{person.role}</p>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors duration-500">
                    {person.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investors & Partners */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-accent mb-4">
              Our Backers
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Investors & Partners
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Backed by leading venture funds, strategic life sciences investors, and government innovation programs committed to the future of AI-driven science.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {investors.map((inv, i) => (
              <AnimatedSection key={inv.name} delay={i * 0.1}>
                <div className="group bg-card rounded-3xl p-8 h-full hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 group-hover:bg-primary-foreground/10 flex items-center justify-center mb-6 transition-colors duration-500">
                    <inv.icon className="w-6 h-6 text-accent group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl mb-1 text-foreground group-hover:text-primary-foreground transition-colors duration-500">
                    {inv.name}
                  </h3>
                  <p className="text-accent text-sm font-medium mb-4">{inv.role}</p>
                  <p className="text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed transition-colors duration-500">
                    {inv.content}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-card rounded-3xl p-8 md:p-10">
              <h3 className="font-display text-2xl text-foreground text-center mb-8">
                Grants & Programs
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {grants.map((g) => (
                  <div key={g.title} className="flex flex-col items-start gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-display text-base text-foreground">{g.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{g.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Company;
