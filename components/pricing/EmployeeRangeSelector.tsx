'use client'

import { useState } from 'react'
import { Users } from 'lucide-react'
import { EMPLOYEE_RANGES } from '@/lib/pricing-config'

export default function EmployeeRangeSelector() {
  const [selectedRange, setSelectedRange] = useState(EMPLOYEE_RANGES[2].id)

  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-extra-light rounded-full mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold mb-4">How Many Employees Do You Have?</h2>
            <p className="text-text-body">
              Select your employee count range to help us recommend the best plan for your
              organization.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {EMPLOYEE_RANGES.map((range) => (
              <button
                key={range.id}
                onClick={() => setSelectedRange(range.id)}
                className={`p-6 rounded-xl border-2 text-center transition-all ${
                  selectedRange === range.id
                    ? 'border-primary bg-primary-extra-light'
                    : 'border-border bg-white hover:border-primary-light'
                }`}
              >
                <div
                  className={`text-lg font-semibold ${
                    selectedRange === range.id ? 'text-primary' : 'text-text-heading'
                  }`}
                >
                  {range.label}
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-primary-extra-light rounded-xl border border-primary-light text-center">
            <p className="text-text-body mb-4">
              Based on your selection, we recommend exploring our plans. Contact us for personalized
              pricing.
            </p>
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center btn-primary"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
