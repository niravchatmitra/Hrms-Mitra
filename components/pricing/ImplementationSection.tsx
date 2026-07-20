import { CheckCircle, Calendar, Users, Rocket } from 'lucide-react'

export default function ImplementationSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Initial Consultation',
      description: 'We understand your HR processes, requirements, and timeline.',
    },
    {
      icon: Users,
      title: 'Configuration & Setup',
      description: 'Our team configures HRMS Mitra according to your company policies.',
    },
    {
      icon: CheckCircle,
      title: 'Data Migration & Training',
      description: 'We migrate your data and train your HR team and employees.',
    },
    {
      icon: Rocket,
      title: 'Go-Live & Support',
      description: 'Launch HRMS Mitra with dedicated support during the transition period.',
    },
  ]

  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">Implementation & Onboarding</h2>
          <p className="text-text-body">
            We guide you through every step of implementation to ensure a smooth transition to HRMS
            Mitra.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-extra-light rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-lg font-semibold text-primary mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-text-body">{step.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-xl border border-border max-w-3xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-success" />
            </div>
            <div>
              <h4 className="font-semibold text-text-heading mb-2">
                Implementation Timeline: 2-4 Weeks
              </h4>
              <p className="text-text-body text-sm">
                Average time from kickoff to go-live, depending on your company size and
                complexity. We work at your pace to ensure a smooth rollout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
