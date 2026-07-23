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
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6">How It Works</h2>
          <p className="text-lg text-text-body leading-relaxed">
            Get started with HRMS Mitra in four simple steps. We&apos;ll guide you through every stage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-primary/20" />
                )}
                
                <div className="relative card-cream p-8 hover:shadow-large transition-all">
                  <div className="absolute -top-5 left-8 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-medium">
                    {step.number}
                  </div>
                  
                  <div className="mt-10 mb-4">
                    <div className="icon-line-art w-14 h-14 mb-6">
                      <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-text-heading mb-3 leading-tight">{step.title}</h3>
                    <p className="text-text-body text-sm leading-relaxed">{step.description}</p>
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
