import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - HRMS Mitra',
  description: 'HRMS Mitra Terms and Conditions. Read our terms of service for using our HRMS software.',
}

export default function TermsPage() {
  return (
    <>
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4 text-white">Terms and Conditions</h1>
            <p className="text-white/90">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-soft space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-text-body leading-relaxed">
                  By accessing and using HRMS Mitra software and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
                <p className="text-text-body leading-relaxed">
                  HRMS Mitra provides cloud-based human resource management software that enables businesses to manage employee records, attendance, leave, payroll, recruitment, performance, and other HR operations. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
                <p className="text-text-body leading-relaxed mb-4">
                  To use our services, you must:
                </p>
                <ul className="list-disc pl-6 text-text-body space-y-2">
                  <li>Provide accurate and complete registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Use the services only for lawful purposes</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Subscription and Payment</h2>
                <p className="text-text-body leading-relaxed">
                  Subscription fees are billed according to your chosen plan. Payments are non-refundable except as required by law. We reserve the right to change our pricing with advance notice. Failure to pay may result in service suspension or termination.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Data Ownership</h2>
                <p className="text-text-body leading-relaxed">
                  You retain all rights to the data you enter into the system. We do not claim ownership of your data. You grant us permission to use your data solely to provide and improve our services. You are responsible for the accuracy and legality of your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-text-body leading-relaxed">
                  The HRMS Mitra software, including its code, design, features, and documentation, is our intellectual property. You may not copy, modify, distribute, or reverse engineer our software without permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
                <p className="text-text-body leading-relaxed">
                  We strive to maintain high availability but cannot guarantee uninterrupted service. We are not liable for any downtime, data loss, or business interruption resulting from service unavailability, unless caused by our gross negligence.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-text-body leading-relaxed">
                  To the maximum extent permitted by law, HRMS Mitra shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you in the past 12 months.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                <p className="text-text-body leading-relaxed">
                  Either party may terminate the subscription with notice as per the agreement. Upon termination, you will have a limited time to export your data. We may terminate accounts that violate these terms immediately without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                <p className="text-text-body leading-relaxed">
                  These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Ahmedabad, Gujarat.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="text-text-body leading-relaxed">
                  For questions about these Terms and Conditions, contact us at support@hrmsmitra.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
