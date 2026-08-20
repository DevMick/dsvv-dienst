'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Stats = () => {
  const stats = [
    {
      number: '+5,000',
      label: 'Successful Deliveries',
      icon: '📦'
    },
    {
      number: '90',
      label: 'Countries & Regions',
      icon: '🌍'
    },
    {
      number: '~150,000',
      label: 'Team Members',
      icon: '👥'
    },
  ]

  const counter = (num: string) => {
    return parseInt(num.replace(/[+,~]/g, '').split('.')[0])
  }

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DSVV Dienst in Numbers
          </h2>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Demonstrating our scale, reach, and commitment to excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative text-center"
            >
              {/* Card Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 group-hover:border-cyan-300/50 transition-all duration-300" />

              {/* Content */}
              <div className="relative px-8 py-12 sm:py-16">
                {/* Icon */}
                <div className="text-5xl sm:text-6xl mb-6 block">
                  {stat.icon}
                </div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3"
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-lg sm:text-xl text-cyan-100 font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-cyan-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Our global network and dedicated team ensure reliable, fast, and professional logistics solutions for businesses of all sizes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
