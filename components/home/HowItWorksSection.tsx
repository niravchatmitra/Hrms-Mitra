import { MessageSquare, Settings, Upload, Rocket } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Share Your HR Requirements',
      description: 'Tell us about your company size, HR processes, and what you need to automate.',
    },
    {
      number: '02',
      icon: Settings,
      title: 'Configure Your Company Policies',
      description: 'Set up leave policies, attendance rules, salary structures, and approval workflows.',
    },
    {
      number: '03',
      icon: Upload,
      title: 'Import Employees and Historical Data',
      description: 'Upload your employee database and migrate existing records with our help.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch HRMS Mitra for Your Team',
      description: 'Go live with your configured system and empower your HR team and employees.',
    },
  ]

  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">How It Works</h2>
          <p className="text-lg text-text-body">
            Get started with HRMS Mitra in four simple steps. We'll guide you through every stage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-light" />
                )}
                
                <div className="relative bg-white rounded-xl p-6 border border-border hover:border-primary-light hover:shadow-lg transition-all">
                  <div className="absolute -top-4 left-6 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md">
                    {step.number}
                  </div>
                  
                  <div className="mt-8 mb-4">
                    <div className="w-14 h-14 bg-primary-extra-light rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-text-body text-sm">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
