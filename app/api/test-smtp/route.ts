import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function GET(request: NextRequest) {
  try {
    console.log("=== SMTP Test Route ===")
    console.log("Environment variables:")
    console.log("SMTP_HOST:", process.env.SMTP_HOST)
    console.log("SMTP_PORT:", process.env.SMTP_PORT)
    console.log("SMTP_SECURE:", process.env.SMTP_SECURE)
    console.log("SMTP_USER:", process.env.SMTP_USER)
    console.log("SMTP_PASSWORD:", process.env.SMTP_PASSWORD ? "***SET***" : "***NOT SET***")

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      return NextResponse.json(
        {
          error: "Missing SMTP configuration",
          missing: {
            host: !process.env.SMTP_HOST,
            user: !process.env.SMTP_USER,
            password: !process.env.SMTP_PASSWORD,
          },
        },
        { status: 400 },
      )
    }

    // Try different configurations for Hostinger
    const configs = [
      {
        name: "Hostinger SSL (465)",
        config: {
          host: process.env.SMTP_HOST,
          port: 465,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
      },
      {
        name: "Hostinger TLS (587)",
        config: {
          host: process.env.SMTP_HOST,
          port: 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
          tls: {
            rejectUnauthorized: false,
          },
        },
      },
      {
        name: "Hostinger Alternative SSL",
        config: {
          host: process.env.SMTP_HOST,
          port: 465,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
          tls: {
            rejectUnauthorized: false,
            ciphers: "SSLv3",
          },
        },
      },
    ]

    const results = []

    for (const { name, config } of configs) {
      console.log(`\n=== Testing ${name} ===`)
      try {
        const transporter = nodemailer.createTransporter({
          ...config,
          connectionTimeout: 10000,
          greetingTimeout: 5000,
          socketTimeout: 10000,
        })

        await transporter.verify()
        console.log(`✅ ${name}: Connection successful`)
        results.push({ name, status: "success", error: null })
      } catch (error: any) {
        console.log(`❌ ${name}: ${error.message}`)
        results.push({
          name,
          status: "failed",
          error: error.message,
          code: error.code,
          response: error.response,
        })
      }
    }

    return NextResponse.json({
      message: "SMTP configuration test completed",
      results,
      environment: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE,
        user: process.env.SMTP_USER,
      },
    })
  } catch (error: any) {
    console.error("Test route error:", error)
    return NextResponse.json(
      {
        error: "Test failed",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
