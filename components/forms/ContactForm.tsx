'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, type ContactFormData } from '@/lib/form-schemas'
import { EMPLOYEE_RANGES } from '@/lib/pricing-config'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
        
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-200 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Work Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-200 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
            placeholder="+91-9876543210"
          />
          {errors.phone && <p className="text-red-200 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Company Name *
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
            placeholder="Your Company"
          />
          {errors.company && <p className="text-red-200 text-sm mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="employeeCount" className="block text-sm font-medium text-white mb-2">
          Number of Employees *
        </label>
        <select {...register('employeeCount')} id="employeeCount" className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white backdrop-blur-sm">
          <option value="" className="bg-primary text-white">Select employee count</option>
          {EMPLOYEE_RANGES.map((range) => (
            <option key={range.id} value={range.value} className="bg-primary text-white">
              {range.label}
            </option>
          ))}
        </select>
        {errors.employeeCount && <p className="text-red-200 text-sm mt-1">{errors.employeeCount.message}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
          Subject *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
          placeholder="How can we help you?"
        />
        {errors.subject && <p className="text-red-200 text-sm mt-1">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
          placeholder="Tell us more about your requirements..."
        />
        {errors.message && <p className="text-red-200 text-sm mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-start space-x-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="w-5 h-5 rounded border-white/20 mt-0.5 bg-white/10 text-primary focus:ring-white/50"
        />
        <label htmlFor="consent" className="text-sm text-white/90">
          I agree to the{' '}
          <Link href="/privacy-policy" className="text-white underline hover:text-white/80">
            Privacy Policy
          </Link>{' '}
          and consent to being contacted by HRMS Mitra.
        </label>
      </div>
      {errors.consent && <p className="text-red-200 text-sm">{errors.consent.message}</p>}

      {/* Honeypot field */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 text-lg font-semibold text-primary bg-white hover:bg-white/90 rounded-xl shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-white/20 border border-white/30 rounded-lg text-white text-center backdrop-blur-sm">
          Thank you! We&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-300/30 rounded-lg text-red-100 text-center backdrop-blur-sm">
          Something went wrong. Please try again or email us directly.
        </div>
      )}
    </form>
  )
}
