import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { PRICING_PLANS } from '@/lib/pricing-config'

export default function PricingCards() {
  return (
    <section className="section">
      <div className="container-custom">
        {/* Pricing cards - BambooHR clean style */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-8 transition-all ${
                plan.featured
                  ? 'border-2 border-primary shadow-large ring-4 ring-primary/10'
                  : 'border border-border-light shadow-soft hover:shadow-medium'
              }`}
            >
              {/* Popular badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-primary text-white px-4 py-1.5 rounded-full shadow-soft">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}
              
              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-text-heading mb-2">{plan.name}</h3>
                <p className="text-sm text-text-muted">{plan.description}</p>
              </div>
              
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border-light">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-text-heading">{plan.price}</span>
                </div>
                <div className="text-sm text-text-muted mt-1">{plan.priceDetail}</div>
                {plan.billingPeriod && (
                  <div className="text-sm text-text-muted">{plan.billingPeriod}</div>
                )}
              </div>
              
              {/* Employee count */}
              <div className="mb-6">
                <div className="text-sm font-medium text-text-heading">
                  {plan.employeeCount}
                </div>
                <div className="text-xs text-text-muted mt-0.5">{plan.extraEmployeePrice}</div>
              </div>
              
              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm text-text-body leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA button */}
              <Link
                href={plan.ctaHref}
                className={`block text-center py-3.5 rounded-xl font-semibold transition-all ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-soft'
                    : 'border-2 border-border-light text-primary hover:bg-primary-extra-light hover:border-primary'
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
        
        {/* Contact sales footer */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-3 p-6 bg-background-alt rounded-2xl max-w-md">
            <p className="text-text-body">
              Need a custom plan or have specific requirements?
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Contact our sales team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
