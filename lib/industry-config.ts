export interface IndustryConfig {
  slug: string
  label: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition?: string
}

export const industryConfig: Record<string, IndustryConfig> = {
  'it-companies': {
    slug: 'it-companies',
    label: 'IT & Software',
    title: 'HRMS for IT and Software Companies',
    description:
      'Manage your tech talent effectively. Handle high-volume hiring, flexible work arrangements, skill tracking, and project-based performance reviews.',
    image: '/images/industries/it-companies-hero.jpg',
    imageAlt: 'Modern IT and software company workspace with development monitors and coding environment',
    imagePosition: 'center',
  },
  manufacturing: {
    slug: 'manufacturing',
    label: 'Manufacturing',
    title: 'HRMS for Manufacturing Companies',
    description:
      'Manage shifts, attendance, payroll, compliance, workforce planning, and manufacturing operations from one HR platform.',
    image: '/images/industries/manufacturing-hero.jpg',
    imageAlt: 'Modern manufacturing facility with advanced CNC machinery and industrial equipment',
    imagePosition: 'center',
  },
  healthcare: {
    slug: 'healthcare',
    label: 'Healthcare',
    title: 'HRMS for Healthcare Organizations',
    description:
      'Manage healthcare teams, shifts, attendance, compliance, payroll, and workforce performance efficiently.',
    image: '/images/industries/healthcare-hero.jpg',
    imageAlt: 'Clean modern hospital corridor with medical equipment and healthcare facility',
    imagePosition: 'center',
  },
  education: {
    slug: 'education',
    label: 'Education',
    title: 'HRMS for Educational Institutions',
    description:
      'Manage faculty, staff, attendance, payroll, leave, performance, and institutional HR operations in one place.',
    image: '/images/industries/education-hero.jpg',
    imageAlt: 'Modern classroom inside an educational institution with desks and learning environment',
    imagePosition: 'center',
  },
  retail: {
    slug: 'retail',
    label: 'Retail',
    title: 'HRMS for Retail Businesses',
    description:
      'Manage store employees, attendance, shifts, payroll, performance, and retail workforce operations.',
    image: '/images/industries/retail-hero.jpg',
    imageAlt: 'Premium modern retail store with organized product displays and merchandising',
    imagePosition: 'center',
  },
  'professional-services': {
    slug: 'professional-services',
    label: 'Professional Services',
    title: 'HRMS for Professional Services Firms',
    description:
      'Manage consultants, project teams, utilization, performance, payroll, attendance, and employee operations.',
    image: '/images/industries/professional-services-hero.jpg',
    imageAlt: 'Professional corporate office and business consulting workspace with modern facilities',
    imagePosition: 'center',
  },
}

export const getIndustryBySlug = (slug: string): IndustryConfig | null => {
  return industryConfig[slug] || null
}

export const getAllIndustries = (): IndustryConfig[] => {
  return Object.values(industryConfig)
}
