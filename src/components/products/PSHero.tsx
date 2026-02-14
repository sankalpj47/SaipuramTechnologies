import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const PSHero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-0">
      <div className="bg-primary rounded-b-[3rem] md:rounded-b-[4rem] pb-16 md:pb-24">
        <div className="container mx-auto px-6 pt-16 md:pt-24">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-sm text-primary-foreground/70 mb-8"
            >
              Products & Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] mb-8"
            >
              Intelligent Discovery.{" "}
              <span className="text-accent">Evidence-Driven</span>{" "}
              Innovation.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-primary-foreground/60 max-w-3xl mb-12"
            >
              A platform that helps scientists with intelligent discovery and evidence-driven innovation, revolutionizing global healthcare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <a href="#platform" className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float">
                <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-40 right-16 hidden lg:block"
        >
          <div className="w-28 h-28 rounded-full bg-accent/30 animate-float" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-56 right-56 hidden lg:block"
        >
          <div className="w-16 h-16 rounded-full border-4 border-accent/40 animate-float" style={{ animationDelay: "2s" }} />
        </motion.div>
      </div>
    </section>
  );
};
