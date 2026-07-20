import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import Logo from '@/components/shared/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { name: 'Core HR', href: '/features/core-hr' },
    { name: 'Attendance', href: '/features/attendance-management' },
    { name: 'Leave', href: '/features/leave-management' },
    { name: 'Payroll', href: '/features/payroll-management' },
    { name: 'Recruitment', href: '/features/recruitment' },
    { name: 'Performance', href: '/features/performance-management' },
    { name: 'Expenses', href: '/features/expense-management' },
    { name: 'Helpdesk', href: '/features/employee-helpdesk' },
  ]

  const solutionLinks = [
    { name: 'Startups', href: '/industries/startups' },
    { name: 'IT Companies', href: '/industries/it-companies' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Retail', href: '/industries/retail' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Education', href: '/industries/education' },
  ]

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'HR Glossary', href: '/hr-glossary' },
    { name: 'Guides', href: '/resources' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Security', href: '/security' },
  ]

  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book Demo', href: '/book-demo' },
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-and-conditions' },
  ]

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Logo className="text-white mb-4" showTagline />
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Manage your entire workforce from one simple HR platform. Automate employee records,
              attendance, leave, payroll, and everyday HR operations.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© {currentYear} HRMS Mitra. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
