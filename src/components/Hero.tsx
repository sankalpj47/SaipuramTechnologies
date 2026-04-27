import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-6 md:pb-8">
      <div className="bg-primary rounded-[2rem] md:rounded-[3rem] mx-3 sm:mx-4 md:mx-6 min-h-[calc(100vh-2rem)] flex items-center justify-center">

        <div className="container mx-auto px-4 sm:px-6 pt-20 md:pt-24 lg:pt-28">
          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl lg:max-w-5xl w-full">

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.2] mb-6"
              >
                From Analysis to{" "}
                <span className="text-accent">Prediction.</span>
                <br className="hidden sm:block" />
                To Accessible{" "}
                <span className="text-primary-foreground/80">Intelligence.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-primary-foreground/70 text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10"
              >
                Saipuram unifies AI-powered research, molecular discovery, and conversational intelligence into one platform.
                Ask. Analyze. Discover. Explain.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-14"
              >
             <Button
              asChild
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium hover-scale"
                   >
                <a
               href="https://tbep.saipuram.in/"
                target="_blank"
                 rel="noopener noreferrer"
                    >
                   Launch TBEP
                 <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                  </Button>

                <Button className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Platform
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-4 mb-10 md:mb-12"
              >
                {[
                  { value: "10M+", label: "Molecules Analyzed" },
                  { value: "95%", label: "Prediction Accuracy" },
                  { value: "50x", label: "Faster Discovery" },
                  { value: "24/7", label: "Autonomous Research" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="px-2 sm:px-4 py-4 sm:py-5 rounded-3xl border  border-primary-foreground/20 backdrop-blur-sm"
                  >
                    <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="text-primary-foreground/60 text-xs sm:text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Scroll */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors animate-float hover-scale"
                >
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground/60" />
                </button>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};