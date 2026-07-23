import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, FileText, Download, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HR Resources - Guides, Templates & Best Practices | HRMS Mitra',
  description: 'Free HR resources including guides, templates, checklists, and best practices for Indian businesses.',
}

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'HR Guides',
      description: 'Comprehensive guides on HR processes, compliance, and best practices.',
      link: '/blog',
    },
    {
      icon: FileText,
      title: 'Templates',
      description: 'Ready-to-use HR templates for policies, letters, and forms.',
      link: '/blog',
    },
    {
      icon: Download,
      title: 'Checklists',
      description: 'Practical checklists for onboarding, payroll, compliance, and more.',
      link: '/blog',
    },
    {
      icon: HelpCircle,
      title: 'FAQs',
      description: 'Answers to common HR and HRMS software questions.',
      link: '/faq',
    },
  ]

  return (
    <>
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 text-white">HR Resources & Learning Center</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Free resources to help you master HR management and get the most out of HRMS Mitra.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  href={category.link}
                  className="card-hover p-8 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-text-body">{category.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">Want to Learn More?</h2>
            <p className="text-white/90 mb-6">
              Book a personalized demo to see how HRMS Mitra can solve your specific HR challenges.
            </p>
            <Link href="/book-demo" className="btn-primary bg-white text-primary hover:bg-white/90">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
