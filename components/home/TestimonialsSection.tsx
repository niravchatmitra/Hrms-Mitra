import { Quote, Star } from 'lucide-react'

export default function TestimonialsSection() {
  // Sample testimonials structure - ready for real data
  const testimonials = [
    {
      id: 1,
      content: 'HRMS Mitra transformed our HR operations completely. We went from spending hours on attendance and payroll to handling everything in minutes. The team loves the employee self-service portal.',
      author: 'Sample Client',
      role: 'HR Manager',
      company: 'Technology Company',
      rating: 5,
      // Note: This is sample content for development
    },
    {
      id: 2,
      content: 'The implementation was smooth and the support team was incredibly helpful. We now have complete visibility into our workforce data and can make better hiring decisions.',
      author: 'Sample Client',
      role: 'Founder',
      company: 'Growing Startup',
      rating: 5,
      // Note: This is sample content for development
    },
    {
      id: 3,
      content: 'Managing leave requests and payroll for our 200+ employees used to be a nightmare. HRMS Mitra made it seamless. Highly recommended for Indian businesses.',
      author: 'Sample Client',
      role: 'Operations Head',
      company: 'Manufacturing Business',
      rating: 5,
      // Note: This is sample content for development
    },
  ]

  return (
    <section className="section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">What Our Clients Say</h2>
          <p className="text-lg text-text-body">
            Join hundreds of Indian businesses that trust HRMS Mitra for their HR operations.
          </p>
        </div>
        
        {/* Development Note */}
        <div className="mb-8 p-4 bg-warning/10 border border-warning/20 rounded-lg text-center max-w-2xl mx-auto">
          <p className="text-sm text-warning font-medium">
            ⚠️ Development Note: Sample testimonials shown. Replace with real client testimonials before production.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-shadow relative"
            >
              <div className="absolute top-6 right-6 text-primary-light">
                <Quote className="w-10 h-10" />
              </div>
              
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              
              <p className="text-text-body mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-text-heading">{testimonial.author}</div>
                <div className="text-sm text-text-muted">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
