"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, Award, Globe, Truck, HeadphonesIcon, Zap, Star } from "lucide-react"

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Pre Shipment Quality Check",
      description: "Lab Tested and Batch verified before Dispatch. ",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Timely Delivery Every Time",
      description: "Strong Supplier base and Shipping partners",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Exports Standards",
      description: "Compliance with FSSAI, APEDA, Spice Board, GST, IEC & MSME registrations.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      borderColor: "border-indigo-200",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Customizable Packaging & Logistics",
      description: "Solutions tailored to buyer specifications",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
  ]

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <Star className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Graha Impex is Your
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Best Choice
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver more than just packages - we deliver trust, reliability, and peace of mind through our
            comprehensive logistics solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`
                relative h-64 transition-all duration-700 transform-style-preserve-3d
                ${hoveredCard === index ? "rotate-y-180" : ""}
              `}
              >
                {/* Front Side */}
                <Card
                  className={`absolute inset-0 backface-hidden h-full bg-white border ${feature.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div
                      className={`p-4 ${feature.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border ${feature.borderColor}`}
                    >
                      <div className={feature.textColor}>{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                    <div className={`w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                  </CardContent>
                </Card>

                {/* Back Side */}
                <Card
                  className={`
                  absolute inset-0 backface-hidden rotate-y-180 h-full border-0 shadow-xl
                  bg-gradient-to-br ${feature.color} text-white
                `}
                >
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-white/20 rounded-2xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  )
}
