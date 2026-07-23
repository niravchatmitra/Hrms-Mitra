import {
  DollarSign, CalendarDays, UserCheck, User, MessageSquare, TrendingUp, ArrowRight, CheckCircle2
} from 'lucide-react'

const HRMS_APP_URL = process.env.NEXT_PUBLIC_HRMS_APP_URL || 'https://app.hrmsmitra.com'

const modules = [
  {
    id: 'payroll',
    eyebrow: '💰 Payroll & Statutory Compliance',
    heading: 'India-Ready Payroll. Zero Compliance Stress.',
    description: 'Auto-calculate salaries with PF, ESI, Professional Tax, TDS and LWF deductions baked in. Generate Form 16, ECR files and salary slips in one click — every pay cycle, on time.',
    points: ['PF, ESI, PT, TDS auto-computation', 'Salary slip & Form 16 generation', 'Multi-state tax & LWF handling'],
    icon: DollarSign,
    iconColor: 'text-[#075E54]',
    iconBg: 'bg-[#EFF8F5]',
    visual: (
      <div className="bg-white rounded-2xl shadow-xl border border-border p-6 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-text-heading">July 2025 Payroll</span>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">✅ Compliant</span>
        </div>
        {[
          { label: 'Basic Salary', value: '₹1,20,000', color: 'text-text-heading' },
          { label: 'PF Deduction (12%)', value: '₹14,400', color: 'text-amber-600' },
          { label: 'ESI Deduction (0.75%)', value: '₹900', color: 'text-amber-600' },
          { label: 'TDS', value: '₹8,200', color: 'text-red-500' },
          { label: 'Net Take-Home', value: '₹96,500', color: 'text-[#075E54] font-bold text-lg' },
        ].map(row => (
          <div key={row.label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
            <span className="text-sm text-text-body">{row.label}</span>
            <span className={`text-sm ${row.color}`}>{row.value}</span>
          </div>
        ))}
        <button className="w-full py-2.5 rounded-lg bg-[#075E54] text-white text-sm font-semibold">
          Generate & Disburse All ↓
        </button>
      </div>
    ),
    align: 'left' as const,
  },
  {
    id: 'attendance',
    eyebrow: '📅 Attendance & Leave Management',
    heading: 'Real-Time Attendance. Leave That Manages Itself.',
    description: 'Track attendance via biometric, mobile GPS, or web punch-in. Configure unlimited leave policies, approve requests via WhatsApp, and get real-time absent/late alerts automatically.',
    points: ['Biometric, GPS & face recognition integration', 'Custom leave types & approval workflows', 'Real-time alerts via WhatsApp & email'],
    icon: CalendarDays,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    visual: (
      <div className="bg-white rounded-2xl shadow-xl border border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-text-heading">Today's Attendance</span>
          <span className="text-xs text-text-muted">July 21, 2025</span>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: 'Present', count: 108, color: 'bg-emerald-50 text-emerald-700' },
            { label: 'On Leave', count: 7, color: 'bg-amber-50 text-amber-700' },
            { label: 'Late', count: 5, color: 'bg-red-50 text-red-600' },
          ].map(s => (
            <div key={s.label} className={`rounded-xl p-3 text-center ${s.color}`}>
              <div className="text-2xl font-bold">{s.count}</div>
              <div className="text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { name: 'Priya Sharma', time: '09:02 AM', status: '✅ On Time', color: 'text-emerald-600' },
            { name: 'Karan Mehta', time: '10:15 AM', status: '⚠️ Late', color: 'text-amber-600' },
            { name: 'Ananya Singh', time: '—', status: '🏖️ Leave', color: 'text-blue-600' },
          ].map(e => (
            <div key={e.name} className="flex justify-between items-center text-sm py-1.5 border-b border-gray-50 last:border-0">
              <span className="font-medium text-text-heading">{e.name}</span>
              <span className={`text-xs ${e.color}`}>{e.status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    align: 'right' as const,
  },
  {
    id: 'hiring',
    eyebrow: '🎯 Hiring & Onboarding',
    heading: 'Hire Faster. Onboard Smoother.',
    description: 'Post jobs, screen candidates with AI scoring, schedule interviews, send offer letters automatically — and onboard new hires with a guided digital checklist they complete on WhatsApp.',
    points: ['AI-powered candidate shortlisting', 'Automated offer letters & e-sign', 'WhatsApp-driven onboarding checklist'],
    icon: UserCheck,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    visual: (
      <div className="bg-white rounded-2xl shadow-xl border border-border p-6 space-y-3">
        <div className="flex justify-between items-center mb-1">
          <span className="font-bold text-text-heading">Hiring Pipeline</span>
          <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">8 Active</span>
        </div>
        {[
          { stage: 'Applied', count: 42, bar: 'bg-gray-300', w: '100%' },
          { stage: 'Screened', count: 21, bar: 'bg-violet-400', w: '50%' },
          { stage: 'Interviewed', count: 9, bar: 'bg-violet-600', w: '21%' },
          { stage: 'Offer Sent', count: 4, bar: 'bg-[#075E54]', w: '10%' },
          { stage: 'Hired', count: 2, bar: 'bg-emerald-500', w: '5%' },
        ].map(s => (
          <div key={s.stage}>
            <div className="flex justify-between text-xs text-text-body mb-1">
              <span>{s.stage}</span><span className="font-semibold">{s.count}</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <div className={`h-full rounded-full ${s.bar}`} style={{ width: s.w }} />
            </div>
          </div>
        ))}
      </div>
    ),
    align: 'left' as const,
  },
  {
    id: 'ess',
    eyebrow: '👤 Employee Self-Service',
    heading: 'Give Employees Control. Reduce HR Tickets.',
    description: 'Employees view attendance, apply for leave, download payslips, update personal info and raise IT/HR requests — 24/7, from any device. Cut HR helpdesk volume by 60%.',
    points: ['Leave applications & approval tracking', 'Payslip & Form 16 downloads', 'Profile updates & document uploads'],
    icon: User,
    iconColor: 'text-pink-600',
    iconBg: 'bg-pink-50',
    visual: (
      <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
        <div className="bg-[#075E54] px-5 py-4 text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#E8753A] flex items-center justify-center font-bold text-sm">AR</div>
          <div>
            <p className="font-semibold text-sm">Arjun Rathore</p>
            <p className="text-white/70 text-xs">Engineering Manager</p>
          </div>
        </div>
        <div className="p-5 space-y-3">
          {[
            { icon: '📅', label: 'Apply for Leave', badge: null },
            { icon: '💰', label: 'Download Payslip', badge: 'Jun 2025' },
            { icon: '📋', label: 'My Attendance', badge: null },
            { icon: '📄', label: 'View Form 16', badge: 'FY 24-25' },
            { icon: '🎯', label: 'My Goals & KPIs', badge: null },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between p-3 rounded-xl hover:bg-primary-extra-light transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium text-text-heading">{item.label}</span>
              </div>
              {item.badge && <span className="text-[10px] font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">{item.badge}</span>}
            </div>
          ))}
        </div>
      </div>
    ),
    align: 'right' as const,
  },
  {
    id: 'whatsapp',
    eyebrow: '💬 WhatsApp Notifications — Our Wedge',
    heading: 'The HR Notifications Your Employees Will Actually Read.',
    description: 'HRMS Mitra is the only Indian HRMS with deep WhatsApp integration. Send payslips, leave approvals, birthday wishes, policy updates and onboarding tasks — all delivered to the app employees already use, with no app install required.',
    points: ['Leave approval/rejection via WhatsApp', 'Payslip delivery & payroll alerts', 'Birthday, anniversary & policy reminders'],
    icon: MessageSquare,
    iconColor: 'text-primary',
    iconBg: 'bg-primary-extra-light',
    visual: (
      <div className="bg-[#E5DDD5] rounded-2xl shadow-xl border border-border p-4 space-y-3">
        <div className="flex items-center gap-2 bg-[#075E54] rounded-t-xl -m-4 mb-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-sm">HM</div>
          <div>
            <p className="text-white text-sm font-semibold">HRMS Mitra</p>
            <p className="text-white/70 text-xs">Business · tap for info</p>
          </div>
        </div>
        {[
          { msg: "Hi Priya 👋 Your leave request for Jul 22–24 has been **approved** ✅. Enjoy your time off!", time: '9:05 AM', type: 'in' },
          { msg: "Your June 2025 payslip is ready 📄 Net Pay: ₹96,500. Tap to view & download.", time: '5:02 PM', type: 'in' },
          { msg: "🎂 Happy Birthday Meera! Wishing you a wonderful day. — Team HRMS Mitra", time: 'Jul 21', type: 'in' },
          { msg: "Reminder: Complete your onboarding checklist — 3 tasks pending 📋", time: 'Jul 20', type: 'in' },
        ].map((m, i) => (
          <div key={i} className={`flex ${m.type === 'out' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-xl text-sm shadow-sm ${m.type === 'out' ? 'bg-[#DCF8C6]' : 'bg-white'}`}>
              <p className="text-gray-800 text-xs leading-relaxed">{m.msg}</p>
              <p className="text-[9px] text-gray-400 text-right mt-1">{m.time} ✓✓</p>
            </div>
          </div>
        ))}
      </div>
    ),
    align: 'left' as const,
  },
  {
    id: 'performance',
    eyebrow: '📈 Performance Management',
    heading: 'Set Goals. Track Progress. Reward Results.',
    description: 'Run OKR-based or KPI-driven reviews, enable 360° feedback, and give managers real-time visibility into team performance — all linked to compensation and promotion decisions.',
    points: ['OKR & KPI goal-setting framework', '360° peer and manager reviews', 'Performance-linked increment workflows'],
    icon: TrendingUp,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    visual: (
      <div className="bg-white rounded-2xl shadow-xl border border-border p-6">
        <div className="flex justify-between items-center mb-5">
          <span className="font-bold text-text-heading">Q3 2025 OKRs</span>
          <span className="text-xs text-text-muted">Team: Engineering</span>
        </div>
        <div className="space-y-4">
          {[
            { goal: 'Ship mobile app v2.0', progress: 78, color: 'bg-[#075E54]' },
            { goal: 'Reduce bug backlog by 50%', progress: 92, color: 'bg-emerald-500' },
            { goal: 'Improve API response < 200ms', progress: 55, color: 'bg-amber-500' },
            { goal: 'Onboard 3 senior engineers', progress: 66, color: 'bg-blue-500' },
          ].map(g => (
            <div key={g.goal}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-text-body font-medium">{g.goal}</span>
                <span className="font-bold text-text-heading">{g.progress}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full">
                <div className={`h-full rounded-full ${g.color} transition-all`} style={{ width: `${g.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-border flex justify-between text-sm">
          <span className="text-text-muted">Team Avg. Performance</span>
          <span className="font-bold text-[#075E54]">4.2 / 5 ⭐</span>
        </div>
      </div>
    ),
    align: 'right' as const,
  },
]

export default function AllInOnePlatformSection() {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold mb-4">
            Everything in One Place
          </div>
          <h2 className="mb-4">
            All Your HR.{' '}
            <span className="text-primary">One Platform.</span>
          </h2>
          <p className="text-lg text-text-body">
            Stop juggling 6 different tools. HRMS Mitra brings payroll, attendance, hiring, 
            performance and WhatsApp notifications under one roof — for one price.
          </p>
        </div>

        {/* Alternating module blocks */}
        <div className="space-y-28">
          {modules.map((mod) => {
            const Icon = mod.icon
            const isLeft = mod.align === 'left'
            return (
              <div
                key={mod.id}
                id={mod.id}
                className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-center ${isLeft ? '' : 'lg:grid-flow-dense'}`}
              >
                {/* Text side */}
                <div className={`space-y-6 ${!isLeft ? 'lg:col-start-2' : ''}`}>
                  <span className="text-sm font-bold text-primary tracking-wide uppercase">{mod.eyebrow}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-text-heading leading-tight">{mod.heading}</h3>
                  <p className="text-lg text-text-body leading-relaxed">{mod.description}</p>

                  <ul className="space-y-3">
                    {mod.points.map(pt => (
                      <li key={pt} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-text-body">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={`${HRMS_APP_URL}/book-demo`}
                      className="btn-primary btn-sm group"
                      id={`module-demo-${mod.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get a Demo <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                      href={`${HRMS_APP_URL}/features/${mod.id}`}
                      className="btn-secondary btn-sm"
                      id={`module-learn-${mod.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Visual side */}
                <div className={`relative ${!isLeft ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl blur-2xl -z-10 scale-110" />
                  {mod.visual}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
