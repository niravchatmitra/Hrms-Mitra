'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'
import { faqs } from '@/lib/faq-data'

export default function FAQAccordion() {
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
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-text-body leading-relaxed mb-8">
              Find answers to common questions about HRMS Mitra, features, pricing, and implementation.
            </p>

            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" aria-hidden="true" />
              <label htmlFor="faq-search" className="sr-only">
                Search FAQs
              </label>
              <input
                id="faq-search"
                type="search"
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
                    const isOpen = openIndex === questionIndex
                    return (
                      <div
                        key={questionIndex}
                        className="bg-background-alt rounded-xl overflow-hidden"
                      >
                        <button
                          type="button"
                          onClick={() => toggleQuestion(questionIndex)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                        >
                          <span className="text-lg font-semibold text-text-heading pr-8">
                            {item.q}
                          </span>
                          <span className="flex-shrink-0" aria-hidden="true">
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-primary" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-text-muted" />
                            )}
                          </span>
                        </button>

                        {isOpen && (
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
    </>
  )
}
