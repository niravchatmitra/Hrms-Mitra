import { MapPin, Smile, Layers, Shield, Headphones, Smartphone } from 'lucide-react'

export default function WhyHRMSMitraSection() {
  const benefits = [
    {
      icon: MapPin,
      title: 'Designed for Indian Companies',
      description: 'Built with Indian payroll, compliance, and business practices in mind.',
    },
    {
      icon: Smile,
      title: 'Easy for HR Teams and Employees',
      description: 'Intuitive interface that requires minimal training to get started.',
    },
    {
      icon: Layers,
      title: 'Modular and Scalable',
      description: 'Start with what you need today and add modules as you grow.',
    },
    {
      icon: Shield,
      title: 'Secure Role-Based Access',
      description: 'Control who sees what with granular permission settings.',
    },
    {
      icon: Headphones,
      title: 'Guided Implementation',
      description: 'Our team helps you configure and launch HRMS Mitra smoothly.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Employee Experience',
      description: 'Works seamlessly on desktop, tablet, and mobile devices.',
    },
  ]

  return (
    <section className="section bg-gradient-to-b from-background-main to-primary-extra-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Why Choose HRMS Mitra?</h2>
          <p className="text-lg text-text-body">
            We understand the unique challenges of managing HR in Indian businesses. HRMS Mitra is
            built to make your work easier, not more complicated.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-extra-light rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-text-body">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
