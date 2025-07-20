"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Ship, Anchor, Waves, Globe2 } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
      {/* Ocean Wave Pattern */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-64 text-blue-900/30"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="animate-pulse"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-48 text-blue-800/20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C200,40 400,120 600,80 C800,40 1000,120 1200,80 L1200,120 L0,120 Z"
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Maritime Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Anchor className="absolute top-20 right-20 h-8 w-8 text-blue-400/30 animate-bounce" />
        <Ship className="absolute bottom-40 left-20 h-10 w-10 text-cyan-400/40 animate-pulse" />
        <Waves className="absolute top-1/3 right-1/3 h-6 w-6 text-blue-300/30 animate-bounce" />
        <Globe2 className="absolute bottom-1/3 right-20 h-8 w-8 text-indigo-400/30 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">GLOBAL TRADE</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                BRIDGE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Sourcing Simplified. Quality You Can Count On.
            </p>

            {/* Description */}
            <p className="text-lg text-blue-200/80 mb-12 max-w-2xl mx-auto">
              From Indian Farms To Global Shelves - Trusted Bulk Exporters of Premium Agro Products
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/sign/pdfs/New%20Company%20Profile.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNGUyOWZlNy1iYzBmLTQ5MGYtOGVlNS00ZmE2NDJhZmFiOTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwZGZzL05ldyBDb21wYW55IFByb2ZpbGUucGRmIiwiaWF0IjoxNzUyODA0OTE0LCJleHAiOjE5MTA0ODQ5MTR9.mbCdgrJpe__Hbe7bbK5FD1fu8OVtGY48VKINndHQdIw" className="flex items-center">
                  Company Profile
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-cyan-400 text-cyan-100 hover:bg-cyan-400/20 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 bg-transparent"
              >
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Ship className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Smart Sourcing</h3>
                <p className="text-blue-200 text-sm">
                  Get the right products at the right price - Handpicked to meet your market demands.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Seamless Exports</h3>
                <p className="text-blue-200 text-sm">End-to-end support from documentation to delivery. We handle the hassle, so you don't have to.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Anchor className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Trusted Indian Network</h3>
                <p className="text-blue-200 text-sm">We partner with certified manufacturers, millers & farmers across India to bring you products that are authentic,tracebale and competetively priced.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
