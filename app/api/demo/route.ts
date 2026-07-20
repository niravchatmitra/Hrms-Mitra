import { NextRequest, NextResponse } from 'next/server'
import { demoFormSchema } from '@/lib/form-schemas'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the form data
    const validatedData = demoFormSchema.parse(body)
    
    // Check honeypot field
    if (body.website) {
      // This is likely a bot, silently reject
      return NextResponse.json({ success: true }, { status: 200 })
    }
    
    // TODO: Send email notification and/or save to CRM
    // Option 1: Use Resend (recommended)
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'HRMS Mitra <noreply@hrmsmitra.com>',
    //   to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL!,
    //   subject: `Demo Request from ${validatedData.company}`,
    //   html: `
    //     <h2>New Demo Request</h2>
    //     <p><strong>Name:</strong> ${validatedData.name}</p>
    //     <p><strong>Email:</strong> ${validatedData.email}</p>
    //     <p><strong>Phone:</strong> ${validatedData.phone}</p>
    //     <p><strong>Company:</strong> ${validatedData.company}</p>
    //     <p><strong>Job Title:</strong> ${validatedData.jobTitle || 'N/A'}</p>
    //     <p><strong>City:</strong> ${validatedData.city || 'N/A'}</p>
    //     <p><strong>Employees:</strong> ${validatedData.employeeCount}</p>
    //     <p><strong>Preferred Date:</strong> ${validatedData.preferredDate || 'Not specified'}</p>
    //     <p><strong>Preferred Time:</strong> ${validatedData.preferredTime || 'Not specified'}</p>
    //     <p><strong>Interested Modules:</strong> ${validatedData.modules?.join(', ') || 'None selected'}</p>
    //     <p><strong>Message:</strong><br/>${validatedData.message || 'N/A'}</p>
    //   `
    // });
    
    // Option 2: Send to CRM/Webhook (Salesforce, HubSpot, etc.)
    // await fetch(process.env.CRM_WEBHOOK_URL!, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     ...validatedData,
    //     source: 'website-demo-form',
    //     timestamp: new Date().toISOString()
    //   })
    // });
    
    console.log('Demo form submission:', validatedData)
    
    return NextResponse.json({ 
      success: true,
      message: 'Demo request received! We will contact you shortly to schedule.'
    }, { status: 200 })
    
  } catch (error) {
    console.error('Demo form error:', error)
    return NextResponse.json({ 
      success: false,
      message: 'Something went wrong. Please try again or contact us directly.'
    }, { status: 500 })
  }
}
