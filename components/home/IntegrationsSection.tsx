import { ArrowRight, Puzzle } from 'lucide-react'

// Integration logos as text/emoji placeholders (replace with real SVGs/images)
const integrations = [
  { name: 'Tally', emoji: '📊', category: 'Accounting' },
  { name: 'QuickBooks', emoji: '💼', category: 'Accounting' },
  { name: 'Zoho Books', emoji: '📒', category: 'Accounting' },
  { name: 'SAP', emoji: '🏢', category: 'ERP' },
  { name: 'Slack', emoji: '💬', category: 'Communication' },
  { name: 'Google Workspace', emoji: '🔵', category: 'Productivity' },
  { name: 'Microsoft 365', emoji: '🟦', category: 'Productivity' },
  { name: 'Razorpay', emoji: '💳', category: 'Payments' },
  { name: 'HDFC NetBanking', emoji: '🏦', category: 'Banking' },
  { name: 'WhatsApp Business', emoji: '💚', category: 'Messaging' },
  { name: 'Naukri.com', emoji: '🎯', category: 'Hiring' },
  { name: 'LinkedIn Jobs', emoji: '🔗', category: 'Hiring' },
]

export default function IntegrationsSection() {
  return (
    <section className="section bg-background-alt">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold mb-4">
            <Puzzle className="w-4 h-4" />
            Integrations
          </div>
          <h2 className="mb-4">
            Connects With the Tools{' '}
            <span className="text-primary">You Already Use</span>
          </h2>
          <p className="text-lg text-text-body">
            Sync payroll data with Tally, push alerts via WhatsApp Business, post jobs on Naukri, and disburse salaries via your bank — all from one platform.
          </p>
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-10">
          {integrations.map((int) => (
            <div
              key={int.name}
              className="bg-white rounded-2xl border border-border p-4 flex flex-col items-center gap-2 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <span className="text-3xl">{int.emoji}</span>
              <span className="text-xs font-semibold text-text-heading text-center leading-tight">{int.name}</span>
              <span className="text-[9px] text-text-muted bg-background-alt rounded-full px-2 py-0.5">{int.category}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/integrations"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            See All Integrations <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
