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
          <label htmlFor="name" className="label">
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="input"
            placeholder="John Doe"
          />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Work Email *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="input"
            placeholder="john@company.com"
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="label">
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="input"
            placeholder="+91-9876543210"
          />
          {errors.phone && <p className="error-message">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="label">
            Company Name *
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="input"
            placeholder="Your Company"
          />
          {errors.company && <p className="error-message">{errors.company.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="employeeCount" className="label">
            Number of Employees *
          </label>
          <select {...register('employeeCount')} id="employeeCount" className="input">
            <option value="">Select employee count</option>
            {EMPLOYEE_RANGES.map((range) => (
              <option key={range.id} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
          {errors.employeeCount && <p className="error-message">{errors.employeeCount.message}</p>}
        </div>

        <div>
          <label htmlFor="jobTitle" className="label">
            Job Title
          </label>
          <input
            {...register('jobTitle')}
            type="text"
            id="jobTitle"
            className="input"
            placeholder="HR Manager"
          />
        </div>
      </div>

      <div>
        <label htmlFor="city" className="label">
          City
        </label>
        <input
          {...register('city')}
          type="text"
          id="city"
          className="input"
          placeholder="Mumbai"
        />
      </div>

      <div>
        <label className="label">Interested Modules (Optional)</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {FEATURES.slice(0, 6).map((feature) => (
            <label key={feature.id} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                value={feature.id}
                {...register('modules')}
                className="w-4 h-4 rounded border-border"
              />
              <span className="text-text-body">{feature.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="preferredDate" className="label">
            Preferred Date
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            id="preferredDate"
            className="input"
            min={new Date().toISOString().split('T')[0]}
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="label">
            Preferred Time
          </label>
          <select {...register('preferredTime')} id="preferredTime" className="input">
            <option value="">Select time slot</option>
            <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
            <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
            <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
            <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
            <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message (Optional)
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="input"
          placeholder="Tell us about your HR challenges or specific requirements..."
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="w-5 h-5 rounded border-border mt-0.5"
        />
        <label htmlFor="consent" className="text-sm text-text-body">
          I agree to the{' '}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Privacy Policy
          </Link>{' '}
          and consent to being contacted by HRMS Mitra.
        </label>
      </div>
      {errors.consent && <p className="error-message">{errors.consent.message}</p>}

      {/* Honeypot field */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50"
      >
        {isSubmitting ? 'Booking...' : 'Book Demo'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg text-success text-center">
          Demo booked! We'll contact you shortly to confirm.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-lg text-error text-center">
          Something went wrong. Please try again or contact us directly.
        </div>
      )}
    </form>
  )
}
