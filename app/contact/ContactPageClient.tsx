"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { supabase } from "@/lib/supabase"

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_bc2ugbm"
const EMAILJS_TEMPLATE_ID = "template_wpj2r8w"
const EMAILJS_PUBLIC_KEY = "jvlfQ5l3d51gW44Mo"

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error">("success")
  const [emailJSLoaded, setEmailJSLoaded] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  // Load EmailJS script
  useEffect(() => {
    const loadEmailJS = async () => {
      try {
        // Check if EmailJS is already loaded
        if (typeof window !== "undefined" && (window as any).emailjs) {
          console.log("EmailJS already loaded")
          setEmailJSLoaded(true)
          return
        }

        // Load EmailJS script
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        script.async = true

        script.onload = () => {
          console.log("EmailJS script loaded successfully")
          // Initialize EmailJS
          if ((window as any).emailjs) {
            ;(window as any).emailjs.init(EMAILJS_PUBLIC_KEY)
            console.log("EmailJS initialized with public key:", EMAILJS_PUBLIC_KEY)
            setEmailJSLoaded(true)
          }
        }

        script.onerror = () => {
          console.error("Failed to load EmailJS script")
          setEmailJSLoaded(false)
        }

        document.head.appendChild(script)
      } catch (error) {
        console.error("Error loading EmailJS:", error)
        setEmailJSLoaded(false)
      }
    }

    loadEmailJS()
  }, [])

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: ["Mihan", "Nagpur, Maharashtra 400001", "India"],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+91 8766556928", "+91 7385143290"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: ["info@grahaimpex.com", "aachal@grahaimpex.com", "karan@grahaimpex.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(e.target as HTMLFormElement)

    // Prepare data for both Supabase and EmailJS
    const contactData = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      message: formData.get("message") as string,
    }

    console.log("Form data being processed:", contactData)

    try {
      // 1. Save to Supabase database first
      console.log("Saving to Supabase...")
      const { data, error: supabaseError } = await supabase.from("contact_submissions").insert([contactData]).select()

      if (supabaseError) {
        console.error("Supabase error:", supabaseError)
        throw new Error("Database save failed")
      }
      console.log("Supabase save successful:", data)

      // 2. Send email using EmailJS
      if (!emailJSLoaded) {
        throw new Error("EmailJS not loaded yet. Please try again in a moment.")
      }

      if (!(window as any).emailjs) {
        throw new Error("EmailJS not available. Please refresh the page and try again.")
      }

      console.log("Sending email via EmailJS...")
      console.log("Service ID:", EMAILJS_SERVICE_ID)
      console.log("Template ID:", EMAILJS_TEMPLATE_ID)
      console.log("Template variables:", contactData)

      // Send email using EmailJS
      const emailResult = await (window as any).emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        first_name: contactData.first_name,
        last_name: contactData.last_name,
        email: contactData.email,
        phone: contactData.phone || "Not provided",
        message: contactData.message,
        to_email: "info@grahaimpex.com", // Add this if your template needs it
        reply_to: contactData.email,
      })

      console.log("EmailJS response:", emailResult)

      if (emailResult.status === 200) {
        console.log("Email sent successfully via EmailJS")

        // Success - both database and email sent
        setMessageType("success")
        setSubmitMessage(
          "🎉 Thank you for your export inquiry! We've received your message and sent you a confirmation email. Our team will get back to you within 24 hours with detailed information and competitive pricing.",
        )

        // Reset form
        if (formRef.current) {
          formRef.current.reset()
        }
      } else {
        throw new Error(`EmailJS failed with status: ${emailResult.status}`)
      }
    } catch (error: any) {
      console.error("Error submitting form:", error)
      setMessageType("error")

      // Handle different types of errors with more specific messages
      if (error.message?.includes("EmailJS")) {
        setSubmitMessage(
          `📧 Email service error: ${error.message}. Your inquiry was saved to our database. We'll contact you directly at the email you provided.`,
        )
      } else if (error.message?.includes("Database save failed")) {
        setSubmitMessage(
          "❌ Sorry, there was an error saving your inquiry. Please try again or contact us directly at info@grahaimpex.com or +91-8766556928.",
        )
      } else if (error.message?.includes("duplicate key")) {
        setSubmitMessage(
          "📧 It looks like you've already submitted an inquiry with this email. We'll get back to you soon! If urgent, please call us at +91-8766556928.",
        )
      } else if (error.message?.includes("invalid input")) {
        setSubmitMessage(
          "⚠️ Please check your information and try again. Make sure all required fields are filled correctly.",
        )
      } else {
        setSubmitMessage(
          `❌ Error: ${error.message}. Please try again or contact us directly at info@grahaimpex.com or +91-8766556928.`,
        )
      }
    } finally {
      setIsSubmitting(false)

      // Clear message after 15 seconds
      setTimeout(() => {
        setSubmitMessage("")
      }, 15000)
    }
  }

  return (
    <>
      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Graha Impex",
            description:
              "Contact Graha Impex for export inquiries, business partnerships, and premium product sourcing from India.",
            url: "https://grahaimpex.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "Graha Impex",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8766556928",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  email: "info@grahaimpex.com",
                  contactType: "sales",
                  availableLanguage: "English",
                  areaServed: "Worldwide",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mihan",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                postalCode: "400001",
                addressCountry: "IN",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://grahaimpex.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact Us",
                  item: "https://grahaimpex.com/contact",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Graha Impex</h1>
              <p className="text-xl md:text-2xl mb-8">
                Get in touch for export inquiries, business partnerships, and premium product sourcing from India
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us an Export Inquiry</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below for export inquiries, bulk orders, or business partnerships. We'll get back to
                  you with detailed information and competitive pricing.
                </p>

                {/* EmailJS Loading Status */}
                {!emailJSLoaded && (
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span className="text-blue-800 text-sm">Loading email service...</span>
                    </div>
                  </div>
                )}

                <Card>
                  <CardContent className="pt-6">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <Input
                            id="first_name"
                            name="first_name"
                            required
                            placeholder="Enter your first name"
                            disabled={isSubmitting || !emailJSLoaded}
                            className="transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="last_name"
                            name="last_name"
                            required
                            placeholder="Enter your last name"
                            disabled={isSubmitting || !emailJSLoaded}
                            className="transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Business Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="Enter your business email address"
                          disabled={isSubmitting || !emailJSLoaded}
                          className="transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number (Optional)
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number with country code"
                          disabled={isSubmitting || !emailJSLoaded}
                          className="transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Export Inquiry Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Please provide details about your export requirements: product types, quantities, destination country, timeline, and any specific quality requirements..."
                          disabled={isSubmitting || !emailJSLoaded}
                          className="transition-all duration-200"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 h-12"
                        disabled={isSubmitting || !emailJSLoaded}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Export Inquiry...
                          </div>
                        ) : !emailJSLoaded ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Loading Email Service...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="h-5 w-5 mr-2" />
                            Send Export Inquiry via EmailJS
                          </div>
                        )}
                      </Button>

                      {/* Enhanced Success/Error Message */}
                      {submitMessage && (
                        <div
                          className={`mt-6 p-6 rounded-xl border-2 transition-all duration-300 ${
                            messageType === "success"
                              ? "bg-green-50 border-green-200 text-green-800"
                              : "bg-red-50 border-red-200 text-red-800"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {messageType === "success" ? (
                              <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                            ) : (
                              <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                            )}
                            <div>
                              <p className="font-medium text-base leading-relaxed">{submitMessage}</p>
                              {messageType === "success" && (
                                <div className="mt-3 text-sm text-green-700">
                                  <p>✅ Saved to our database</p>
                                  <p>📧 Email sent via EmailJS</p>
                                  <p>⏰ Response within 24 hours</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Additional Info */}
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-start gap-3">
                          <Mail className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <p className="font-medium mb-1">What happens next?</p>
                            <ul className="space-y-1 text-blue-700">
                              <li>• Your inquiry is sent directly to our export team</li>
                              <li>• We'll review your requirements within 2 hours</li>
                              <li>• You'll receive detailed pricing and product information</li>
                              <li>• Schedule a call to discuss your specific needs</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* EmailJS Status */}
                      <div className="mt-4 text-center">
                        <div
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${
                            emailJSLoaded
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-yellow-100 text-yellow-800 border border-yellow-200"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${emailJSLoaded ? "bg-green-500" : "bg-yellow-500"}`}
                          ></div>
                          <span>{emailJSLoaded ? "Email service ready" : "Loading email service..."}</span>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of the following channels for immediate assistance with your export
                  requirements.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">{info.icon}</div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Our Export Office</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit our head office in MIHAN, Nagpur, Maharashtra, India for direct business discussions
              </p>
            </div>

            {/* Embedded Google Maps */}
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59579.652564883545!2d79.0180836!3d21.0435553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4be284cdf7abd%3A0x60d4ced04aace457!2sMIHAN%2C%20Nagpur%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1751296726355!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Graha Impex Office Location - MIHAN, Nagpur, Maharashtra"
                  />
                </div>

                {/* Map Info */}
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">MIHAN, Nagpur, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Offices */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Office Locations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We have offices across major cities in India to serve international buyers better
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  city: "Nagpur",
                  address: "MIHAN, Nagpur, Maharashtra 400001",
                  phone: "+91 8766556928",
                  description: "Main Office",
                },
              ].map((branch, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{branch.city} Office</h3>
                    <p className="text-blue-600 text-sm mb-4">{branch.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{branch.address}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{branch.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
