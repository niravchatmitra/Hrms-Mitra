'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is HRMS software?',
      answer: 'HRMS (Human Resource Management System) software is a digital solution that helps businesses manage all aspects of HR operations including employee records, attendance, leave, payroll, recruitment, performance, and more—all in one centralized platform.',
    },
    {
      question: 'Which businesses can use HRMS Mitra?',
      answer: 'HRMS Mitra is designed for Indian businesses of all sizes—from startups with 10 employees to enterprises with 1000+ employees. It works across industries including IT, manufacturing, retail, healthcare, education, and professional services.',
    },
    {
      question: 'Does HRMS Mitra support Indian payroll?',
      answer: 'Yes, HRMS Mitra is built specifically for Indian payroll requirements including PF, ESI, Professional Tax, TDS, and other statutory compliance. However, we recommend verifying specific compliance requirements with your financial advisor.',
    },
    {
      question: 'Can employees access HRMS Mitra?',
      answer: 'Absolutely. HRMS Mitra includes a dedicated employee self-service portal where employees can view attendance, apply for leave, download payslips, update personal details, submit expenses, and raise HR requests independently.',
    },
    {
      question: 'Can we import our existing employee data?',
      answer: 'Yes, you can easily import your existing employee database and historical records into HRMS Mitra. Our implementation team will guide you through the data migration process to ensure accuracy.',
    },
    {
      question: 'Is pricing based on employee count?',
      answer: 'Yes, HRMS Mitra pricing is typically based on the number of active employees and the modules you choose. Contact our sales team for detailed pricing information specific to your company size and requirements.',
    },
    {
      question: 'Can HRMS Mitra support multiple offices?',
      answer: 'Yes, HRMS Mitra supports multi-location organizations. You can manage employees across different offices, branches, or cities from a single system with location-specific policies and reporting.',
    },
    {
      question: 'How do we book a demo?',
      answer: 'You can book a free demo by clicking the "Book a Demo" button in the navigation menu or by visiting our Book Demo page. Our team will schedule a personalized walkthrough of HRMS Mitra based on your specific requirements.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-text-body">
            Find answers to common questions about HRMS Mitra and how it can help your business.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary-light transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-text-heading pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-text-muted" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-text-body leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
