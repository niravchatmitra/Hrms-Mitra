import { Building2, Code, Factory, ShoppingBag, Heart, GraduationCap } from 'lucide-react'

export default function ClientTrustSection() {
  const categories = [
    { icon: Building2, label: 'Startups' },
    { icon: Code, label: 'IT Companies' },
    { icon: Factory, label: 'Manufacturers' },
    { icon: ShoppingBag, label: 'Retail Teams' },
    { icon: Heart, label: 'Healthcare' },
    { icon: GraduationCap, label: 'Education' },
  ]

  return (
    <section className="section-alt">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Built for Growing Teams Across India
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-border hover:border-primary-light hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary-extra-light rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm font-medium text-text-heading">{category.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
