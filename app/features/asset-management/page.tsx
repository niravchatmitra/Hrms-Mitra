import { Metadata } from 'next'
import FeaturePageLayout from '@/components/features/FeaturePageLayout'
import { Laptop, Package, FileText, AlertCircle, BarChart, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Asset Management - Track Company Assets & Equipment | HRMS Mitra',
  description: 'Manage laptops, phones, and company equipment. Track assignments, returns, and asset lifecycle from purchase to disposal.',
}

export default function AssetManagementPage() {
  return (
    <FeaturePageLayout
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Asset Management', href: '/features/asset-management' },
      ]}
      badge="Asset Management"
      title="Track Every Company Asset From Assignment to Return"
      description="Maintain complete visibility of company assets. Track who has what, when it was issued, and manage asset lifecycle efficiently."
      benefits={[
        { title: 'Asset Catalog', description: 'Maintain a comprehensive catalog of all company assets with details and specifications.', icon: <Package className="w-12 h-12 text-primary" /> },
        { title: 'Assignment Tracking', description: 'Record asset assignments to employees with issue and return dates.', icon: <Laptop className="w-12 h-12 text-primary" /> },
        { title: 'Service & Maintenance', description: 'Track service history, warranties, and maintenance schedules.', icon: <RefreshCw className="w-12 h-12 text-primary" /> },
        { title: 'Asset Requests', description: 'Employees can request assets through self-service portal.', icon: <FileText className="w-12 h-12 text-primary" /> },
        { title: 'Alerts & Reminders', description: 'Get notified for warranty expiry, pending returns, and service due dates.', icon: <AlertCircle className="w-12 h-12 text-primary" /> },
        { title: 'Asset Reports', description: 'View asset utilization, availability, and depreciation reports.', icon: <BarChart className="w-12 h-12 text-primary" /> },
      ]}
      features={[
        { title: 'Asset Types', description: 'Categorize assets as laptops, phones, furniture, vehicles, or custom types.' },
        { title: 'Serial Number Tracking', description: 'Maintain serial numbers, asset codes, and identification details.' },
        { title: 'Purchase Details', description: 'Record purchase date, vendor, invoice, and cost information.' },
        { title: 'Assignment History', description: 'View complete history of who used which asset and when.' },
        { title: 'Return Process', description: 'Manage asset returns during employee exit or equipment upgrade.' },
        { title: 'Condition Tracking', description: 'Record asset condition during issue and return.' },
        { title: 'Warranty Management', description: 'Track warranty periods and get alerts before expiry.' },
        { title: 'Depreciation Calculation', description: 'Calculate asset depreciation based on accounting methods.' },
        { title: 'Asset Disposal', description: 'Record asset disposal, write-offs, and sale details.' },
        { title: 'Barcode/QR Scanning', description: 'Generate and scan barcodes for quick asset identification.' },
      ]}
      useCases={[
        { title: 'IT Equipment', description: 'Track laptops, monitors, keyboards, and accessories issued to employees.' },
        { title: 'Mobile Phones', description: 'Manage company phones with SIM cards and data plans.' },
        { title: 'Vehicle Fleet', description: 'Track company vehicles, assignments, and maintenance schedules.' },
      ]}
      advantages={[
        'Know exactly where every company asset is at any time',
        'Reduce asset loss and unauthorized usage',
        'Streamline new hire equipment provisioning',
        'Ensure assets are returned during employee exit',
        'Track asset maintenance and extend equipment life',
        'Make informed decisions on asset purchases and disposal',
      ]}
      relatedModules={[
        { name: 'Employee Onboarding', href: '/features/onboarding' },
        { name: 'Employee Self-Service', href: '/features/employee-self-service' },
        { name: 'Reports & Analytics', href: '/features/reports-analytics' },
      ]}
      faqs={[
        { question: 'Can employees request assets through the portal?', answer: 'Yes, employees can submit asset requests which go through approval workflow before assignment.' },
        { question: 'What happens to assets when an employee exits?', answer: 'Assets assigned to exiting employees are flagged for return. The system tracks pending returns until completion.' },
        { question: 'Can we track asset location?', answer: 'Yes, you can record asset location as office, warehouse, employee home, or under repair.' },
        { question: 'Does the system calculate depreciation?', answer: 'Yes, you can configure depreciation methods and the system calculates asset value over time for accounting purposes.' },
      ]}
      ctaTitle="Ready to Get Full Control of Your Assets?"
      ctaDescription="Stop losing track of company equipment. See how HRMS Mitra Asset Management brings complete visibility."
    />
  )
}
