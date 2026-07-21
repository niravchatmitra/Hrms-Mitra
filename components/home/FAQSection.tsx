'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is HRMS Mitra?',
    answer: 'HRMS Mitra is an all-in-one Human Resource Management System built specifically for Indian businesses. It automates payroll (with PF, ESI, TDS, and PT compliance), attendance, leave management, hiring, onboarding, performance reviews, and employee self-service — and delivers real-time HR notifications via WhatsApp, making it the ideal choice for growing Indian companies.',
  },
  {
    question: 'Does HRMS Mitra handle Indian payroll and statutory compliance?',
    answer: 'Yes — completely. HRMS Mitra auto-computes PF (12% + 12%), ESI (3.25% + 0.75%), Professional Tax (state-wise slabs), TDS (Section 192), and Labour Welfare Fund deductions. It generates ECR files for EPFO, Form 16 for employees, and salary slips — all in one click. Multi-state compliance is supported out of the box. We always recommend verifying edge cases with your Chartered Accountant.',
  },
  {
    question: 'What is the pricing? Is it based on number of employees?',
    answer: 'HRMS Mitra uses a per-employee, per-month pricing model. You only pay for the modules you use, and pricing scales with your team size. We offer plans for startups (10–50 employees), SMEs (50–500), and enterprises (500+). Volume discounts apply. Contact our sales team for a customised quote — we never lock you into annual contracts without a free trial.',
  },
  {
    question: 'Is employee data secure? Where is it hosted?',
    answer: 'All data is hosted on AWS (Mumbai region) — 100% in India. We are ISO 27001-compliant and use AES-256 encryption at rest, TLS 1.3 in transit, and role-based access controls. Payroll and personal data is never shared with third parties. We offer a dedicated instance for enterprise customers requiring data isolation.',
  },
  {
    question: 'What support model does HRMS Mitra offer?',
    answer: 'All plans include email support with a 4-hour SLA. SME and enterprise plans include a dedicated account manager, phone support (Mon–Sat 9am–7pm IST), and WhatsApp support. Onboarding includes free data migration, configuration, and a live training session. We also offer a self-serve knowledge base and video library at no extra cost.',
  },
  {
    question: 'How does the WhatsApp HR notification feature work?',
    answer: 'HRMS Mitra integrates directly with WhatsApp Business API. HR events (leave approval/rejection, payslip generation, attendance alerts, onboarding tasks, birthdays, policy updates) automatically trigger WhatsApp messages to employees\' personal numbers — no app install required. Employees can even reply to approve or reject certain requests directly from WhatsApp.',
  },
  {
    question: 'How is HRMS Mitra different from Keka, greytHR, Zoho People, Darwinbox, or HROne?',
    answer: 'HRMS Mitra is purpose-built for India\'s SME market and focuses on three strengths: (1) WhatsApp-native notifications — no other leading HRMS offers deep WhatsApp integration, (2) Best-in-class Indian statutory compliance auto-computation, and (3) Faster implementation — most customers go live within 7 days vs 4–6 weeks for Darwinbox or Keka. Our pricing is also 30–40% lower than Keka and Darwinbox for comparable feature sets.',
  },
  {
    question: 'Can we migrate existing data from our current HRMS or Excel?',
    answer: 'Yes. Our onboarding team provides free data migration from Excel, Google Sheets, or any major HRMS (Keka, greytHR, Zoho People, BambooHR). We support bulk import of employee records, historical payroll data, attendance logs, and leave balances. Typical migration takes 2–5 business days depending on data volume.',
  },
]

// schema.org FAQPage JSON-LD
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section bg-white" id="faq">
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold mb-4">
            ❓ FAQ
          </div>
          <h2 className="mb-4">
            Frequently Asked{' '}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-text-body">
            Everything you need to know about HRMS Mitra — pricing, compliance, WhatsApp integration, security and support.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary/30 bg-[#EFF8F5] shadow-soft'
                    : 'border-border bg-white hover:border-primary/20'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-base pr-6 ${isOpen ? 'text-primary' : 'text-text-heading'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted'
                  }`}>
                    {isOpen
                      ? <ChevronUp className="w-4 h-4" />
                      : <ChevronDown className="w-4 h-4" />
                    }
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-text-body leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center mt-10 text-text-muted text-sm">
          Still have questions?{' '}
          <a href="mailto:hello@hrmsmitra.com" className="text-primary font-semibold hover:underline">
            Email us at hello@hrmsmitra.com
          </a>
          {' '}or{' '}
          <a href={`${process.env.NEXT_PUBLIC_HRMS_APP_URL || 'https://app.hrmsmitra.com'}/book-demo`} className="text-primary font-semibold hover:underline">
            book a free demo
          </a>.
        </p>
      </div>
    </section>
  )
}
