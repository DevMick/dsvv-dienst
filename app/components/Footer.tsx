'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Truck } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '../lib/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = t.footer.services.map((name) => ({ name, id: 'services' }))

  const quickLinkIds = ['accueil', 'services', 'fund-reception']
  const quickLinks = t.footer.quickLinks.map((name, index) => ({ name, id: quickLinkIds[index] }))

  const contactIcons = [Mail, Clock]
  const contactLinks = ['mailto:ondersteuning@dsvv-dienst.com', null]
  const contactInfo = t.footer.contactInfo.map((item, index) => ({
    ...item,
    icon: contactIcons[index],
    link: contactLinks[index],
  }))

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border-t border-slate-700/50">
      {/* Animations d'arrière-plan - Réseau global de confiance */}
      <div className="absolute inset-0 z-0">
        {/* Grille de connexions mondiales */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-l border-primary-400/20"
              style={{
                left: `${15 + i * 15}%`,
                height: '100%'
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          ))}

          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border-t border-secondary-400/15 w-full"
              style={{
                top: `${25 + i * 20}%`
              }}
              animate={{
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{
                duration: 5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4
              }}
            />
          ))}
        </div>

        {/* Nœuds de réseau pulsants */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/40 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 0.8, 0.4],
              boxShadow: [
                '0 0 0 0 rgba(14, 165, 233, 0.4)',
                '0 0 0 10px rgba(14, 165, 233, 0)',
                '0 0 0 0 rgba(14, 165, 233, 0.4)'
              ]
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}

        {/* Signaux de transmission */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary-300/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-secondary-400/25 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.15, 0.4],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Flux de données de confiance */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400" fill="none">
          <motion.path
            d="M0 200 Q300 100 600 200 Q900 300 1200 200"
            stroke="url(#trustGradient)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4,4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />

          <defs>
            <linearGradient id="trustGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Particules de fiabilité */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-50/60 rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 mr-3 relative">
                  <Image
                    src="/Logo.png"
                    alt="herstelservice Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary-500">
                  {t.header.brand}
                </h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.footer.description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-400">
                  <Truck className="w-4 h-4 mr-2" />
                  <span>{t.footer.badge}</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.servicesTitle}</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.quickLinksTitle}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">{t.footer.contactTitle}</h4>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <item.icon className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-200 mb-1">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-sm"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{item.info}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              {t.footer.copyright}
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>{t.footer.privacyPolicy}</span>
              <span>•</span>
              <span>{t.footer.termsOfUse}</span>
              <span>•</span>
              <span>{t.footer.legalNotice}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
