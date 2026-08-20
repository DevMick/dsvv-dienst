'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Globe, CheckCircle2, Truck, Package, Lock, Clock } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const serviceIcons = [Package, Truck, Zap]
  const serviceColors = [
    { gradient: 'from-cyan-500 to-blue-600', light: 'from-cyan-50 to-blue-50' },
    { gradient: 'from-emerald-500 to-teal-600', light: 'from-emerald-50 to-teal-50' },
    { gradient: 'from-purple-500 to-pink-600', light: 'from-purple-50 to-pink-50' },
  ]

  const services = t.services.items.map((item, index) => ({
    ...item,
    icon: serviceIcons[index],
    ...serviceColors[index],
  }))

  const stats = [
    { label: 'Livraisons rapides', number: '5000+', icon: Zap },
    { label: 'Clients satisfaits', number: '98%', icon: CheckCircle2 },
    { label: 'Couverture nationale', number: '100%', icon: Globe },
    { label: 'Support 24/7', number: '365j', icon: Clock },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tl from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-28"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 text-sm font-semibold mb-4"
          >
            🚀 Nos Services Premium
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.services.headingPre}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {t.services.headingHighlight}
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-28 lg:mb-36"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300" />

              {/* Card Border Gradient */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-200/50 to-blue-200/50 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card Content */}
              <div className="relative p-8 sm:p-10 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-3.5 mb-6 shadow-lg`}
                >
                  <service.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`mt-1 p-1 rounded-full bg-gradient-to-br ${service.gradient}`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-20 sm:mt-28 lg:mt-36"
        >
          {/* Stats Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl opacity-90 shadow-2xl" />

          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: [-1000, 1000] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          {/* Stats Grid */}
          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center text-white"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-14 h-14 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <stat.icon className="w-7 h-7 text-cyan-200" />
                  </motion.div>

                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    {stat.number}
                  </div>

                  <div className="text-sm sm:text-base text-cyan-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
