import Link from 'next/link'
import { ArrowRight, Target, MessageCircle, Star, TrendingUp, Award } from 'lucide-react'

export default function PerformanceSection() {
  const features = [
    { icon: Target, text: 'Goals and OKRs' },
    { icon: MessageCircle, text: 'Review cycles' },
    { icon: Star, text: 'Manager feedback' },
    { icon: TrendingUp, text: 'Self reviews' },
    { icon: Award, text: 'Performance insights' },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">Performance Management</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl text-text-heading mb-6 leading-tight">
              Turn Employee Goals Into Measurable Progress
            </h2>
            
            <p className="text-lg text-text-body mb-10 leading-relaxed">
              Set clear objectives, conduct structured reviews, and track employee development with
              continuous feedback and performance insights.
            </p>
            
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="icon-line-art flex-shrink-0">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-text-heading font-medium text-lg">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link href="/features/performance-management" className="btn-primary btn-lg">
              Explore Performance Management
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="card-cream p-10">
              <p className="text-xl font-serif font-semibold text-text-heading mb-8">Performance Review</p>
              
              <div className="p-6 bg-white rounded-2xl mb-8 shadow-soft">
                <div className="text-sm text-primary font-semibold mb-3">Overall Rating</div>
                <div className="flex items-center space-x-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= 4 ? 'fill-primary text-primary' : 'text-primary/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-3xl font-bold text-primary">4.0 / 5.0</div>
              </div>
              
              <div className="space-y-5 mb-8">
                <p className="text-sm font-semibold text-text-heading">Goals Progress</p>
                {[
                  { goal: 'Complete Project Alpha', progress: 90 },
                  { goal: 'Team Leadership Skills', progress: 75 },
                  { goal: 'Client Satisfaction Score', progress: 85 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-text-heading">{item.goal}</span>
                      <span className="text-sm font-bold text-primary">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-background-alt rounded-full h-2.5">
                      <div
                        className="bg-primary rounded-full h-2.5 transition-all"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border-light pt-6">
                <p className="text-sm font-semibold text-text-heading mb-4">Recent Feedback</p>
                <div className="space-y-3">
                  {[
                    { from: 'Manager', feedback: 'Excellent project delivery and team collaboration' },
                    { from: 'Peer Review', feedback: 'Strong technical skills and mentorship' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-white rounded-lg shadow-soft">
                      <div className="text-xs font-bold text-primary mb-2">{item.from}</div>
                      <div className="text-sm text-text-body leading-relaxed">{item.feedback}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
