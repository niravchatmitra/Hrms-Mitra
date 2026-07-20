import Link from 'next/link'
import { Puzzle, Zap, Shield, Headphones } from 'lucide-react'

export default function AddOnsSection() {
  const addOns = [
    {
      icon: Puzzle,
      name: 'Custom Integrations',
      description: 'Connect HRMS Mitra with your existing tools and systems through custom API integrations.',
    },
    {
      icon: Zap,
      name: 'Advanced Automation',
      description: 'Custom workflow automation and business rules tailored to your organization processes.',
    },
    {
      icon: Shield,
      name: 'Additional Security Features',
      description: 'Enhanced security options including SSO, two-factor authentication, and IP whitelisting.',
    },
    {
      icon: Headphones,
      name: 'Dedicated Support',
      description: 'Premium support with faster response times and a dedicated customer success manager.',
    },
  ]

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Add-Ons & Customizations</h2>
          <p className="text-text-body">
            Extend HRMS Mitra with additional features and services tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {addOns.map((addOn, index) => {
            const Icon = addOn.icon
            return (
              <div key={index} className="card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{addOn.name}</h3>
                    <p className="text-text-body text-sm">{addOn.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-text-muted mb-4">
            Interested in add-ons or custom features?
          </p>
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Contact us to discuss your requirements →
          </Link>
        </div>
      </div>
    </section>
  )
}
