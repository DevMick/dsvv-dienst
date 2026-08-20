'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Car, Cpu, Heart, Hammer, ShoppingCart, Plane } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

const Industries = () => {
  const { t } = useLanguage()

  const iconMap = [Car, Cpu, Heart, Hammer, ShoppingCart, Plane]

  const industries = t.industries.items.map((item, index) => ({
    ...item,
    icon: iconMap[index],
    color: ['from-blue-500 to-cyan-500', 'from-purple-500 to-pink-500', 'from-red-500 to-pink-500', 'from-orange-500 to-yellow-500', 'from-green-500 to-emerald-500', 'from-indigo-500 to-blue-500'][index]
  }))

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-between items-start mb-16 sm:mb-20"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.industries.heading}<br />
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {t.industries.subheading}
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t.industries.description}
            </p>
          </div>
          <motion.button
            whileHover={{ gap: 8 }}
            className="hidden md:flex items-center gap-2 text-cyan-600 font-semibold hover:text-blue-600 transition-colors"
          >
            {t.industries.seeMore} <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-cyan-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <industry.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {industry.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {industry.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:gap-2 gap-0 transition-all duration-300">
                <span>{t.industries.seeMore}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Accent Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${industry.color} group-hover:w-full transition-all duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
