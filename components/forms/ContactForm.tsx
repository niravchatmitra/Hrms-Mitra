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
        <label htmlFor="subject" className="label">
          Subject *
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          className="input"
          placeholder="How can we help you?"
        />
        {errors.subject && <p className="error-message">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message *
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          className="input"
          placeholder="Tell us more about your requirements..."
        />
        {errors.message && <p className="error-message">{errors.message.message}</p>}
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
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-success/10 border border-success/20 rounded-lg text-success text-center">
          Thank you! We&apos;ll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-lg text-error text-center">
          Something went wrong. Please try again or email us directly.
        </div>
      )}
    </form>
  )
}
