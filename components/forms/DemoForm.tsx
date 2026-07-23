'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { demoFormSchema, type DemoFormData } from '@/lib/form-schemas'
import { EMPLOYEE_RANGES } from '@/lib/pricing-config'
import { FEATURES } from '@/lib/constants'

export default function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  })

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/demo', {
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
          window.location.href = '/thank-you?type=demo'
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

      <div className="grid md:grid-cols-2 gap-6">
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
          <label htmlFor="jobTitle" className="block text-sm font-medium text-white mb-2">
            Job Title
          </label>
          <input
            {...register('jobTitle')}
            type="text"
            id="jobTitle"
            className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
            placeholder="HR Manager"
          />
        </div>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-white mb-2">
          City
        </label>
        <input
          {...register('city')}
          type="text"
          id="city"
          className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
          placeholder="Mumbai"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white mb-2">Interested Modules (Optional)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {FEATURES.slice(0, 6).map((feature) => (
            <label key={feature.id} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                value={feature.id}
                {...register('modules')}
                className="w-4 h-4 rounded border-white/20 bg-white/10 text-primary focus:ring-white/50"
              />
              <span className="text-white/90">{feature.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-white mb-2">
            Preferred Date
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            id="preferredDate"
            className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white backdrop-blur-sm"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-white mb-2">
            Preferred Time
          </label>
          <select {...register('preferredTime')} id="preferredTime" className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white backdrop-blur-sm">
            <option value="" className="bg-primary text-white">Select time slot</option>
            <option value="10:00-11:00" className="bg-primary text-white">10:00 AM - 11:00 AM</option>
            <option value="11:00-12:00" className="bg-primary text-white">11:00 AM - 12:00 PM</option>
            <option value="14:00-15:00" className="bg-primary text-white">2:00 PM - 3:00 PM</option>
            <option value="15:00-16:00" className="bg-primary text-white">3:00 PM - 4:00 PM</option>
            <option value="16:00-17:00" className="bg-primary text-white">4:00 PM - 5:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
          Message (Optional)
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 bg-white/10 text-white placeholder-white/50 backdrop-blur-sm"
          placeholder="Tell us about your HR challenges or specific requirements..."
        />
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
        {isSubmitting ? 'Booking...' : 'Book Demo'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-white/20 border border-white/30 rounded-lg text-white text-center backdrop-blur-sm">
          Demo booked! We&apos;ll contact you shortly to confirm.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-300/30 rounded-lg text-red-100 text-center backdrop-blur-sm">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
    </form>
  )
}
