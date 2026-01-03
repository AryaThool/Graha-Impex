"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"
import { useState, useRef } from "react"
import { submitContactForm } from "@/lib/supabase"

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error">("success")
  const formRef = useRef<HTMLFormElement>(null)

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: [
        "Second Floor, Plot no. 48, Karve Nagar, Somalwada, Wardha Road",
        "Nagpur, Maharashtra 440025",
        "India",
      ],
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+91 8766556928", "+91 8208903191"],
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: ["info@grahaimpex.com", "aachal@grahaimpex.com", "karan@grahaimpex.com"],
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9:30 AM - 6:30 PM", "Saturday: 9:30 AM - 6:30 PM", "Sunday: Closed"],
    },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    const formData = new FormData(e.target as HTMLFormElement)
    const contactData = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null,
      message: formData.get("message") as string,
    }

    try {
      const { error } = await submitContactForm(contactData)

      if (error) {
        throw new Error((error as any).message || "An unknown error occurred.")
      }

      setMessageType("success")
      setSubmitMessage(
        "🎉 Thank you for your export inquiry! We've received your message. Our team will get back to you within 24 hours.",
      )
      formRef.current?.reset()
    } catch (error: any) {
      console.error("Error submitting form:", error)
      setMessageType("error")
      setSubmitMessage(`❌ Error: ${error.message}. Please try again or contact us directly.`)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitMessage(""), 15000)
    }
  }

  return (
    <>
      {/* Schema and Hero Section ... */}
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
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
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Enter your phone number with country code"
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 h-12"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Inquiry...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="h-5 w-5 mr-2" />
                            Send Export Inquiry
                          </div>
                        )}
                      </Button>

                      {submitMessage && (
                        <div
                          className={`mt-6 p-4 rounded-lg border ${
                            messageType === "success"
                              ? "bg-green-50 border-green-200 text-green-800"
                              : "bg-red-50 border-red-200 text-red-800"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {messageType === "success" ? (
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                            )}
                            <p className="font-medium">{submitMessage}</p>
                          </div>
                        </div>
                      )}
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

                  <div className="w-full rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4426.828261505395!2d79.06504373479716!3d21.0924629462707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzMxLjYiTiA3OcKwMDMnNTkuMSJF!5e0!3m2!1sen!2sin!4v1765276788532!5m2!1sen!2sin"
                      width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Map and Branch sections ... */}
      </div>
    </>
  )
}
