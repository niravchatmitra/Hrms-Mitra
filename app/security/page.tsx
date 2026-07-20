import { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'
import { Shield, Lock, Eye, Server, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security - Data Protection & Privacy | HRMS Mitra',
  description: 'Learn about HRMS Mitra security measures. We protect your employee data with encryption, access controls, and regular security audits.',
}

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'All data is encrypted in transit using SSL/TLS and at rest using industry-standard AES-256 encryption.',
    },
    {
      icon: Eye,
      title: 'Role-Based Access Control',
      description: 'Granular permissions ensure employees and managers see only the information they need.',
    },
    {
      icon: Server,
      title: 'Secure Cloud Infrastructure',
      description: 'Hosted on secure cloud servers with 99.9% uptime SLA and regular backups.',
    },
    {
      icon: Shield,
      title: 'Regular Security Audits',
      description: 'Periodic security assessments and penetration testing to identify and fix vulnerabilities.',
    },
    {
      icon: CheckCircle,
      title: 'Compliance Standards',
      description: 'Following best practices for data privacy and security compliance.',
    },
    {
      icon: AlertCircle,
      title: 'Activity Monitoring',
      description: 'Complete audit logs track all system changes and data access for accountability.',
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Security', href: '/security' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-light rounded-full mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="mb-6">Your Data Security is Our Priority</h1>
            <p className="text-xl text-text-body leading-relaxed">
              We understand that you're trusting us with your most sensitive business data. That's why we've built security into every layer of HRMS Mitra.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <h2 className="text-center mb-12">Security Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card-hover">
                  <div className="w-14 h-14 bg-primary-extra-light rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-text-body">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Security Commitments</h2>
            
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Data Ownership</h3>
                <p className="text-text-body">
                  Your data belongs to you. We never sell, share, or use your employee data for any purpose other than providing you with HRMS services.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Regular Backups</h3>
                <p className="text-text-body">
                  Automated daily backups with multiple recovery points ensure your data is safe even in disaster scenarios. Data can be restored within hours if needed.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Access Monitoring</h3>
                <p className="text-text-body">
                  Every login, data change, and system action is logged. Suspicious activity triggers automatic alerts to our security team for immediate investigation.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Data Residency</h3>
                <p className="text-text-body">
                  Your data is stored in secure data centers with physical security, redundant power, and network infrastructure to ensure availability.
                </p>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-3">Employee Training</h3>
                <p className="text-text-body">
                  Our team undergoes regular security training and follows strict protocols for handling customer data. All staff sign confidentiality agreements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center card p-8">
            <h2 className="text-2xl font-semibold mb-4">Questions About Security?</h2>
            <p className="text-text-body mb-6">
              We're happy to discuss our security practices in detail and address any concerns you may have.
            </p>
            <a href="/contact" className="btn-primary">
              Contact Our Security Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
