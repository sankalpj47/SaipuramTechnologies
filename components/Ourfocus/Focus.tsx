"use client"

import { Goal } from "lucide-react"
import { motion } from "framer-motion"

export default function OurFocus() {
  return (
    <section className="w-full px-6 pb-24">
      <div className="max-w-[1400px] mx-auto">

        {/* Scroll animation wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          {/* Hover animation inside (separated → smooth) */}
          <motion.div
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-start gap-4 rounded-2xl bg-[#292b38] px-10 py-8 shadow-sm transition-all"
          >

            {/* Header */}
            <div className="flex gap-3 items-center">

              {/* Icon animation */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-xl bg-blue-400 flex items-center justify-center text-white"
              >
                <Goal size={28} />
              </motion.div>

              <h3 className="text-3xl font-semibold">Our Focus</h3>
            </div>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 text-[21px] italic leading-relaxed"
            >
              “Focusing on ‘difficult’ biology, where data is messy yet valuable.
              Democratizing Precision Drug Discovery through Conversational Intelligence.”
            </motion.p>

          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
