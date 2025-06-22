"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const [messageType, setMessageType] = useState<"success" | "error">("success")

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

    // Prepare data for Supabase insertion
    const contactData = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: (formData.get("phone") as string) || null, // Handle empty phone as null
      message: formData.get("message") as string,
    }

    try {
      // Insert data into Supabase
      const { data, error } = await supabase.from("contact_submissions").insert([contactData]).select()

      if (error) {
        console.error("Supabase error:", error)
        throw error
      }

      // Success
      setMessageType("success")
      setSubmitMessage(
        "Thank you for your export inquiry! We'll get back to you within 24 hours with detailed information.",
      )

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    } catch (error: any) {
      console.error("Error submitting form:", error)
      setMessageType("error")

      // Provide user-friendly error messages
      if (error.message?.includes("duplicate key")) {
        setSubmitMessage(
          "It looks like you've already submitted an inquiry with this email. We'll get back to you soon!",
        )
      } else if (error.message?.includes("invalid input")) {
        setSubmitMessage("Please check your information and try again.")
      } else {
        setSubmitMessage("Sorry, there was an error sending your inquiry. Please try again or contact us directly.")
      }
    } finally {
      setIsSubmitting(false)

      // Clear message after 7 seconds
      setTimeout(() => {
        setSubmitMessage("")
      }, 7000)
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

                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            placeholder="Enter your first name"
                            disabled={isSubmitting}
                            className="transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            placeholder="Enter your last name"
                            disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
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
                          disabled={isSubmitting}
                          className="transition-all duration-200"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Export Inquiry...
                          </div>
                        ) : (
                          "Send Export Inquiry"
                        )}
                      </Button>

                      {/* Success/Error Message */}
                      {submitMessage && (
                        <div
                          className={`mt-4 p-4 rounded-lg border transition-all duration-300 ${
                            messageType === "success"
                              ? "bg-green-50 border-green-200 text-green-800"
                              : "bg-red-50 border-red-200 text-red-800"
                          }`}
                        >
                          <p className="text-sm font-medium">{submitMessage}</p>
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
                Visit our head office in Maharashtra, India or any of our branch locations for direct business
                discussions
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
                <p className="text-gray-400 text-sm">Nagpur, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Branch Offices */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Export Office Locations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We have offices across major cities in India to serve international buyers better
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  city: "Mumbai",
                  address: "Business District, Mumbai 400001",
                  phone: "+91 8766556928",
                  description: "Main Export Hub",
                },
                {
                  city: "Pune",
                  address: "Corporate Plaza, Pune 411001",
                  phone: "+91 7385143290",
                  description: "Regional Office",
                },
                {
                  city: "Nashik",
                  address: "Industrial Area, Nashik 422001",
                  phone: "+91 8766556928",
                  description: "Processing Center",
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
