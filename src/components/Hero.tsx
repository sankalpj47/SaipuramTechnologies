import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroScientist from "@/assets/hero-scientist.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-0">
      {/* Main hero with dark green background */}
      <div className="bg-primary rounded-b-[3rem] md:rounded-b-[4rem] pb-16 md:pb-24">
        <div className="container mx-auto px-6 pt-16 md:pt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="max-w-2xl flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-4xl sm:text-5xl md:text-7xl text-primary-foreground leading-[1.1] mb-8"
              >
                Where we empower you to harness{" "}
                <span className="text-accent">AI-powered</span>{" "}
                intelligence and unleash pharma innovation
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-medium">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <div className="flex gap-8 ml-4">
                  <div>
                    <span className="text-3xl font-bold text-primary-foreground">50+</span>
                    <p className="text-primary-foreground/60 text-sm">AI Models Built</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-primary-foreground">98%</span>
                    <p className="text-primary-foreground/60 text-sm">Client Satisfaction</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {["Drug Discovery", "AI Analytics", "Pharma Intelligence"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full border border-primary-foreground/20 text-primary-foreground/80 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 flex justify-center"
            >
              <img
                src={heroScientist}
                alt="Scientist working with AI-powered pharma tools"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
