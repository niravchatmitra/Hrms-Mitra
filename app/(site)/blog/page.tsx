import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HR Blog - Insights, Tips & Best Practices | HRMS Mitra',
  description: 'Read the latest HR insights, tips, and best practices for Indian businesses. Learn about HRMS, payroll, compliance, and workforce management.',
}

// Sample blog posts - replace with actual blog data
const samplePosts = [
  {
    slug: 'what-is-hrms-software',
    title: 'What is HRMS Software and Why Your Business Needs It',
    excerpt: 'Learn what HRMS software is, how it works, and why it\'s essential for modern businesses to manage their workforce effectively.',
    date: '2024-01-15',
    author: 'HRMS Mitra Team',
    category: 'HRMS Basics',
  },
  {
    slug: 'indian-payroll-compliance-guide',
    title: 'Complete Guide to Indian Payroll Compliance for HR Teams',
    excerpt: 'Understand PF, ESI, Professional Tax, TDS, and other statutory requirements for processing payroll in India.',
    date: '2024-01-10',
    author: 'HRMS Mitra Team',
    category: 'Payroll',
  },
  {
    slug: 'employee-onboarding-checklist',
    title: 'The Ultimate Employee Onboarding Checklist for Indian Companies',
    excerpt: 'A comprehensive checklist covering everything from offer letter to first-day orientation for smooth employee onboarding.',
    date: '2024-01-05',
    author: 'HRMS Mitra Team',
    category: 'Onboarding',
  },
]

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">HR Insights & Resources</h1>
            <p className="text-xl text-text-body leading-relaxed">
              Expert advice, practical tips, and industry insights to help you manage your workforce better.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <article key={post.slug} className="card-hover group">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-text-body mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-sm text-text-muted mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-white rounded-xl border border-border">
              <p className="text-text-body mb-4">
                📝 Blog content coming soon. Check back for regular updates on HR best practices.
              </p>
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                Subscribe to Updates →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
