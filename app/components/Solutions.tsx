'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Package, Truck, BarChart3, Zap, Settings } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

const Solutions = () => {
  const { t } = useLanguage()

  const solutions = t.solutions.items.map((item, index) => ({
    ...item,
    image: ['/image 1.jpeg', '/image 2.jpeg', '/image 3.jpeg', '/image 4.jpeg', '/image 5.jpeg'][index]
  }))

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.solutions.headingPre}<br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {t.solutions.headingHighlight}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.solutions.description}
          </p>
        </motion.div>

        {/* Solutions Grid - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative px-8 pb-8 pt-0 h-full flex flex-col">
                {/* Image */}
                <div className="w-full -mx-8 -mt-8 mb-6 h-48 rounded-t-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {solution.description}
                </p>

              </div>

              {/* Hover Border */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${solution.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
