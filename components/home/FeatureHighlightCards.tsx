import Image from 'next/image'
import { ArrowRight, Zap, Shield, MessageSquare } from 'lucide-react'

const HRMS_APP_URL = process.env.NEXT_PUBLIC_HRMS_APP_URL || 'https://app.hrmsmitra.com'

const cards = [
  {
    icon: MessageSquare,
    iconColor: 'text-primary',
    iconBg: 'bg-primary-extra-light',
    tag: '🏆 Key Differentiator',
    tagColor: 'bg-primary-light text-primary',
    title: 'WhatsApp-Native HR Alerts',
    blurb: 'The only HRMS that sends payslips, leave approvals, attendance alerts & onboarding tasks directly to employees\' WhatsApp — zero app installs.',
    image: '/images/feature-whatsapp.jpg',
    href: `${HRMS_APP_URL}/features/whatsapp`,
    vs: 'Unlike Keka, greytHR & Darwinbox',
  },
  {
    icon: Shield,
    iconColor: 'text-primary',
    iconBg: 'bg-primary-extra-light',
    tag: '📋 Compliance Ready',
    tagColor: 'bg-primary-light text-primary',
    title: 'Payroll & Statutory Compliance',
    blurb: 'Auto-compute PF, ESI, Professional Tax, TDS & LWF. Generate ECR files, Form 16, and salary slips in one click — always accurate.',
    image: '/images/feature-payroll.jpg',
    href: `${HRMS_APP_URL}/features/payroll`,
    vs: 'Competes with greytHR & Zoho Payroll',
  },
  {
    icon: Zap,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    tag: '🤖 AI-Powered',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'AI-Assisted HR Workflows',
    blurb: 'Smart attendance anomaly detection, AI-driven candidate screening, auto-generated offer letters & automated onboarding checklists save 10+ hours/week.',
    image: '/images/feature-ai.jpg',
    href: `${HRMS_APP_URL}/features/ai`,
    vs: 'A step ahead of HROne & Darwinbox',
  },
]

export default function FeatureHighlightCards() {
  return (
    <section className="section bg-background-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-semibold mb-4">
            Why Teams Choose HRMS Mitra
          </div>
          <h2 className="mb-4">
            Built Different.{' '}
            <span className="text-primary">Designed for India.</span>
          </h2>
          <p className="text-lg text-text-body">
            Three reasons HRMS Mitra beats Keka, greytHR, Zoho People, Darwinbox & HROne for growing Indian businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-text-heading mb-2">{card.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed flex-1">{card.blurb}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-[11px] text-text-muted italic">{card.vs}</span>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
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
