'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Hard Data, Not Predictions",
    desc: "Plex delivers specific experimental data points that support all findings, including links to the original data sources.",
    icon: "/icons/check.svg",
  },
  {
    title: "An Autonomous AI Agent That Shows Its Work",
    desc: "AutoPlex can plan, execute, and interpret large numbers of Plex searches, enabling large-scale autonomous research campaigns with full transparency into strategy and validation.",
    icon: "/icons/check.svg",
  },
  {
    title: "End-to-End Experimental Transparency",
    desc: "Every result includes complete methodological details, traceable evidence, and direct references to experimental validation data.",
    icon: "/icons/check.svg",
  },
  {
    title: "Scalable Discovery at Machine Speed",
    desc: "Run thousands of hypothesis-driven searches in parallel, accelerating discovery cycles without sacrificing accuracy or interpretability.",
    icon: "/icons/check.svg",
  },
  {
    title: "Evidence-Backed Insights",
    desc: "Insights are grounded in verified experimental results rather than black-box predictions or unverifiable correlations.",
    icon: "/icons/check.svg",
  },
  {
    title: "Built for Scientific Rigor",
    desc: "Designed to meet the standards of modern research teams by prioritizing reproducibility, auditability, and data integrity.",
    icon: "/icons/check.svg",
  },
];


const Services = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-background text-foreground">
      <div
        ref={ref}
        className={`
          max-w-6xl mx-auto px-6
          transition-all duration-700 ease-out
          ${visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
        `}
      >
        {/* Heading */}
        <h2 className="text-center text-2xl  md:text-4xl font-bold mb-14">
          Smarter{" "}
          <span className="bg-accent text-blue-400 px-2 rounded-md">
            Science.
          </span>{" "}
          Faster Cures.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
             className={`
  rounded-2xl p-8 bg-[#292b38] text-cardForeground
  transition hover:scale-[1.02]
`}

            >
              <div className="w-12 h-12 mb-5 flex items-center justify-center rounded-full bg-white" />

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-sm opacity-80 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
