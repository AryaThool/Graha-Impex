"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

const founders = [
  {
    name: "Ms. Achal Patil",
    title: "Founder & Head of Global Operations",
    image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images/person.jpg",
    description:
      "Graha Impex was founded with a simple belief—that global trade works best when sourcing is honest, communication is clear, and execution is reliable.As Founder & Head of Global Operations, Ms. Aachal Patil leads international sales, buyer communication, and business development. She works closely with global clients to understand their market needs and ensures that every sourcing decision aligns with quality, pricing, and long-term partnership goals.",
    expertise: ["Global Sales & Buyer Relations", "Market Expansion", "Business Strategy"],
    link: "/about",
  },
  {
    name: "Mr. Karan Khurana",
    title: "COO & Head of Procurement and Logistics",
    image: "/professional-man-business-portrait.jpg",
    description:
      "Mr. Karan Khurana oversees procurement, supplier coordination, and logistics operations at Graha Impex. Coming from a family with generations of experience in domestic trade and sourcing, he brings strong on-ground knowledge of supplier networks and market practices.He manages vendor relationships, quality coordination, documentation, and shipment planning—ensuring smooth backend operations and reliable deliveries for international buyers",
    expertise: ["Procurement & Supplier Management", "Logistics & Documentation", "Supply Chain Execution"],
    link: "/about",
  },
]

export default function AboutFounder() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <Star className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Meet Our Founders</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Leadership Driving
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Global Excellence
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced leaders dedicated to transparency, quality, and long-term partnerships
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="group relative">
                <Card className="overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex-1 mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                      <p className="text-blue-600 font-semibold text-base mb-6">{founder.title}</p>

                      <p className="text-gray-700 leading-relaxed mb-6">{founder.description}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {founder.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href={founder.link} className="w-full">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300 group/btn">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
