'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from '../Animation/ParticleBackground'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#272b34] px-6 overflow-hidden">

      {/* 🔥 Crazy Animated Gradient Blobs */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl top-[-150px] left-[-150px] animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl bottom-[-150px] right-[-150px] animate-pulse"></div>

      {/* Background particles */}
      <ParticlesBackground />

      {/* Content Wrapper */}
      <div className="max-w-6xl text-center space-y-8 relative z-10 -translate-y-10 md:-translate-y-14">

        {/* ✨ Badge Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-5 py-2 text-sm sm:text-base rounded-full border border-blue-300 bg-blue-100 text-blue-600 font-medium shadow-lg"
        >
          ✨ AI-Powered Pharma Intelligence
        </motion.div>

        {/* 🚀 Heading Animation */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          <span className="text-white">
            Elevate Intelligence.
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-200 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            Empower Innovation.
          </span>
        </motion.h1>

        {/* 💫 Subtext Fade In */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto"
        >
          To elevate pharmaceutical intelligence by harnessing the power of AI—
          empowering innovation from molecule to market.
        </motion.p>

        {/* ⚡ Buttons Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-6 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 rounded-2xl bg-blue-500 text-white text-lg font-medium shadow-2xl overflow-hidden group"
          >
            <span className="relative z-10">
              Explore Our Products →
            </span>

            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-200 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl border border-gray-300 bg-white text-blue-500 text-lg font-medium hover:bg-gray-100 transition duration-300 shadow-lg"
          >
            Contact Us
          </motion.button>
        </motion.div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#272b34] to-transparent pointer-events-none"></div>

    </section>
  )
}

export default Hero
