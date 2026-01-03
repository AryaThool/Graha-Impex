import type { Metadata } from "next"
import { Target, Users, Award, Globe, Heart, Lightbulb, CheckCircle, Package, TrendingUp, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Graha Impex - Trusted Indian Export Partner | Our Story & Mission",
  description:
    "Learn about Graha Impex, a merchant export company connecting global buyers with high-quality Indian products. Reliable sourcing, quality control, and competitive pricing.",
  keywords: [
    "about Graha Impex",
    "export company India",
    "merchant export",
    "Indian export partner",
    "agricultural exports",
    "sourcing from India",
    "export services",
    "global trade India",
    "quality exports",
    "reliable exporter",
  ],
  openGraph: {
    title: "About Graha Impex - Trusted Indian Export Partner",
    description:
      "Merchant export company delivering high-quality Indian products to global markets. Your trusted partner for reliable sourcing and export solutions.",
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
              Your Trusted Export Partner from India
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              India-based merchant export company committed to delivering high-quality products to international markets
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Graha Impex is an India-based merchant export company engaged in sourcing and supplying high-quality
                Indian products to international markets. We work closely with farmers, APMC mandis, processors, and
                manufacturers across multiple states of India to ensure consistent quality, traceability, and compliance
                with global standards.
              </p>
              <p>
                With strong roots in domestic trade and a well-established sourcing network—particularly across Gujarat
                and key agricultural hubs—we procure products directly from their origin regions, ensuring authenticity,
                freshness, and price efficiency. Our relationships span generations of domestic trade experience,
                allowing us to understand product behavior, seasonality, and quality benchmarks at a granular level.
              </p>
              <p>
                As an export-focused organization, we combine deep market understanding, reliable supplier partnerships,
                and structured export processes to deliver dependable, transparent, and long-term value to our
                international buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What GRAHA Stands For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Graha Impex Stands For</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our name reflects our core values and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 text-center mb-2">G</h3>
              <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">Global Reach</h4>
              <p className="text-gray-600 text-center text-sm">
                Serving buyers across international markets with professionalism and consistency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 text-center mb-2">R</h3>
              <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">Reliability</h4>
              <p className="text-gray-600 text-center text-sm">
                Every commitment we make is backed by action, transparency, and accountability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-600 text-center mb-2">A</h3>
              <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">Authentic Sourcing</h4>
              <p className="text-gray-600 text-center text-sm">We work only with trusted and verified suppliers.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600 text-center mb-2">H</h3>
              <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">High Quality</h4>
              <p className="text-gray-600 text-center text-sm">
                Quality is non-negotiable — from sourcing to shipment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-pink-600 text-center mb-2">A</h3>
              <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">Adaptability</h4>
              <p className="text-gray-600 text-center text-sm">
                We customize products, packaging, and processes based on buyer needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building trust through quality, transparency, and reliable service
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a globally trusted export house representing the best of India by delivering consistent
                quality, ethical sourcing, and dependable service to buyers worldwide.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Bridge global demand with India's finest products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Create value through reliable sourcing and competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Maintain transparency, integrity, and professionalism</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Build long-term relationships based on trust and performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">A structured export process designed for consistency and reliability
</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Requirement Understanding",
                description:
                  "We study buyer specifications, destination-country regulations, packaging needs, and quality parameters before confirming any order.",
              },
              {
                step: "02",
                title: "Origin-Based Sourcing",
                description:
                  "Products are sourced directly from verified farmers, APMC mandis, processors, and manufacturers located in the original production regions.",
              },
              {
                step: "03",
                title: "Quality Verification & Compliance",
                description:
                  "Each lot is checked for quality, specifications, and compliance with buyer and international standards.",
              },
              {
                step: "04",
                title: "Packaging & Export Documentation",
                description:
                  "Products are packed as per export norms and buyer requirements, with accurate documentation for smooth customs clearance.",
              },
              {
                step: "05",
                title: "Shipment Coordination & Follow-Up",
                description:
                  "We manage logistics coordination and maintain clear communication until goods are dispatched and delivered.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Successful exports are built on trust, communication, and execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Transparency First", description: "Clear communication on quality, pricing, timelines, and limitations—no overpromising." },
              {
                icon: CheckCircle,
                title: "Ethical & Responsible Sourcing",
                description: "Long-standing relationships with suppliers built on trust, fairness, and accountability.",
              },
              { icon: Award, title: "Consistency Over Short-Term Gains", description: "Focused on stable quality and long-term partnerships rather than one-time transactions." },
              { icon: Package, title: "Market & Buyer Awareness", description: "Understanding global market expectations and aligning sourcing accordingly." },
              { icon: TrendingUp, title: "Relationship-Driven Trade", description: "We believe successful exports are built through reliability, performance, and repeat business." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup with Strong Foundation */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Startup with a Strong Foundation</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Established in 2024, Graha Impex is built on industry knowledge, strong supplier relationships, and a
            long-term vision for global growth. While we are a young company, our processes, ethics, and commitment
            match global expectations.
          </p>
          <p className="text-xl font-semibold text-blue-600">
            We believe growth comes from delivering value — shipment after shipment.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build a Long-Term Partnership</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you are an importer, distributor, or retailer, Graha Impex is ready to support your sourcing needs
            from India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Link href="/contact">Connect with Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
            >
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
