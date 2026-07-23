import { Rocket, Lock, Zap, BarChart3, Smartphone, MapPin } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Fast Implementation',
    description: 'Set up your company, departments, employees, and policies within minutes. No complicated configuration required.',
  },
  {
    icon: Lock,
    title: 'Secure & Reliable',
    description: 'Role-based access, secure cloud infrastructure, audit logs, and enterprise-grade data protection keep your HR data safe.',
  },
  {
    icon: Zap,
    title: 'Automate HR Operations',
    description: 'Automate attendance, leave management, payroll, onboarding, employee records, and HR workflows from one platform.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Reports',
    description: 'Generate powerful HR reports and analytics instantly.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Manage your workforce anytime from desktop, tablet, or mobile.',
  },
  {
    icon: MapPin,
    title: 'Built for Indian Businesses',
    description: 'Designed for Indian payroll, attendance, compliance, and growing companies.',
  },
]

export default function ClientTrustSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-background-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-text-heading mb-6 leading-tight">
            Why Growing Businesses Choose HRMS Mitra
          </h2>
          <p className="text-xl text-text-body leading-relaxed">
            Everything your HR team needs to manage employees faster, smarter, and more efficiently.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-[20px] p-8 shadow-soft hover:shadow-large hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/10"
              >
                {/* Icon Circle - Consistent Brand Color */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-hover transition-all duration-300 shadow-soft">
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-text-heading mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-text-body leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
