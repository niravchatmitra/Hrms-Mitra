import { Metadata } from 'next'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Cookie Policy - HRMS Mitra',
  description: 'Learn about how HRMS Mitra uses cookies and similar technologies on our website.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Cookie Policy', href: '/cookie-policy' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Cookie Policy</h1>
            <p className="text-text-body">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-soft space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
                <p className="text-text-body leading-relaxed">
                  Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
                
                <div className="space-y-6 mt-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Necessary Cookies</h3>
                    <p className="text-text-body leading-relaxed">
                      These cookies are essential for the website to function properly. They enable basic functions like page navigation, secure areas access, and remembering your cookie preferences. The website cannot function properly without these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                    <p className="text-text-body leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website functionality and content.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
                    <p className="text-text-body leading-relaxed">
                      These cookies are used to deliver personalized advertisements relevant to you and your interests. They also help us measure the effectiveness of our marketing campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="text-text-body leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 text-text-body space-y-2">
                  <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
                  <li>Configure your browser settings to block or delete cookies</li>
                  <li>Use browser extensions that manage cookies</li>
                  <li>Visit our website in private/incognito mode</li>
                </ul>
                <p className="text-text-body leading-relaxed mt-4">
                  Please note that blocking cookies may impact your experience on our website and limit certain features.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
                <p className="text-text-body leading-relaxed">
                  We may use third-party services like Google Analytics that place cookies on your device. These services have their own privacy policies governing their use of information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
                <p className="text-text-body leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Please check this page periodically for updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-text-body leading-relaxed">
                  If you have questions about our use of cookies, please contact us at support@hrmsmitra.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
