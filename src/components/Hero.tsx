import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-0">
      <div className="bg-primary rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 min-h-[calc(100vh-2rem)] flex items-center">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-5xl">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.15] mb-8"
              >
                Where we empower you to harness{" "}
                <span className="text-accent">AI-powered</span>{" "}
                intelligence and unleash pharma innovation
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-12"
              >
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-medium hover-scale">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <div className="flex gap-8 ml-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <span className="text-3xl font-bold text-primary-foreground">50+</span>
                    <p className="text-primary-foreground/60 text-sm">AI Models Built</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <span className="text-3xl font-bold text-primary-foreground">98%</span>
                    <p className="text-primary-foreground/60 text-sm">Client Satisfaction</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-3"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
