"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      company: "TechStart Solutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Graha Impex has been our logistics partner for over 3 years. Their reliability and professionalism are unmatched. They've never let us down, even with our most urgent deliveries.",
      location: "New York, USA",
    },
    {
      id: 2,
      name: "Rajesh Patel",
      position: "Operations Manager",
      company: "Global Trade Corp",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "The international shipping services provided by Graha Impex are exceptional. They handle all customs procedures seamlessly, making our global operations much smoother.",
      location: "Mumbai, India",
    },
    {
      id: 3,
      name: "Emily Chen",
      position: "Founder",
      company: "E-Fashion Hub",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "As an e-commerce business, timely delivery is crucial for us. Graha Impex's same-day delivery service has significantly improved our customer satisfaction rates.",
      location: "Singapore",
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      position: "Supply Chain Director",
      company: "Manufacturing Plus",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Their freight services have optimized our supply chain costs by 30%. The team is professional, responsive, and always goes the extra mile to ensure our shipments arrive on time.",
      location: "Mexico City, Mexico",
    },
    {
      id: 5,
      name: "Priya Sharma",
      position: "Business Owner",
      company: "Artisan Crafts",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Graha Impex helped us expand internationally. Their expertise in handling delicate items and providing insurance coverage gave us the confidence to ship our handmade products worldwide.",
      location: "Delhi, India",
    },
    {
      id: 6,
      name: "David Thompson",
      position: "Logistics Manager",
      company: "Pharma Solutions",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Temperature-controlled shipping for our pharmaceutical products requires precision. Graha Impex's specialized services ensure our products maintain their integrity throughout the journey.",
      location: "London, UK",
    },
  ]

  const certifications = [
    {
      name: "GST Registration",
      image: "/images/certifications/gst.jpg",
    },
    {
      name: "FSSAI License",
      image: "/images/certifications/fssai-logo.jpg",
    },
    {
      name: "Import Export Certificate",
      image: "/images/certifications/import-export-certificate.png",
    },
    {
      name: "MSME Udyam Registration",
      image: "/images/certifications/msme-udyam-registration.webp",
    },
    {
      name: "APEDA Registration",
      image: "/images/certifications/apeda-logo.webp",
    },
    {
      name: "ICEGATE Registration",
      image: "/images/certifications/icegate.jpeg",
    },
    {
      name: "Spices Board Registration",
      image: "/images/certifications/spices-board.jpeg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-white">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Quote and Rating */}
                        <div className="lg:col-span-2 space-y-6">
                          <div className="flex items-center gap-2 mb-4">
                            <Quote className="h-8 w-8 text-cyan-400 opacity-50" />
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>

                          <blockquote className="text-xl lg:text-2xl text-white leading-relaxed font-medium">
                            "{testimonial.text}"
                          </blockquote>

                          <div className="flex items-center gap-4">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={60}
                              height={60}
                              className="rounded-full object-cover border-2 border-white/30"
                            />
                            <div>
                              <div className="font-bold text-white text-lg">{testimonial.name}</div>
                              <div className="text-cyan-400 font-medium">{testimonial.position}</div>
                              <div className="text-blue-200 text-sm">{testimonial.company}</div>
                            </div>
                          </div>
                        </div>

                        {/* Company Info & Location */}
                        <div className="text-center lg:text-right space-y-4">
                          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                            <div className="text-2xl font-bold text-white mb-2">{testimonial.company}</div>
                            <div className="text-blue-200 mb-4">{testimonial.location}</div>
                            <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-400/30">
                              ✓ Verified Client
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 z-10"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 z-10"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-cyan-400 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-center text-blue-200 mb-8 font-medium">Certified & Registered With</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={cert.image || "/placeholder.svg?height=80&width=120"}
                      alt={cert.name}
                      width={120}
                      height={80}
                      className="mx-auto h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=80&width=120"
                      }}
                    />
                  </div>
                  <p className="text-xs text-blue-200 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50,000+</div>
            <div className="text-blue-200">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-blue-200">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
            <div className="text-blue-200">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">10+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
