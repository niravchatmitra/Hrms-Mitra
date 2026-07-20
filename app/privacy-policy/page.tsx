import { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy - HRMS Mitra',
  description: 'HRMS Mitra Privacy Policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-text-body">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-soft space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-text-body leading-relaxed">
                  HRMS Mitra ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our HRMS software and website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <p className="text-text-body leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-text-body space-y-2">
                  <li>Account information (name, email, phone number, company details)</li>
                  <li>Employee data entered into the HRMS system</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences and correspondence</li>
                  <li>Usage data and analytics about how you use our services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-text-body leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-text-body space-y-2">
                  <li>Provide, maintain, and improve our HRMS services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments, questions, and requests</li>
                  <li>Monitor and analyze trends, usage, and activities</li>
                  <li>Detect, prevent, and address technical issues and fraudulent activity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-text-body leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. This includes encryption of data in transit and at rest, regular security assessments, and access controls. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
                <p className="text-text-body leading-relaxed">
                  We retain your information for as long as your account is active or as needed to provide you services. We will retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Sharing of Information</h2>
                <p className="text-text-body leading-relaxed mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-text-body space-y-2">
                  <li>With your consent</li>
                  <li>With service providers who assist in our operations</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-text-body leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-text-body space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
                <p className="text-text-body leading-relaxed">
                  We use cookies and similar tracking technologies to collect usage information. You can control cookies through your browser settings. Please see our Cookie Policy for more details.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-text-body leading-relaxed">
                  Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-text-body leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-text-body leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-text-body mt-4">
                  Email: support@hrmsmitra.com<br />
                  Address: Ahmedabad, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
