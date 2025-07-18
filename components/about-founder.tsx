"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutFounder() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <Star className="w-5 h-5 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Meet Our Founder</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leadership That
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Drives Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visionary leadership with decades of experience in transforming global logistics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="overflow-hidden bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//person.jpg"
                      alt="Ms. Achal Patil - Founder & CEO"
                      width={200}
                      height={200}
                      className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-200 shadow-xl object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ms. Achal Patil</h3>
                      <p className="text-blue-600 font-medium text-lg">Founder & CEO</p>
                    </div>
                    <blockquote className="text-lg leading-relaxed text-gray-700 italic">
                      {
                        "We started this company with one mission: to make global sourcing simple, honest, and reliable. For us, it's not just about exports — it's about helping Indian suppliers grow and giving buyers worldwide a partner they can count on. Our journey is built on trust, innovation, and unwavering commitment to excellence."
                      }
                    </blockquote>
                    <Link href="/about">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                        Learn More About Us
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full opacity-50"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
