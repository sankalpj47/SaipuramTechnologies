import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const PSHero = () => {
  return (
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
                Products
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] mb-6"
              >
                Our <span className="text-accent">Products</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-8"
              >
                Tools powering the next wave of scientific innovation — from target validation to clinical trial prediction.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3 mb-8"
              >
                {["Drug Discovery", "AI Analytics", "Pharma Intelligence"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="px-4 py-2 rounded-full border border-primary-foreground/20 text-primary-foreground/80 text-sm hover-scale cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <button onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float hover-scale">
                  <ArrowDown className="w-5 h-5 text-primary-foreground/60" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
