"use client";
import { Brain, Database, Lightbulb, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

// FIX: Use React.ReactNode to avoid JSX.Element errors
const iconMap: Record<string, React.ReactNode> = {
  "AI & ML": <Brain className="w-6 h-6 text-white" />,
  "Big Data": <Database className="w-6 h-6 text-white" />,
  "Innovation": <Lightbulb className="w-6 h-6 text-white" />,
  "Intelligence": <Cpu className="w-6 h-6 text-white" />,
};

function InfoCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-[#353749] rounded-xl hover:scale-105 transition-all p-6 flex flex-col gap-2 h-full shadow-sm cursor-pointer">
      
      <div className="w-10 h-10 shadow-sm hover:shadow-lg rounded-lg bg-blue-400 flex items-center justify-center">
        {iconMap[title]}
      </div>

      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-300 leading-snug">{subtitle}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 pb-16"
    >
      {/* Header Section */}
      <div className="max-w-[1000px] mx-auto text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          About{" "}
          <span className="bg-blue-400 bg-clip-text text-transparent">
            Saipuram Technologies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-gray-300 max-w-6xl mx-auto text-xl leading-relaxed"
        >
          We partner with pharmaceutical leaders to transform data into discovery.
          Our AI platforms elevate scientific intelligence and empower innovation—
          helping you bring life-changing therapies to patients faster.
        </motion.p>
      </div>

      {/* Company Overview Section */}
      <div className="max-w-[1400px] mx-auto">
        <div className="rounded-2xl bg-[#292b38] px-12 py-10 grid grid-cols-1 lg:grid-cols-5 gap-12 min-h-[355px] items-start">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 flex flex-col justify-center space-y-8 h-full"
          >
            <h2 className="text-4xl font-semibold">
              Company <span className="text-blue-400"> Overview </span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              Saipuram Technologies Pvt. Ltd. is a B2B artificial intelligence startup
              empowering pharmaceutical and life sciences companies to accelerate
              drug discovery, optimize R&D processes, and drive data-driven innovation.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              By combining AI, machine learning, and predictive analytics, our products
              and services help transform complex biomedical data into actionable
              intelligence—helping pharma organizations reduce time-to-market, enhance
              clinical success rates, and improve patient outcomes.
            </p>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 h-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <InfoCard title="AI & ML" subtitle="Advanced algorithms" />
            <InfoCard title="Big Data" subtitle="Biomedical analytics" />
            <InfoCard title="Innovation" subtitle="Drug discovery" />
            <InfoCard title="Intelligence" subtitle="Conversational AI" />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
