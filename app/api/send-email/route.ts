import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { first_name, last_name, email, phone, message } = body

    // Validate required fields
    if (!first_name || !last_name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("=== SMTP Configuration Debug ===")
    console.log("SMTP_HOST:", process.env.SMTP_HOST)
    console.log("SMTP_PORT:", process.env.SMTP_PORT)
    console.log("SMTP_SECURE:", process.env.SMTP_SECURE)
    console.log("SMTP_USER:", process.env.SMTP_USER)
    console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "***SET***" : "***NOT SET***")

    // Create transporter with detailed logging
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // Enhanced debugging options
      debug: true, // Enable debug output
      logger: true, // Log to console
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
      // Try different TLS options for Hostinger
      tls: {
        rejectUnauthorized: false,
        ciphers: "SSLv3",
        secureProtocol: "TLSv1_2_method",
      },
      // Alternative authentication method
      requireTLS: true,
    })

    // Test the connection first
    console.log("=== Testing SMTP Connection ===")
    try {
      await transporter.verify()
      console.log("✅ SMTP connection successful!")
    } catch (verifyError: any) {
      console.error("❌ SMTP connection failed:", verifyError)
      console.error("Error details:", {
        code: verifyError.code,
        command: verifyError.command,
        response: verifyError.response,
        responseCode: verifyError.responseCode,
      })

      // Return detailed error for debugging
      return NextResponse.json(
        {
          error: "SMTP connection failed",
          details: verifyError.message,
          code: verifyError.code,
          response: verifyError.response,
        },
        { status: 500 },
      )
    }

    // Simple test email first
    const testEmailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER, // Send to yourself first
      subject: "Test Email from Graha Impex",
      text: `Test email sent at ${new Date().toISOString()}`,
      html: `<p>Test email sent at ${new Date().toISOString()}</p>`,
    }

    console.log("=== Sending Test Email ===")
    try {
      const testResult = await transporter.sendMail(testEmailOptions)
      console.log("✅ Test email sent successfully:", testResult.messageId)
    } catch (testError: any) {
      console.error("❌ Test email failed:", testError)
      return NextResponse.json(
        {
          error: "Test email failed",
          details: testError.message,
          code: testError.code,
        },
        { status: 500 },
      )
    }

    // If test email works, send the actual emails
    console.log("=== Sending Actual Emails ===")

    // Email to company (notification)
    const companyEmailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL || "info@grahaimpex.com",
      replyTo: email,
      subject: `New Export Inquiry from ${first_name} ${last_name}`,
      text: `
        New Export Inquiry Received
        
        Name: ${first_name} ${last_name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        
        Message:
        ${message}
        
        Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">New Export Inquiry from ${first_name} ${last_name}</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Customer Information:</h3>
            <p><strong>Name:</strong> ${first_name} ${last_name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>

          <div style="background: white; padding: 20px; border-left: 4px solid #667eea;">
            <h3>Export Inquiry Details:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    }

    // Confirmation email to customer
    const customerEmailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "Export Inquiry Received - Graha Impex",
      text: `
        Dear ${first_name} ${last_name},

        Thank you for your interest in Graha Impex! We have received your export inquiry and our team will get back to you within 24 hours.

        Your inquiry details:
        - Name: ${first_name} ${last_name}
        - Email: ${email}
        ${phone ? `- Phone: ${phone}` : ""}
        - Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}

        For immediate assistance, please contact us:
        Phone: +91 8766556928 or +91 7385143290
        Email: info@grahaimpex.com

        Best regards,
        Graha Impex Export Team
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
            <h1>Thank You!</h1>
            <p>Your Export Inquiry Has Been Received</p>
          </div>
          
          <div style="padding: 20px;">
            <p>Dear <strong>${first_name} ${last_name}</strong>,</p>
            
            <p>Thank you for your interest in <strong>Graha Impex</strong>! We have received your export inquiry and our team will get back to you within 24 hours.</p>

            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3>Your Inquiry Summary:</h3>
              <p><strong>Name:</strong> ${first_name} ${last_name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
              <p><strong>Submitted:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            </div>

            <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4>What Happens Next?</h4>
              <ul>
                <li>Our export team will review your requirements</li>
                <li>You'll receive detailed product information within 24 hours</li>
                <li>We'll schedule a call to discuss your specific needs</li>
              </ul>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4>Need Immediate Assistance?</h4>
              <p>
                <strong>Phone:</strong> +91 8766556928 or +91 7385143290<br>
                <strong>Email:</strong> info@grahaimpex.com
              </p>
            </div>

            <p>Best regards,<br><strong>Graha Impex Export Team</strong></p>
          </div>
        </div>
      `,
    }

    console.log("Sending company notification email...")
    const companyResult = await transporter.sendMail(companyEmailOptions)
    console.log("✅ Company email sent:", companyResult.messageId)

    console.log("Sending customer confirmation email...")
    const customerResult = await transporter.sendMail(customerEmailOptions)
    console.log("✅ Customer email sent:", customerResult.messageId)

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      companyEmailId: companyResult.messageId,
      customerEmailId: customerResult.messageId,
    })
  } catch (error: any) {
    console.error("=== EMAIL SENDING ERROR ===")
    console.error("Error message:", error.message)
    console.error("Error code:", error.code)
    console.error("Error command:", error.command)
    console.error("Error response:", error.response)
    console.error("Error responseCode:", error.responseCode)
    console.error("Full error:", error)

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message,
        code: error.code || "UNKNOWN",
        command: error.command,
        response: error.response,
        responseCode: error.responseCode,
      },
      { status: 500 },
    )
  }
}
