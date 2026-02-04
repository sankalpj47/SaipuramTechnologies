"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, DollarSign, Network } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" bg-[#353749] rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-start text-left"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-14 h-14 rounded-xl bg-blue-400 flex items-center justify-center text-white mb-6"
      >
        {icon}
      </motion.div>

      <h3 className="text-2xl font-semibold text-white mb-3 leading-snug">
        {title}
      </h3>

      <p className="text-gray-300 text-md leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function Value() {
  return (
    <section className="w-full bg-[#2A2C39] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          <span className="text-white">Value </span>
          <span className="text-blue-400">Proposition</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-16"
        >
          Delivering measurable impact across the pharmaceutical value chain
        </motion.p>

        {/* Animated Cards */}
        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <ValueCard
            icon={<Zap size={28} />}
            title="Accelerate Discovery"
            description="Reduce early-stage research timelines with predictive AI."
          />

          <ValueCard
            icon={<TrendingUp size={28} />}
            title="Enhance R&D Productivity"
            description="Identify optimal pathways for molecule development and clinical success."
          />

          <ValueCard
            icon={<DollarSign size={28} />}
            title="Optimize Costs"
            description="Cut inefficiencies through automation and data integration."
          />

          <ValueCard
            icon={<Network size={28} />}
            title="Empower Innovation"
            description="Transform siloed data into a connected intelligence network."
          />
        </motion.div>
      </div>
    </section>
  );
}
