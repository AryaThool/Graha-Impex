import type { Metadata } from "next"
import { Target, Users, Award, Globe, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// SEO Metadata for About Page
export const metadata: Metadata = {
  title: "About Graha Impex - Leading Export Company from India | Our Story & Mission",
  description:
    "Learn about Graha Impex, a leading export company from India founded by Ms. Aachal Patil. Our vision is to empower Indian farmers and connect local producers to international markets through fair trade and quality exports.",
  keywords: [
    "about Graha Impex",
    "export company India story",
    "Ms. Aachal Patil founder",
    "Indian export company history",
    "agricultural export mission",
    "fair trade India",
    "export company vision",
    "Indian farmers empowerment",
    "international trade India",
    "export business story",
  ],
  openGraph: {
    title: "About Graha Impex - Leading Export Company from India",
    description:
      "Learn about our mission to empower Indian farmers and connect local producers to international markets through fair trade and quality exports.",
  },
  alternates: {
    canonical: "https://grahaimpex.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-blue-400">Graha Impex</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Graha Impex – Your Reliable Global Sourcing Partner
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving economic empowerment through sustainable trade partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "To become a globally respected name in Indian exports, recognized for our commitment to buyer satisfaction, product integrity, and ethical trade — while uplifting Indian farmers and creating lasting impact in global markets."
              </blockquote>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">🌐 Global Reach, Local Roots – Expanding our international presence while staying rooted in supporting Indian agriculture and rural communities.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">📦 Transparent & Dependable Trade – Leading with clarity, consistency, and trust to make sourcing from India simple and stress-free.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">💼 Long-Term Impact – Building meaningful partnerships that go beyond business — strengthening global buyer confidence and India’s export economy.</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                "At Graha Impex, our mission is to be the bridge between global buyers and India’s finest producers — delivering high-quality products with professionalism, transparency, and care. We are committed to creating value for our clients while supporting Indian farmers and contributing to the growth of the national economy."
              </blockquote>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">🤝 Client-Centric Partnerships – Offering responsive service, tailored sourcing solutions, and reliable trade support to meet unique buyer needs.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-gray-600">🌾 Empowering Indian Producers – Sourcing directly from trusted farmers and manufacturers, ensuring fair value and promoting sustainable livelihoods.</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">📈 Driving Economic Growth – Enabling smoother international trade while contributing to India's export ecosystem and rural development.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Farmers Supported</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-green-100">Export Destinations</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-purple-100">{"States in India"}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Quality Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Graha Impex – Your Reliable Global Sourcing Partner</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Graha Impex, we are a professionally managed export company dedicated to delivering premium-grade Indian agricultural products and essential commodities to buyers around the world. Backed by decades of industry expertise through our strategic partner network, we ensure every shipment meets the highest standards in quality, packaging, pricing, and timely delivery.
                </p>
                <p>
                 Though established in 2024, our leadership brings years of combined experience in procurement, trade strategy, and international business, allowing us to operate with the agility of a startup and the dependability of a seasoned enterprise.
                </p>
                <p>
                 Strong Sourcing, Seamless Supply
                 We source our products from reputed farmers, manufacturers, millers, processors, and verified suppliers across India. With multiple trusted sourcing partners, volume is never a concern — whether you're seeking small trial orders or full container loads.

                </p>
                <p>
                  Pan-India Supplier Network
                  Over time, we have built a robust sourcing network not only across Maharashtra and Gujarat but also in several other key agricultural states. This allows us to offer highly competitive pricing and access to a diverse product range with dependable availability throughout the year.
                </p>
                <p>
                 Logistics You Can Trust
With a well-managed supply chain and logistics support, we make international sourcing stress-free and efficient. From product selection to doorstep delivery, our team handles it all — so you can focus on growing your business while we manage the rest.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <Image
                  src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
                  alt="Graha Impex Company Story"
                  width={500}
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{"Buyer-Centric Approach"} </h3>
              <p className="text-gray-600">We put our buyers first — always. Every product, service, and decision is driven by the goal of creating lasting value and a smooth experience for our clients.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationship-Driven Trade</h3>
              <p className="text-gray-600"> We don’t just aim for transactions — we aim for trust. We build long-term partnerships through consistent support, mutual respect, and dependable service.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{" Integrity & Transparency"}</h3>
              <p className="text-gray-600">We believe in honest communication and ethical business practices. What we promise is what we deliver — with no hidden terms or compromises on quality.</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{"Commitment to Quality"}</h3>
              <p className="text-gray-600"> We uphold strict standards for product quality, packaging, and documentation. Every order reflects our promise of consistency, safety, and export readiness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us in our mission to create sustainable trade relationships that benefit everyone in the supply chain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Start Partnership</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
