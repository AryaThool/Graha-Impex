import type { Metadata } from "next"
import { Target, Eye, Users, Award, Globe, Shield, Heart, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "About Graha Impex - Leading Export Company from India | Our Story & Mission",
  description:
    "Learn about Graha Impex's journey as India's trusted export company. Discover our vision to empower farmers, mission for fair trade, and commitment to connecting Indian producers with global markets.",
  keywords: [
    "Graha Impex about",
    "export company story",
    "Indian export company history",
    "fair trade mission",
    "farmer empowerment",
    "agricultural exports India",
    "company vision mission",
    "export business values",
  ],
  openGraph: {
    title: "About Graha Impex - Our Story, Vision & Mission",
    description:
      "Discover how Graha Impex empowers Indian farmers and connects local producers to international markets through fair trade and quality exports.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=About+Graha+Impex",
        width: 1200,
        height: 630,
        alt: "About Graha Impex - Export Company India",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Graha Impex
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Bridging continents through quality exports and empowering Indian producers to reach global markets
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Vision & Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving economic empowerment and sustainable growth through ethical trade practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Vision</h3>
                </div>

                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic border-l-4 border-blue-500 pl-6">
                  "To be a catalyst for economic empowerment in India by connecting local producers to international
                  markets."
                </blockquote>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Empowering local communities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Creating global opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-600">Building lasting partnerships</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-green-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">Our Mission</h3>
                </div>

                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic border-l-4 border-green-500 pl-6">
                  "Empower Indian farmers and manufacturers by providing fair trade opportunities and creating
                  sustainable employment."
                </blockquote>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Fair trade practices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">Sustainable employment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span className="text-gray-600">Supporting farmers directly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, number: "1000+", label: "Farmers Supported", color: "from-blue-500 to-cyan-500" },
              { icon: Globe, number: "25+", label: "Export Destinations", color: "from-green-500 to-emerald-500" },
              { icon: TrendingUp, number: "15+", label: "Years Experience", color: "from-purple-500 to-indigo-500" },
              { icon: Award, number: "100%", label: "Quality Commitment", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`p-4 bg-gradient-to-br ${stat.color} rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-lg text-gray-600">A journey of connecting Indian excellence with global markets</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Founded with a vision to bridge the gap between Indian producers and international markets, Graha
                  Impex has grown from a small trading company to a trusted global partner in agricultural exports. Our
                  journey began with a simple belief: that quality Indian products deserve to reach every corner of the
                  world.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Over the years, we have built strong relationships with farmers, manufacturers, and international
                  buyers, creating a network that ensures fair prices for producers and premium quality for consumers.
                  Our commitment to ethical trading practices has made us a preferred partner for businesses worldwide.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Today, we continue to expand our reach while staying true to our core values of quality, integrity,
                  and sustainable growth. Every shipment we send carries with it the hopes and hard work of Indian
                  farmers and the promise of excellence to our global customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous quality control at every step of the supply chain",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Heart,
                title: "Fair Trade",
                description: "Ensuring fair prices and ethical treatment for all stakeholders",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Connecting markets across continents with reliable service",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Striving for perfection in every aspect of our operations",
                color: "from-orange-500 to-red-500",
              },
            ].map((value, index) => (
              <div key={index} className="group text-center">
                <div
                  className={`p-6 bg-gradient-to-br ${value.color} rounded-3xl w-fit mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl`}
                >
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Graha Impex for their import and export needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-cyan-800 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Get Started Today
              <TrendingUp className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-100 font-bold rounded-2xl hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
            >
              View Our Products
              <Globe className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
