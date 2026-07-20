import Link from 'next/link'
import { Check, Star } from 'lucide-react'
import { PRICING_PLANS } from '@/lib/pricing-config'

export default function PricingCards() {
  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all ${
                plan.featured
                  ? 'border-primary shadow-xl scale-105 md:scale-110'
                  : 'border-border hover:border-primary-light hover:shadow-lg'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center space-x-1 bg-accent-coral text-white px-4 py-1.5 rounded-full shadow-md">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-heading mb-2">{plan.name}</h3>
                <p className="text-sm text-text-muted">{plan.description}</p>
              </div>
              
              <div className="text-center mb-6 pb-6 border-b border-border">
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                <div className="text-sm text-text-muted mb-1">{plan.priceDetail}</div>
                {plan.billingPeriod && (
                  <div className="text-sm text-text-muted">{plan.billingPeriod}</div>
                )}
              </div>
              
              <div className="mb-6">
                <div className="text-sm font-semibold text-text-heading mb-1">
                  {plan.employeeCount}
                </div>
                <div className="text-xs text-text-muted">{plan.extraEmployeePrice}</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-body">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href={plan.ctaHref}
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'border-2 border-primary text-primary hover:bg-primary-extra-light'
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-muted mb-4">
            Need a custom plan or have specific requirements?
          </p>
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contact our sales team →
          </Link>
        </div>
      </div>
    </section>
  )
}
