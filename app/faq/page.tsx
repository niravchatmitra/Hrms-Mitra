'use client'

import { useState } from 'react'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is HRMS software?',
        a: 'HRMS (Human Resource Management System) is software that helps businesses manage all HR activities including employee records, attendance, leave, payroll, recruitment, performance, and more in one centralized platform.',
      },
      {
        q: 'Who should use HRMS Mitra?',
        a: 'HRMS Mitra is designed for Indian businesses of all sizes—from startups with 10 employees to enterprises with 1000+ employees across industries like IT, manufacturing, retail, healthcare, and more.',
      },
      {
        q: 'Is HRMS Mitra cloud-based?',
        a: 'Yes, HRMS Mitra is a cloud-based solution accessible from anywhere with an internet connection. No installation or server maintenance required.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    questions: [
      {
        q: 'How much does HRMS Mitra cost?',
        a: 'Pricing is based on the number of employees and modules you choose. We offer Essential, Professional, and Enterprise plans. Contact our sales team for a personalized quote based on your requirements.',
      },
      {
        q: 'Is there a free trial?',
        a: 'We offer personalized demos to show you how HRMS Mitra works. After the demo, we can discuss trial options based on your specific needs.',
      },
      {
        q: 'Can we upgrade or downgrade our plan?',
        a: 'Yes, you can upgrade or downgrade your plan as your business needs change. We'll help you transition smoothly.',
      },
    ],
  },
  {
    category: 'Implementation',
    questions: [
      {
        q: 'How long does implementation take?',
        a: 'Most companies go live within 2-4 weeks, depending on company size and complexity. This includes configuration, data migration, and training.',
      },
      {
        q: 'Do you provide implementation support?',
        a: 'Yes, our team guides you through the entire implementation process including system setup, data import, policy configuration, and user training.',
      },
      {
        q: 'Can we import existing employee data?',
        a: 'Yes, you can bulk import employee data from Excel or CSV files. We provide templates and assistance during data migration.',
      },
    ],
  },
  {
    category: 'Features & Functionality',
    questions: [
      {
        q: 'Does HRMS Mitra support Indian payroll?',
        a: 'Yes, HRMS Mitra is built specifically for Indian payroll with support for PF, ESI, Professional Tax, TDS, and other statutory requirements. However, we recommend verifying specific compliance needs with your financial advisor.',
      },
      {
        q: 'Can employees access the system?',
        a: 'Yes, employees get access to a self-service portal where they can view attendance, apply for leave, download payslips, update details, and submit requests.',
      },
      {
        q: 'Does it work on mobile devices?',
        a: 'Yes, HRMS Mitra is fully responsive and works on desktop, tablets, and mobile phones. Employees can check-in, apply for leave, and access HR services on the go.',
      },
      {
        q: 'Can we customize the system?',
        a: 'Yes, you can configure leave policies, attendance rules, salary structures, approval workflows, and more to match your company policies. Enterprise plans offer additional customization options.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    questions: [
      {
        q: 'Is our data secure?',
        a: 'Yes, we use industry-standard encryption for data storage and transmission. Role-based access controls ensure only authorized personnel can view sensitive information.',
      },
      {
        q: 'Where is data stored?',
        a: 'Data is stored in secure cloud servers with regular backups. We ensure data availability and disaster recovery protocols.',
      },
      {
        q: 'Are you GDPR compliant?',
        a: 'We follow data privacy best practices and can accommodate GDPR requirements for companies operating internationally.',
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'What kind of support do you provide?',
        a: 'We provide email support for all plans. Professional and Enterprise plans get priority support and dedicated account managers.',
      },
      {
        q: 'Do you provide training?',
        a: 'Yes, we provide training for HR admins and key users during implementation. Additional training sessions can be arranged as needed.',
      },
      {
        q: 'How do I contact support?',
        a: 'You can reach our support team via email at support@hrmsmitra.com or through the helpdesk portal within the application.',
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openIndex, setOpenIndex] = useState<string | null>('General-0')

  const filteredFaqs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0)

  const toggleQuestion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-text-body leading-relaxed mb-8">
              Find answers to common questions about HRMS Mitra, features, pricing, and implementation.
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredFaqs.map((category) => (
              <div key={category.category}>
                <h2 className="text-2xl font-semibold mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((item, idx) => {
                    const questionIndex = `${category.category}-${idx}`
                    return (
                      <div
                        key={questionIndex}
                        className="bg-white rounded-xl border border-border overflow-hidden hover:border-primary-light transition-colors"
                      >
                        <button
                          onClick={() => toggleQuestion(questionIndex)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                          <h3 className="text-lg font-semibold text-text-heading pr-8">
                            {item.q}
                          </h3>
                          <div className="flex-shrink-0">
                            {openIndex === questionIndex ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-text-muted" />
                            )}
                          </div>
                        </button>
                        
                        {openIndex === questionIndex && (
                          <div className="px-6 pb-6">
                            <p className="text-text-body leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">No questions found matching &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center card p-8">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-text-body mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Support
              </Link>
              <Link href="/book-demo" className="btn-secondary">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
