import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

export const metadata: Metadata = {
  title: 'HR Glossary - Common HR Terms & Definitions | HRMS Mitra',
  description: 'Comprehensive glossary of HR terms, acronyms, and definitions for Indian businesses.',
}

const glossaryTerms = [
  { term: 'Attendance', definition: 'The record of an employee\'s presence or absence from work on scheduled working days.' },
  { term: 'ATS (Applicant Tracking System)', definition: 'Software that manages the recruitment and hiring process, tracking candidates from application to hire.' },
  { term: 'CTC (Cost to Company)', definition: 'The total amount a company spends on an employee annually, including salary, benefits, and perquisites.' },
  { term: 'ESI (Employee State Insurance)', definition: 'A social security scheme in India providing medical and cash benefits to employees and their dependents.' },
  { term: 'HRMS', definition: 'Human Resource Management System - software that manages all aspects of HR operations.' },
  { term: 'KRA (Key Result Area)', definition: 'Specific areas where an employee needs to deliver results to achieve their role objectives.' },
  { term: 'Leave Encashment', definition: 'Payment made to employees for unutilized leave days, typically during resignation or retirement.' },
  { term: 'Notice Period', definition: 'The time duration between resignation submission and the last working day as per company policy or employment contract.' },
  { term: 'Onboarding', definition: 'The process of integrating new employees into the organization, including orientation and training.' },
  { term: 'PF (Provident Fund)', definition: 'A retirement benefit scheme in India where both employee and employer contribute a portion of salary.' },
  { term: 'Probation Period', definition: 'Initial employment period where employee performance is assessed before permanent confirmation.' },
  { term: 'Professional Tax', definition: 'A direct tax levied by state governments in India on salaried individuals and professionals.' },
  { term: 'TDS (Tax Deducted at Source)', definition: 'Income tax deducted by employer from employee salary and deposited with the government.' },
  { term: 'Utilization Rate', definition: 'The percentage of time an employee spends on billable work versus total available time.' },
]

export default function HRGlossaryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'HR Glossary', href: '/hr-glossary' },
        ]}
      />
      
      <section className="section bg-gradient-to-b from-primary-extra-light to-background-main">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">HR Glossary</h1>
            <p className="text-xl text-text-body leading-relaxed">
              Common HR terms, acronyms, and definitions for Indian businesses and HR professionals.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-alt">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {glossaryTerms.map((item, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.term}</h3>
                  <p className="text-text-body">{item.definition}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-primary-extra-light rounded-xl text-center">
              <p className="text-text-body mb-4">
                This glossary is continuously updated. If you&apos;d like us to add a specific term, please let us know.
              </p>
              <Link href="/contact" className="text-primary font-semibold hover:underline">
                Suggest a Term →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
