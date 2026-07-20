export default function PricingHero() {
  return (
    <section className="section bg-background-main relative overflow-hidden">
      {/* Decorative hand-drawn elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-primary/20 rounded-full" />
      <div className="absolute top-20 right-20 w-16 h-16">
        <svg viewBox="0 0 100 100" className="text-primary/20">
          <path
            d="M 10 50 Q 30 10, 50 50 T 90 50"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </div>
      <div className="absolute bottom-10 left-1/4 w-20 h-1 bg-accent-coral/30 rounded-full" />
      <div className="absolute bottom-20 right-1/3 w-12 h-12">
        <svg viewBox="0 0 100 100" className="text-primary/20">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-6">Simple HRMS Plans for Every Stage of Growth</h1>
          <p className="text-xl text-text-body leading-relaxed">
            Select the HRMS features and employee capacity your organization needs. Our team will
            help you choose the right plan.
          </p>
        </div>
      </div>
    </section>
  )
}
