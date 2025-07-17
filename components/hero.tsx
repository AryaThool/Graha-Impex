"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Anchor, Ship, Waves, Award, Globe, Star } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Ocean-themed Background Elements */}
      <div className="absolute inset-0">
        {/* Deep Ocean Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-700/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-60 right-10 w-80 h-80 bg-gradient-to-br from-indigo-600/25 to-blue-800/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-600/20 to-teal-700/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "6s" }}
          ></div>
        </div>

        {/* Ocean Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="oceanWaves" x="0" y="0" width="400" height="80" patternUnits="userSpaceOnUse">
                <path d="M0,40 Q100,20 200,40 T400,40" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" />
                <path d="M0,60 Q100,40 200,60 T400,60" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#oceanWaves)" />
          </svg>
        </div>

        {/* Floating Maritime Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 12}s`,
              }}
            >
              <div className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-float-slow shadow-lg"></div>
            </div>
          ))}
        </div>

        {/* Global Trade Route Visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-full h-full max-w-6xl" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="oceanRoute" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0891b2" stopOpacity="0.8" />
              </linearGradient>
              <filter id="oceanGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d="M 50 200 Q 200 150 400 200 Q 600 250 750 200"
              stroke="url(#oceanRoute)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="12,6"
              className="animate-pulse"
              filter="url(#oceanGlow)"
            />
            {/* Port Indicators */}
            <circle cx="50" cy="200" r="10" fill="#0ea5e9" opacity="0.9" className="animate-pulse">
              <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle
              cx="400"
              cy="200"
              r="8"
              fill="#3b82f6"
              opacity="0.7"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            >
              <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle
              cx="750"
              cy="200"
              r="10"
              fill="#0891b2"
              opacity="0.9"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            >
              <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        {/* Animated Container Ship */}
        <div className="absolute top-[45%] md:top-1/2 transform -translate-y-1/2 animate-enhanced-ship-journey z-20">
          <div className="relative">
            <div className="relative w-32 h-12 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600">
              {/* Ship Hull */}
              <div className="absolute bottom-0 w-full h-6 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-b-2xl border-t-2 border-red-500 shadow-lg">
                <div className="absolute bottom-1 left-3 right-3 h-0.5 bg-red-400 rounded-full opacity-80"></div>
              </div>

              {/* Container Stack */}
              <div className="absolute -top-6 left-2 flex space-x-1">
                {[
                  { color: "blue", shadow: "shadow-blue-500/50" },
                  { color: "cyan", shadow: "shadow-cyan-500/50" },
                  { color: "indigo", shadow: "shadow-indigo-500/50" },
                  { color: "teal", shadow: "shadow-teal-500/50" },
                ].map((container, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 bg-gradient-to-b from-${container.color}-400 to-${container.color}-700 rounded-lg shadow-lg border border-${container.color}-800 ${container.shadow}`}
                  />
                ))}
              </div>

              {/* Ship Bridge */}
              <div className="absolute -top-8 right-2 w-6 h-6 bg-gradient-to-b from-white to-gray-200 rounded-lg shadow-xl border border-gray-300">
                <div className="absolute top-1 left-1 right-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-sm opacity-80"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gradient-to-t from-red-500 to-red-400 rounded-full animate-pulse"></div>
              </div>

              {/* Ship Wake */}
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400/80 via-blue-400/60 to-transparent rounded-full animate-pulse"></div>
                <div
                  className="w-8 h-0.5 bg-gradient-to-r from-blue-400/60 via-indigo-400/40 to-transparent rounded-full mt-1 animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 py-16">
        <div className="flex flex-col justify-center items-center text-center min-h-screen space-y-10 md:space-y-12">
          {/* Maritime Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-700/20 backdrop-blur-xl rounded-full border border-blue-400/30 shadow-2xl">
            <Anchor className="w-5 h-5 mr-3 text-blue-400" />
            <span className="text-sm font-semibold text-blue-100">Global Trade Excellence </span>
            <div className="ml-3 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-cyan-400 fill-current" />
              ))}
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 max-w-6xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-4">GLOBAL</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                TRADE BRIDGE
              </span>
              <span className="block text-white/90 text-2xl md:text-3xl lg:text-4xl font-light mt-6 leading-relaxed">
                Connecting Markets • Delivering Excellence
              </span>
            </h1>

            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed">
                Your trusted partner for seamless import and export solutions
              </p>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                From premium Indian spices to global agricultural products, we navigate international waters to bring
                quality goods to markets worldwide with unmatched reliability and expertise.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl">
            <a
              href="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/sign/pdfs/New%20Company%20Profile.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGUyOWZlNy1iYzBmLTQ5MGYtOGVlNS00ZmE2NDJhZmFiOTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL05ldyBDb21wYW55IFByb2ZpbGUucGRmIiwiaWF0IjoxNzUwNTIxNzQ3LCJleHAiOjE5MDgyMDE3NDd9.lesI-F-sSZJWRgrcBSC8LZ6_4l7X3ZZaDxzuTatpXkg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 px-8 py-4 text-lg font-bold rounded-2xl"
              >
                <Download className="mr-3 h-6 w-6" />
                Company Profile
              </Button>
            </a>

            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-cyan-400/50 text-cyan-100 bg-cyan-400/10 hover:bg-cyan-400/20 hover:border-cyan-400/70 backdrop-blur-xl transition-all duration-500 transform hover:scale-105 px-8 py-4 text-lg font-bold rounded-2xl"
              >
                Request Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-5xl w-full">
            {[
              {
                icon: Ship,
                title: "Import Excellence",
                description: "Sourcing premium products from global markets with precision",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Waves,
                title: "Export Mastery",
                description: "Delivering Indian quality to international destinations",
                color: "from-cyan-500 to-teal-600",
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Established partnerships across continents and cultures",
                color: "from-indigo-500 to-blue-600",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`p-6 bg-gradient-to-br ${feature.color} backdrop-blur-xl rounded-3xl border border-white/20 w-fit mx-auto mb-6 group-hover:scale-110 transition-all duration-500 shadow-2xl`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Trade Categories */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-8 opacity-90">
            {["Premium Spices", "Agricultural Products", "Dehydrated Goods", "Organic Exports", "Specialty Foods"].map(
              (category, index) => (
                <div
                  key={index}
                  className="bg-blue-600/20 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-400/30 hover:bg-blue-600/30 transition-all duration-300"
                >
                  <span className="text-sm text-blue-100 font-medium">{category}</span>
                </div>
              ),
            )}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-cyan-700/20 backdrop-blur-xl px-4 py-2 rounded-full border border-blue-400/30">
              <Award className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-blue-100 font-medium">FSSAI Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-600/20 to-teal-700/20 backdrop-blur-xl px-4 py-2 rounded-full border border-cyan-400/30">
              <Ship className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-100 font-medium">APEDA Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-8 h-12 border-2 border-cyan-400/50 rounded-full flex justify-center backdrop-blur-xl bg-cyan-400/10 shadow-xl">
          <div className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mt-3 animate-pulse"></div>
        </div>
        <p className="text-cyan-200/70 text-xs mt-2 font-medium">Explore Our Services</p>
      </div>
    </section>
  )
}
