import { Building2, Code, Factory, ShoppingBag, Heart, GraduationCap, Truck, Briefcase } from 'lucide-react'

// Fake "client" logos rendered as stylized text placeholders
const clients = [
  { name: 'TechVista', industry: 'IT' },
  { name: 'FastTrack', industry: 'Logistics' },
  { name: 'Sunrise Pharma', industry: 'Pharma' },
  { name: 'DigitalFirst', industry: 'Agency' },
  { name: 'GreenBuild', industry: 'Construction' },
  { name: 'EduSpark', industry: 'EdTech' },
  { name: 'MediCare+', industry: 'Healthcare' },
  { name: 'RetailPro', industry: 'Retail' },
]

const industries = [
  { icon: Code, label: 'IT & SaaS', count: '120+' },
  { icon: Factory, label: 'Manufacturing', count: '85+' },
  { icon: Truck, label: 'Logistics', count: '60+' },
  { icon: ShoppingBag, label: 'Retail', count: '70+' },
  { icon: Heart, label: 'Healthcare', count: '55+' },
  { icon: GraduationCap, label: 'Education', count: '45+' },
  { icon: Building2, label: 'Startups', count: '90+' },
  { icon: Briefcase, label: 'Professional Services', count: '75+' },
]

export default function ClientTrustSection() {
  return (
    <section className="py-16 bg-background-alt border-y border-border">
      <div className="container-custom">
        {/* Top line */}
        <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-widest mb-8">
          Trusted by 500+ growing Indian businesses
        </p>

        {/* Scrolling client logo row */}
        <div className="relative overflow-hidden mb-12">
          <div className="flex gap-6 items-center animate-[marquee_25s_linear_infinite] whitespace-nowrap">
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-xl border border-border px-5 py-3 shadow-soft flex items-center gap-2"
              >
                <span className="text-lg">🏢</span>
                <span className="text-sm font-bold text-text-heading">{c.name}</span>
                <span className="text-[10px] text-text-muted bg-background-alt rounded-full px-1.5 py-0.5">{c.industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {industries.map((ind) => {
            const Icon = ind.icon
            return (
              <div
                key={ind.label}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-soft transition-all cursor-default text-center"
              >
                <div className="w-9 h-9 bg-primary-extra-light rounded-lg flex items-center justify-center mb-2">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs font-semibold text-text-heading leading-tight">{ind.label}</div>
                <div className="text-[10px] text-primary font-bold mt-0.5">{ind.count} teams</div>
              </div>
            )
          })}
        </div>

        {/* Style tag for marquee animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  )
}
