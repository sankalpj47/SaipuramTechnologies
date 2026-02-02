import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Pharma Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Elevate Intelligence.</span>
            <br />
            <span className="gradient-text">Empower Innovation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            To elevate pharmaceutical intelligence by harnessing the power of AI—empowering innovation from molecule to market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="gradient-bg text-primary-foreground hover:opacity-90 text-lg px-8 py-6">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/5">
              Learn More
            </Button>
          </motion.div>
        </div>

        {/* Floating DNA/Molecule illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <div className="animate-float">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="8" className="fill-primary/40" />
              <circle cx="90" cy="30" r="8" className="fill-accent/40" />
              <circle cx="60" cy="60" r="10" className="fill-primary/60" />
              <circle cx="30" cy="90" r="8" className="fill-accent/40" />
              <circle cx="90" cy="90" r="8" className="fill-primary/40" />
              <line x1="30" y1="30" x2="60" y2="60" className="stroke-primary/30" strokeWidth="2" />
              <line x1="90" y1="30" x2="60" y2="60" className="stroke-accent/30" strokeWidth="2" />
              <line x1="30" y1="90" x2="60" y2="60" className="stroke-accent/30" strokeWidth="2" />
              <line x1="90" y1="90" x2="60" y2="60" className="stroke-primary/30" strokeWidth="2" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
