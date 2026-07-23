import Link from 'next/link'
import { ArrowRight, Users, Clock, DollarSign, Target, UserPlus, BarChart3, Heart, Shield } from 'lucide-react'

const modules = [
  {
    icon: Users,
    title: 'HR Management',
    description: 'Central employee database with documents, org charts, and complete employee lifecycle',
    href: '/features/core-hr',
  },
  {
    icon: UserPlus,
    title: 'Hiring & Onboarding',
    description: 'Applicant tracking, offer management, and structured onboarding workflows',
    href: '/features/recruitment',
  },
  {
    icon: Clock,
    title: 'Time & Attendance',
    description: 'Attendance tracking, shift management, leave requests, and approval workflows',
    href: '/features/attendance-management',
  },
  {
    icon: DollarSign,
    title: 'Payroll Management',
    description: 'Indian payroll with PF, ESI, TDS, and automatic salary processing',
    href: '/features/payroll-management',
  },
  {
    icon: Target,
    title: 'Performance & Goals',
    description: 'Set objectives, conduct reviews, track progress, and provide continuous feedback',
    href: '/features/performance-management',
  },
  {
    icon: Heart,
    title: 'Employee Experience',
    description: 'Self-service portal, announcements, helpdesk, surveys, and engagement tools',
    href: '/features/employee-self-service',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Workforce insights, attendance reports, payroll analytics, and custom dashboards',
    href: '/features/reports-analytics',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Role-based permissions, data encryption, audit logs, and compliance management',
    href: '/security',
  },
]

export default function ProductModulesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header - BambooHR style */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            ONE CONNECTED PLATFORM
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading mb-6 leading-tight">
            Everything you need to run HR from one place
          </h2>
          <p className="text-lg text-text-body leading-relaxed">
            HRMS Mitra brings every stage of the employee journey into a single platform—from
            hiring to retirement.
          </p>
        </div>

        {/* Feature Grid - Clean BambooHR style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Link
                key={module.title}
                href={module.href}
                className="group bg-white rounded-2xl p-8 border border-border-light hover:shadow-large transition-all duration-300"
              >
                {/* Icon - Simple, clean, BambooHR style */}
                <div className="w-14 h-14 bg-background-alt rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-extra-light transition-colors">
                  <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-text-heading mb-3 group-hover:text-primary transition-colors">
                  {module.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed mb-4">
                  {module.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-primary font-semibold text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/platform"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-primary hover:bg-primary-hover rounded-full shadow-soft hover:shadow-medium transition-all duration-200 group"
          >
            Explore the Full Platform
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
