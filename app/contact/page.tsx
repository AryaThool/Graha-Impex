"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function ContactPage() {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Head Office",
      details: ["123 Business District", "Mumbai, Maharashtra 400001", "India"],
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitMessage("Message sent successfully! We'll get back to you within 24 hours.")
    setIsSubmitting(false)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()

    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(""), 5000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("contactUs")}</h1>
            <p className="text-xl md:text-2xl mb-8">{t("contactTitle")}</p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("sendMessage")}</h2>
              <p className="text-gray-600 mb-8">{t("contactFormDesc")}</p>

              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          {t("firstName")} *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          placeholder={`Enter your ${t("firstName").toLowerCase()}`}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          {t("lastName")} *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          placeholder={`Enter your ${t("lastName").toLowerCase()}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t("email")} *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={`Enter your ${t("email").toLowerCase()}`}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        {t("phone")}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={`Enter your ${t("phone").toLowerCase()}`}
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        {t("serviceInterest")}
                      </label>
                      <Select name="service">
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="express">{t("expressDelivery")}</SelectItem>
                          <SelectItem value="international">{t("internationalShipping")}</SelectItem>
                          <SelectItem value="freight">{t("freightServices")}</SelectItem>
                          <SelectItem value="ecommerce">{t("ecommerceServices")}</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t("message")} *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? t("sending") : t("sendMessage")}
                    </Button>

                    {submitMessage && (
                      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 text-sm">{submitMessage}</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("getInTouch")}</h2>
              <p className="text-gray-600 mb-8">{t("contactDesc")}</p>

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
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Visit our head office or any of our branch locations</p>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-400 text-sm">Mumbai, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Offices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We have offices across major cities to serve you better</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: "Mumbai", address: "Business District, Mumbai 400001", phone: "+91 8766556928" },
              { city: "Pune", address: "Corporate Plaza, Pune 411001", phone: "+91 7385143290" },
              { city: "Nashik", address: "Industrial Area, Nashik 422001", phone: "+91 8766556928" },
            ].map((branch, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">{branch.city} Office</h3>
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
  )
}
