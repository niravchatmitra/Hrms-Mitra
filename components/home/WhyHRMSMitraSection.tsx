import { Database, Zap, Users, BarChart3, Lock, Smartphone } from 'lucide-react'

const benefits = [
  {
    icon: Database,
    title: 'One Source of Truth',
    description: 'Every piece of employee data lives in one secure, centralized system—accessible anytime, anywhere.',
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Eliminate manual HR tasks with approval workflows, automated reminders, and smart scheduling.',
  },
  {
    icon: Users,
    title: 'Employee Self-Service',
    description: 'Employees can view payslips, apply for leave, update details, and access documents independently.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    description: 'Real-time workforce analytics and custom reports help you make informed people decisions.',
  },
  {
    icon: Lock,
    title: 'Enterprise-Grade Security',
    description: 'Role-based access, data encryption, audit logs, and compliance with Indian data regulations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Experience',
    description: 'Full HR functionality on mobile devices—perfect for on-the-go teams and remote workforces.',
  },
]

export default function WhyHRMSMitraSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="heading-lg mb-6">
            Why growing companies choose HRMS Mitra
          </h2>
          <p className="body-lg">
            Built specifically for Indian businesses who need modern HR management without the complexity.
          </p>
        </div>

        {/* Benefits Grid - BambooHR style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-border-light hover:border-primary/20 hover:shadow-large transition-all duration-300"
              >
                {/* Icon - Consistent Brand Color */}
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-hover transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-text-heading mb-4">
                  {benefit.title}
                </h3>
                <p className="text-text-body leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary-extra-light to-white rounded-3xl p-12 border border-primary/10">
          <h3 className="font-serif text-3xl lg:text-4xl font-semibold text-primary mb-4">
            Ready to transform your HR operations?
          </h3>
          <p className="text-lg text-text-body mb-8 max-w-2xl mx-auto">
            See how HRMS Mitra can bring your people data, payroll, and performance together in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book-demo"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Request a Free Demo
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-white hover:bg-primary-extra-light hover:text-primary-hover rounded-xl border-2 border-primary-light hover:border-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
