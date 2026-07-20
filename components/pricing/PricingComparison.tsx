'use client'

import { useState } from 'react'
import { Check, X, ChevronDown, ChevronUp } from 'lucide-react'
import { PRICING_PLANS } from '@/lib/pricing-config'

export default function PricingComparison() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('core-hr')

  const comparisonData = [
    {
      category: 'Core HR',
      id: 'core-hr',
      features: [
        { name: 'Employee Database', essential: true, professional: true, enterprise: true },
        { name: 'Employee Directory', essential: true, professional: true, enterprise: true },
        { name: 'Document Management', essential: false, professional: true, enterprise: true },
        { name: 'Organization Chart', essential: false, professional: true, enterprise: true },
        { name: 'Employee History', essential: true, professional: true, enterprise: true },
      ],
    },
    {
      category: 'Time & Attendance',
      id: 'attendance',
      features: [
        { name: 'Attendance Tracking', essential: true, professional: true, enterprise: true },
        { name: 'Leave Management', essential: true, professional: true, enterprise: true },
        { name: 'Shift Management', essential: false, professional: true, enterprise: true },
        { name: 'Overtime Tracking', essential: false, professional: true, enterprise: true },
        { name: 'Regularization', essential: false, professional: true, enterprise: true },
      ],
    },
    {
      category: 'Payroll',
      id: 'payroll',
      features: [
        { name: 'Payroll Processing', essential: false, professional: true, enterprise: true },
        { name: 'Salary Structures', essential: false, professional: true, enterprise: true },
        { name: 'PF, ESI, PT Support', essential: false, professional: true, enterprise: true },
        { name: 'TDS Management', essential: false, professional: true, enterprise: true },
        { name: 'Payroll Reports', essential: false, professional: true, enterprise: true },
      ],
    },
    {
      category: 'Recruitment',
      id: 'recruitment',
      features: [
        { name: 'Job Postings', essential: false, professional: true, enterprise: true },
        { name: 'Applicant Tracking', essential: false, professional: true, enterprise: true },
        { name: 'Interview Scheduling', essential: false, professional: true, enterprise: true },
        { name: 'Offer Management', essential: false, professional: true, enterprise: true },
        { name: 'Career Portal', essential: false, professional: false, enterprise: true },
      ],
    },
    {
      category: 'Performance',
      id: 'performance',
      features: [
        { name: 'Goal Management', essential: false, professional: false, enterprise: true },
        { name: 'Performance Reviews', essential: false, professional: false, enterprise: true },
        { name: '360-Degree Feedback', essential: false, professional: false, enterprise: true },
        { name: 'KPI Tracking', essential: false, professional: false, enterprise: true },
        { name: 'Performance Reports', essential: false, professional: false, enterprise: true },
      ],
    },
    {
      category: 'Employee Experience',
      id: 'employee',
      features: [
        { name: 'Self-Service Portal', essential: true, professional: true, enterprise: true },
        { name: 'Mobile Access', essential: true, professional: true, enterprise: true },
        { name: 'Expense Management', essential: false, professional: true, enterprise: true },
        { name: 'Asset Management', essential: false, professional: false, enterprise: true },
        { name: 'Employee Helpdesk', essential: false, professional: false, enterprise: true },
      ],
    },
    {
      category: 'Reports & Analytics',
      id: 'reports',
      features: [
        { name: 'Standard Reports', essential: true, professional: true, enterprise: true },
        { name: 'Advanced Analytics', essential: false, professional: true, enterprise: true },
        { name: 'Custom Reports', essential: false, professional: true, enterprise: true },
        { name: 'Dashboard Widgets', essential: false, professional: true, enterprise: true },
        { name: 'Export Options', essential: true, professional: true, enterprise: true },
      ],
    },
    {
      category: 'Integrations',
      id: 'integrations',
      features: [
        { name: 'API Access', essential: false, professional: false, enterprise: true },
        { name: 'Third-party Integrations', essential: false, professional: true, enterprise: true },
        { name: 'Custom Integrations', essential: false, professional: false, enterprise: true },
        { name: 'Webhooks', essential: false, professional: false, enterprise: true },
      ],
    },
    {
      category: 'Support',
      id: 'support',
      features: [
        { name: 'Email Support', essential: true, professional: true, enterprise: true },
        { name: 'Priority Support', essential: false, professional: true, enterprise: true },
        { name: 'Account Manager', essential: false, professional: true, enterprise: true },
        { name: '24/7 Support', essential: false, professional: false, enterprise: true },
        { name: 'Implementation Assistance', essential: false, professional: true, enterprise: true },
      ],
    },
  ]

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Detailed Plan Comparison</h2>
          <p className="text-text-body">
            Compare features across all plans to find the perfect fit for your organization.
          </p>
        </div>
        
        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
          <table className="w-full">
            <thead className="bg-primary-extra-light">
              <tr>
                <th className="text-left p-6 font-semibold text-text-heading">Features</th>
                {PRICING_PLANS.map((plan) => (
                  <th key={plan.id} className="text-center p-6 font-semibold text-text-heading">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((category) => (
                <>
                  <tr key={category.id} className="bg-background-alt">
                    <td colSpan={4} className="p-4 font-semibold text-text-heading">
                      {category.category}
                    </td>
                  </tr>
                  {category.features.map((feature, idx) => (
                    <tr key={idx} className="border-t border-border hover:bg-background-alt/50">
                      <td className="p-4 text-text-body">{feature.name}</td>
                      <td className="p-4 text-center">
                        {feature.essential ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-text-muted mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.professional ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-text-muted mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {feature.enterprise ? (
                          <Check className="w-5 h-5 text-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-text-muted mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.id} className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
              <div className="bg-primary-extra-light p-4">
                <h3 className="font-semibold text-text-heading text-center">{plan.name}</h3>
              </div>
              <div className="p-4">
                {comparisonData.map((category) => (
                  <div key={category.id} className="mb-4">
                    <button
                      onClick={() => toggleCategory(`${plan.id}-${category.id}`)}
                      className="w-full flex items-center justify-between p-3 bg-background-alt rounded-lg"
                    >
                      <span className="font-semibold text-text-heading">{category.category}</span>
                      {expandedCategory === `${plan.id}-${category.id}` ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-muted" />
                      )}
                    </button>
                    {expandedCategory === `${plan.id}-${category.id}` && (
                      <ul className="mt-2 space-y-2 pl-4">
                        {category.features.map((feature, idx) => {
                          const isIncluded =
                            (plan.id === 'essential' && feature.essential) ||
                            (plan.id === 'professional' && feature.professional) ||
                            (plan.id === 'enterprise' && feature.enterprise)
                          return (
                            <li key={idx} className="flex items-center space-x-2">
                              {isIncluded ? (
                                <Check className="w-4 h-4 text-success flex-shrink-0" />
                              ) : (
                                <X className="w-4 h-4 text-text-muted flex-shrink-0" />
                              )}
                              <span className="text-sm text-text-body">{feature.name}</span>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
