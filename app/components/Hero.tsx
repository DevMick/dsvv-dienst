'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingBoxVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: { duration: 2, repeat: Infinity }
    }
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-2xl opacity-80"
        variants={floatingBoxVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-2xl opacity-70"
        variants={floatingBoxVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl shadow-xl opacity-75"
        variants={floatingBoxVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-sm font-semibold">
                Global Transport & Logistics Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
                {t.hero.titleTop}
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {t.hero.titleBottom}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed"
            >
              {t.hero.subtitlePre}
              <span className="text-cyan-300 font-semibold"> {t.hero.subtitleFast}</span>,
              <span className="text-emerald-300 font-semibold"> {t.hero.subtitleSafe}</span> et
              <span className="text-blue-300 font-semibold"> {t.hero.subtitleAnd}</span>
            </motion.p>

            {/* Features Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/30">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm font-medium">Service Rapide</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-white text-sm font-medium">100% Sécurisé</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30">
                <Globe className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-medium">Disponible 24/7</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(34, 197, 94, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('fund-reception')}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 group"
              >
                {t.hero.ctaButton}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center z-20"
          >
            <svg viewBox="0 0 400 400" className="w-full max-w-md drop-shadow-2xl">
              <defs>
                <linearGradient id="truckGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>
                <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>

              {/* Truck Illustration */}
              <motion.g animate={{ x: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity }}>
                {/* Cabin */}
                <rect x="80" y="140" width="80" height="70" rx="8" fill="url(#truckGrad)" />
                <rect x="90" y="155" width="30" height="25" fill="#1e1b4b" rx="4" />
                <rect x="130" y="155" width="30" height="25" fill="#1e1b4b" rx="4" />

                {/* Cargo Box */}
                <rect x="160" y="130" width="140" height="85" rx="8" fill="url(#boxGrad)" opacity="0.9" />
                <line x1="170" y1="140" x2="170" y2="205" stroke="#065f46" strokeWidth="2" />
                <line x1="190" y1="140" x2="190" y2="205" stroke="#065f46" strokeWidth="2" />
                <line x1="210" y1="140" x2="210" y2="205" stroke="#065f46" strokeWidth="2" />
                <line x1="230" y1="140" x2="230" y2="205" stroke="#065f46" strokeWidth="2" />
                <line x1="250" y1="140" x2="250" y2="205" stroke="#065f46" strokeWidth="2" />
                <line x1="270" y1="140" x2="270" y2="205" stroke="#065f46" strokeWidth="2" />

                {/* Wheels */}
                <circle cx="120" cy="220" r="15" fill="#334155" />
                <circle cx="120" cy="220" r="10" fill="#475569" />
                <circle cx="280" cy="220" r="15" fill="#334155" />
                <circle cx="280" cy="220" r="10" fill="#475569" />

                {/* Bumper */}
                <rect x="50" y="205" width="30" height="8" fill="#0f172a" rx="2" />
              </motion.g>

              {/* Floating Packages */}
              <motion.g animate={{ y: [-30, 0, -30] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
                <rect x="60" y="80" width="50" height="50" rx="6" fill="url(#boxGrad)" opacity="0.8" />
                <circle cx="85" cy="105" r="3" fill="#fff" />
              </motion.g>

              <motion.g animate={{ y: [-50, 0, -50] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}>
                <rect x="280" y="60" width="45" height="45" rx="5" fill="url(#truckGrad)" opacity="0.7" />
                <line x1="285" y1="80" x2="315" y2="80" stroke="#fff" strokeWidth="1.5" />
                <line x1="285" y1="85" x2="315" y2="85" stroke="#fff" strokeWidth="1.5" />
              </motion.g>

              {/* Checkmark */}
              <motion.g animate={{ scale: [0, 1, 1] }} transition={{ duration: 0.6, delay: 0.8 }}>
                <circle cx="320" cy="100" r="25" fill="#10b981" opacity="0.9" />
                <path d="M310 100 L315 105 L330 90" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </motion.g>
            </svg>
          </motion.div>
        </div>

        {/* Scrolling Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-cyan-300">
            <span className="text-sm font-medium">Défiler vers le bas</span>
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
