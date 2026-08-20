'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Package, Truck, BarChart3, Zap, Settings } from 'lucide-react'

const Solutions = () => {
  const solutions = [
    {
      icon: Package,
      title: 'Quote, Book & Manage',
      description: 'Get instant quotes, book shipments, and manage your logistics in real-time',
      color: 'from-blue-500 to-cyan-500',
      image: '📦'
    },
    {
      icon: Truck,
      title: 'Warehouse Management',
      description: 'Complete warehouse and inventory management solutions',
      color: 'from-purple-500 to-pink-500',
      image: '🏭'
    },
    {
      icon: BarChart3,
      title: 'Track & Monitor',
      description: 'Real-time tracking and shipment visibility across all channels',
      color: 'from-green-500 to-emerald-500',
      image: '📍'
    },
    {
      icon: Zap,
      title: 'Supply Chain Control',
      description: 'End-to-end supply chain management and optimization',
      color: 'from-orange-500 to-red-500',
      image: '⚡'
    },
    {
      icon: Settings,
      title: 'API Integration',
      description: 'Seamless integration with your existing systems and platforms',
      color: 'from-indigo-500 to-blue-500',
      image: '🔗'
    },
  ]

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
            Access all your logistics solutions<br />
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              in one place
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to streamline your logistics operations
          </p>
        </motion.div>

        {/* Solutions Grid - Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
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
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon/Image */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center text-3xl mb-6 shadow-md`}>
                  {solution.image}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {solution.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-cyan-600 font-semibold text-sm group-hover:gap-2 gap-0 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
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
