import { FileText, Clock, Calculator, AlertCircle } from 'lucide-react'

const problems = [
  {
    icon: FileText,
    title: 'Scattered employee data',
    description: 'Employee records spread across spreadsheets and folders make it difficult to find accurate information quickly.',
  },
  {
    icon: Clock,
    title: 'Manual time tracking',
    description: 'Manual attendance tracking and leave management leads to errors, disputes, and wasted HR time.',
  },
  {
    icon: Calculator,
    title: 'Complex payroll processing',
    description: 'Calculating salaries, deductions, and compliance manually every month is time-consuming and error-prone.',
  },
  {
    icon: AlertCircle,
    title: 'Disconnected HR processes',
    description: 'Using different tools for hiring, onboarding, attendance, and payroll creates data gaps and inefficiency.',
  },
]

export default function HRProblemsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header - BambooHR exact style */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-text-heading mb-6 leading-tight">
            Managing people shouldn&apos;t be this hard
          </h2>
          <p className="text-xl text-text-body leading-relaxed">
            Too many HR teams waste time on manual work that could be automated.
          </p>
        </div>

        {/* Problems Grid - Clean, minimal, BambooHR style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="text-center"
              >
                {/* Icon - Simple line style */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                  <Icon className="w-12 h-12 text-text-muted" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-text-heading mb-3">
                  {problem.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
