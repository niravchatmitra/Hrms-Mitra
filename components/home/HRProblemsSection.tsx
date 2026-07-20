import { FileSpreadsheet, Clock, Calculator, AlertCircle } from 'lucide-react'

export default function HRProblemsSection() {
  const problems = [
    {
      icon: FileSpreadsheet,
      title: 'Scattered Employee Information',
      description: 'Employee records spread across multiple spreadsheets and folders make it difficult to find accurate information quickly.',
    },
    {
      icon: Clock,
      title: 'Attendance and Leave Confusion',
      description: 'Manual attendance tracking and leave management leads to errors, disputes, and wasted HR time.',
    },
    {
      icon: Calculator,
      title: 'Complicated Payroll Processing',
      description: 'Calculating salaries, deductions, and compliance requirements manually is time-consuming and error-prone.',
    },
    {
      icon: AlertCircle,
      title: 'Delayed Approvals and HR Requests',
      description: 'Paper-based or email approvals create bottlenecks, causing delays in leave approvals and employee requests.',
    },
  ]

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">
            HR Should Not Depend on Spreadsheets and Repetitive Manual Work.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <div
                key={index}
                className="card-hover"
              >
                <div className="w-14 h-14 bg-error/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-error" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-text-body">{problem.description}</p>
              </div>
            )
          })}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-4 bg-primary-extra-light rounded-xl border-2 border-primary-light">
            <p className="text-lg font-medium text-primary">
              HRMS Mitra brings every HR process into one connected system.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
