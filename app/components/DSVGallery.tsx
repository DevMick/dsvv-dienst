'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const DSVGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const images = [
    { src: '/image 1.jpeg', alt: 'DSV Global Transport and Logistics' },
    { src: '/image 2.jpeg', alt: 'DSV Team' },
    { src: '/image 3.jpeg', alt: 'DSV Infrastructure' },
    { src: '/image 4.jpeg', alt: 'DSV Team Building' },
    { src: '/image 5.jpeg', alt: 'DSV Event' },
  ]

  const handleNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }

  const handlePrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tl from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
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
            📸 Galerie Photos
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Découvrez
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              {' '}DSV
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explorez nos installations, notre équipe dévouée et nos services de classe mondiale
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">DSV Gallery</p>
                <p className="text-sm text-gray-200">Cliquez pour agrandir</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl"
            >
              {/* Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
                <img
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white p-2 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <X className="w-8 h-8" />
              </motion.button>

              {/* Counter */}
              <div className="text-center mt-6 text-white text-sm font-medium">
                {selectedIndex + 1} / {images.length}
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? 'bg-white w-8'
                        : 'bg-white/40 w-3 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default DSVGallery
