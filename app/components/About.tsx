'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Globe, Users, Zap } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'Real-time tracking and express delivery within 2 hours'
    },
    {
      icon: CheckCircle2,
      title: 'Reliability',
      description: '98% customer satisfaction rate and on-time delivery guarantee'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified professionals with 24/7 support'
    },
    {
      icon: Globe,
      title: 'National Coverage',
      description: '100% coverage across the country, 365 days a year'
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 bg-white relative overflow-hidden">
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
            {t.about.heading} <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{t.about.subheading}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {t.about.heading}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t.about.companyDescription}
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">5000+</div>
                <div className="text-sm text-gray-600">{t.stats.items[0].label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">98%</div>
                <div className="text-sm text-gray-600">{t.services.stats[1].label}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">24/7</div>
                <div className="text-sm text-gray-600">{t.services.stats[3].label}</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-6">{t.about.promise}</h4>
              <ul className="space-y-4">
                {t.about.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">{t.services.headingHighlight === 'diensten' ? 'Waarden' : 'Valeurs'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
