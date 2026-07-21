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
    <section className="section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-primary-light rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Performance Management</span>
            </div>
            
            <h2 className="mb-6">
              Turn Employee Goals Into Measurable Progress.
            </h2>
            
            <p className="text-lg text-text-body mb-8">
              Set clear objectives, conduct structured reviews, and track employee development with
              continuous feedback and performance insights.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-extra-light rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text-heading font-medium">{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            <Link href="/features/performance-management" className="btn-primary">
              Explore Performance Management
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
              <p className="text-lg font-semibold text-text-heading mb-6">Performance Review</p>
              
              <div className="p-4 bg-gradient-to-br from-primary-extra-light to-primary-light rounded-xl mb-6">
                <div className="text-sm text-primary mb-2">Overall Rating</div>
                <div className="flex items-center space-x-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${
                        star <= 4 ? 'fill-primary text-primary' : 'text-primary/30'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-primary">4.0 / 5.0</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-sm font-semibold text-text-heading">Goals Progress</p>
                {[
                  { goal: 'Complete Project Alpha', progress: 90 },
                  { goal: 'Team Leadership Skills', progress: 75 },
                  { goal: 'Client Satisfaction Score', progress: 85 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-text-heading">{item.goal}</span>
                      <span className="text-sm font-semibold text-primary">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-background-alt rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2 transition-all"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-text-heading mb-3">Recent Feedback</p>
                <div className="space-y-3">
                  {[
                    { from: 'Manager', feedback: 'Excellent project delivery and team collaboration' },
                    { from: 'Peer Review', feedback: 'Strong technical skills and mentorship' },
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-background-alt rounded-lg">
                      <div className="text-xs font-semibold text-primary mb-1">{item.from}</div>
                      <div className="text-sm text-text-body">{item.feedback}</div>
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
