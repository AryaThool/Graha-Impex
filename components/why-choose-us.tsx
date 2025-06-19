"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, Award, Globe, Truck, HeadphonesIcon, Zap, Star } from "lucide-react"

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and support for all your logistics needs",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-400",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Handling",
      description: "Advanced security measures and insurance coverage for complete peace of mind",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/20",
      textColor: "text-green-400",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to providing exceptional service quality",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/20",
      textColor: "text-purple-400",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Leader",
      description: "Award-winning logistics company with proven track record of excellence",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/20",
      textColor: "text-yellow-400",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Network",
      description: "Worldwide coverage with local expertise in over 50 countries",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/20",
      textColor: "text-indigo-400",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Express delivery options with same-day and next-day service availability",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/20",
      textColor: "text-red-400",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8" />,
      title: "Customer First",
      description: "Customer-centric approach with personalized solutions for every need",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-500/20",
      textColor: "text-teal-400",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Technology Driven",
      description: "Cutting-edge technology for real-time tracking and seamless operations",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/20",
      textColor: "text-pink-400",
    },
  ]

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
            <span className="text-sm font-medium text-white">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Graha Impex is Your
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Best Choice
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
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
                <Card className="absolute inset-0 backface-hidden h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div
                      className={`p-4 ${feature.bgColor} backdrop-blur-sm rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className={feature.textColor}>{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                  </CardContent>
                </Card>

                {/* Back Side */}
                <Card
                  className={`
                  absolute inset-0 backface-hidden rotate-y-180 h-full border-0 shadow-xl
                  bg-gradient-to-br ${feature.color} text-white backdrop-blur-md
                `}
                >
                  <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-sm leading-relaxed opacity-90">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-blue-200 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-2 border-white/30"
                ></div>
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by 50,000+ customers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}
