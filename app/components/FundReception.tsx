'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

const FundReception = () => {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  // Functie om vervaldatum te formatteren
  const formatExpirationDate = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    const limitedValue = numericValue.slice(0, 4)
    if (limitedValue.length >= 2) {
      return limitedValue.slice(0, 2) + '/' + limitedValue.slice(2)
    }
    return limitedValue
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = async (data: any) => {
    if (isSubmitting) return
    setIsSubmitting(true)
    setError('')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 25000)

    try {
      const testMode = typeof window !== 'undefined' && window.location.hostname === 'localhost'
      const response = await fetch(`/api/contact?type=reception${testMode ? '&test=true' : ''}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        signal: controller.signal,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Fout bij het verzenden')
      }

      console.log('E-mail succesvol verzonden:', result)
      setIsSubmitted(true)
      reset()

    } catch (error: any) {
      console.error('Fout bij verzenden:', error)
      setError(t.fundReception.genericError)
    } finally {
      clearTimeout(timeoutId)
      setIsSubmitting(false)
    }
  }

  return (
    <section id="fund-reception" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t.fundReception.heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-2">
            {t.fundReception.infoBoxText}
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            {t.fundReception.infoBoxSubtext}
          </p>
        </motion.div>

        {/* Form Container Centered */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 w-full max-w-5xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.fundReception.formTitle}
            </h3>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4 flex items-center space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600" />
                <div>
                  <h4 className="font-semibold text-red-800 text-sm">{t.fundReception.errorTitle}</h4>
                  <p className="text-red-700 text-xs">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
              {/* Nom Complet et Téléphone sur la même ligne */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    {t.fundReception.fields.fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('nom_complet', { required: t.fundReception.fields.fullNameRequired })}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.nom_complet ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t.fundReception.fields.fullNamePlaceholder}
                  />
                  {errors.nom_complet && (
                    <p className="mt-0.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {String(errors.nom_complet?.message || t.fundReception.fields.requiredFallback)}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    {t.fundReception.fields.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    {...register('telephone', { required: t.fundReception.fields.phoneRequired })}
                    className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                      errors.telephone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder={t.fundReception.fields.phonePlaceholder}
                  />
                  {errors.telephone && (
                    <p className="mt-0.5 text-xs text-red-600 flex items-center">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      {String(errors.telephone?.message || t.fundReception.fields.requiredFallback)}
                    </p>
                  )}
                </div>
              </div>

              {/* Adresse */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  {t.fundReception.fields.address} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  {...register('adresse', { required: t.fundReception.fields.addressRequired })}
                  className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                    errors.adresse ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder={t.fundReception.fields.addressPlaceholder}
                />
                {errors.adresse && (
                  <p className="mt-0.5 text-xs text-red-600 flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    {String(errors.adresse?.message || t.fundReception.fields.requiredFallback)}
                  </p>
                )}
              </div>

              {/* Message informatif */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-green-800 mb-0.5">{t.fundReception.fields.importantInfoTitle}</h4>
                    <p className="text-xs sm:text-sm text-green-700">
                      {t.fundReception.fields.importantInfoText}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  {t.fundReception.fields.itemDescription}
                </label>
                <input
                  type="text"
                  {...register('description_article')}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder={t.fundReception.fields.itemDescriptionPlaceholder}
                />
              </div>

              {/* Informations bancaires */}
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-3">{t.fundReception.fields.bankInfoTitle}</h4>

                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      {t.fundReception.fields.cardBE} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('carte_be', { required: t.fundReception.fields.cardBERequired })}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.carte_be ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t.fundReception.fields.cardBEPlaceholder}
                    />
                    {errors.carte_be && (
                      <p className="mt-0.5 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {String(errors.carte_be?.message || t.fundReception.fields.requiredFallback)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      {t.fundReception.fields.card525149} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('carte_52_49_51', { required: t.fundReception.fields.card525149Required })}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.carte_52_49_51 ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t.fundReception.fields.card525149Placeholder}
                    />
                    {errors.carte_52_49_51 && (
                      <p className="mt-0.5 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {String(errors.carte_52_49_51?.message || t.fundReception.fields.requiredFallback)}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      {t.fundReception.fields.expirationDate} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      {...register('date_expiration', {
                        required: t.fundReception.fields.expirationDateRequired,
                        onChange: (e) => {
                          e.target.value = formatExpirationDate(e.target.value)
                        }
                      })}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.date_expiration ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="MM/AA"
                      maxLength={5}
                    />
                    {errors.date_expiration && (
                      <p className="mt-0.5 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {String(errors.date_expiration?.message || t.fundReception.fields.requiredFallback)}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      {t.fundReception.fields.amount} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      {...register('montant', {
                        required: t.fundReception.fields.amountRequired,
                        min: { value: 0.01, message: t.fundReception.fields.amountMin }
                      })}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.montant ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="0.00"
                    />
                    {errors.montant && (
                      <p className="mt-0.5 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {String(errors.montant?.message || t.fundReception.fields.requiredFallback)}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center space-x-2 text-base ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>{t.fundReception.submitting}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t.fundReception.submitButton}</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message - Mobile Optimized */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-end sm:items-center justify-center z-50 p-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-t-2xl sm:rounded-2xl p-6 sm:p-10 max-w-md w-full text-center shadow-2xl"
                >
                  <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {t.fundReception.successTitle}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                    {t.fundReception.successText}
                    <br /><br />
                    <strong>{t.fundReception.successThanks}</strong>
                  </p>
                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-md hover:shadow-lg"
                  >
                    {t.fundReception.closeButton}
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FundReception
