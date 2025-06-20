"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Star, Users, Award, Globe2 } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Ocean Waves Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="200" height="40" patternUnits="userSpaceOnUse">
                <path d="M0,20 Q50,0 100,20 T200,20" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Container Ship Animation - Responsive positioning */}
        <div className="absolute top-[45%] md:top-1/2 transform -translate-y-1/2 animate-enhanced-ship-journey z-20">
          <div className="relative">
            {/* Ship Shadow */}
            <div className="absolute top-8 left-2 w-24 h-3 bg-black/20 rounded-full blur-sm transform scale-x-150"></div>

            {/* Main Ship Body */}
            <div className="relative w-24 h-8 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-2xl border border-gray-600">
              {/* Ship Hull - Enhanced */}
              <div className="absolute bottom-0 w-full h-4 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-b-lg border-t-2 border-red-500">
                {/* Hull Details */}
                <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-red-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-red-300 rounded-full opacity-40"></div>
              </div>

              {/* Ship Deck */}
              <div className="absolute top-0 w-full h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-t-lg">
                {/* Deck Lines */}
                <div className="absolute top-1 left-1 right-1 h-px bg-gray-400 opacity-50"></div>
                <div className="absolute top-2 left-1 right-1 h-px bg-gray-400 opacity-30"></div>
              </div>

              {/* Enhanced Container Stack */}
              <div className="absolute -top-4 left-1 flex space-x-0.5">
                <div className="w-3 h-3 bg-gradient-to-b from-blue-500 to-blue-700 rounded-sm shadow-lg border border-blue-800 relative">
                  <div className="absolute inset-0.5 border border-blue-300 rounded-sm opacity-30"></div>
                </div>
                <div className="w-3 h-3 bg-gradient-to-b from-red-500 to-red-700 rounded-sm shadow-lg border border-red-800 relative">
                  <div className="absolute inset-0.5 border border-red-300 rounded-sm opacity-30"></div>
                </div>
                <div className="w-3 h-3 bg-gradient-to-b from-green-500 to-green-700 rounded-sm shadow-lg border border-green-800 relative">
                  <div className="absolute inset-0.5 border border-green-300 rounded-sm opacity-30"></div>
                </div>
                <div className="w-3 h-3 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-sm shadow-lg border border-yellow-700 relative">
                  <div className="absolute inset-0.5 border border-yellow-200 rounded-sm opacity-30"></div>
                </div>
                <div className="w-3 h-3 bg-gradient-to-b from-purple-500 to-purple-700 rounded-sm shadow-lg border border-purple-800 relative">
                  <div className="absolute inset-0.5 border border-purple-300 rounded-sm opacity-30"></div>
                </div>
              </div>

              {/* Ship Bridge - Enhanced */}
              <div className="absolute -top-6 right-1 w-4 h-4 bg-gradient-to-b from-white to-gray-200 rounded-sm shadow-xl border border-gray-300">
                {/* Bridge Windows */}
                <div className="absolute top-1 left-0.5 right-0.5 h-1 bg-blue-200 rounded-sm opacity-60"></div>
                <div className="absolute top-2.5 left-0.5 right-0.5 h-0.5 bg-blue-100 rounded-sm opacity-40"></div>
                {/* Navigation Light */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
              </div>

              {/* Ship Mast */}
              <div className="absolute -top-8 right-2 w-0.5 h-4 bg-gray-400"></div>

              {/* Ship Flag */}
              <div className="absolute -top-8 right-1 w-2 h-1 bg-gradient-to-r from-blue-500 to-red-500 rounded-sm animate-wave"></div>

              {/* Smoke Stack */}
              <div className="absolute -top-5 right-4 w-1.5 h-3 bg-gradient-to-t from-gray-700 to-gray-600 rounded-t-full">
                {/* Smoke */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-1 bg-gray-400 rounded-full opacity-60 animate-bounce"></div>
                  <div
                    className="w-0.5 h-0.5 bg-gray-300 rounded-full opacity-40 animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                </div>
              </div>

              {/* Enhanced Ship Wake */}
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-1 bg-gradient-to-r from-white/60 to-transparent rounded-full animate-pulse shadow-lg"></div>
                <div
                  className="w-6 h-0.5 bg-gradient-to-r from-white/40 to-transparent rounded-full mt-1 animate-pulse shadow-md"
                  style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                  className="w-4 h-0.5 bg-gradient-to-r from-white/20 to-transparent rounded-full mt-0.5 animate-pulse shadow-sm"
                  style={{ animationDelay: "0.6s" }}
                ></div>
              </div>

              {/* Ship Lights */}
              <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-green-400 rounded-full animate-pulse"></div>
              <div
                className="absolute top-1 right-1 w-0.5 h-0.5 bg-red-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Port Indicators - Enhanced */}
        <div className="absolute left-4 md:left-12 top-[45%] md:top-1/2 transform -translate-y-1/2 z-10">
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/20 to-blue-700/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse border border-blue-400/30">
              <Globe2 className="h-6 w-6 md:h-8 md:w-8 text-blue-300" />
            </div>
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm text-blue-200 whitespace-nowrap font-medium">
              India
            </div>
            {/* Port Infrastructure */}
            <div className="absolute -right-3 md:-right-4 top-6 md:top-8 w-6 md:w-8 h-1 bg-blue-400/60 rounded-full"></div>
            <div className="absolute -right-4 md:-right-6 top-4 md:top-6 w-8 md:w-12 h-1 bg-blue-400/40 rounded-full"></div>
            <div className="absolute -right-6 md:-right-8 top-2 md:top-4 w-12 md:w-16 h-1 bg-blue-400/20 rounded-full"></div>
          </div>
        </div>

        <div className="absolute right-4 md:right-12 top-[45%] md:top-1/2 transform -translate-y-1/2 z-10">
          <div className="relative">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500/20 to-green-700/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse border border-green-400/30">
              <Globe2 className="h-6 w-6 md:h-8 md:w-8 text-green-300" />
            </div>
            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 transform -translate-x-1/2 text-xs md:text-sm text-green-200 whitespace-nowrap font-medium">
              Destination
            </div>
            {/* Port Infrastructure */}
            <div className="absolute -left-3 md:-left-4 top-6 md:top-8 w-6 md:w-8 h-1 bg-green-400/60 rounded-full"></div>
            <div className="absolute -left-4 md:-left-6 top-4 md:top-6 w-8 md:w-12 h-1 bg-green-400/40 rounded-full"></div>
            <div className="absolute -left-6 md:-left-8 top-2 md:top-4 w-12 md:w-16 h-1 bg-green-400/20 rounded-full"></div>
          </div>
        </div>

        {/* Shipping Route */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M 80 400 Q 300 350 600 400 T 1120 400"
            stroke="url(#routeGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="12,8"
            className="animate-pulse"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-4 py-20">
        <div className="flex flex-col justify-center items-center text-center min-h-screen space-y-8 md:space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mt-20 md:mt-0">
            <Star className="w-4 h-4 md:w-5 md:h-5 mr-2 text-yellow-400" />
            <span className="text-xs md:text-sm font-medium text-white">{t("trustedBy")}</span>
          </div>

          {/* Main Heading - Using separate lines for better control */}
          <div className="space-y-4 md:space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight text-white">
              <span className="block">{t("heroTitle")}</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t("heroTitleHighlight")}
              </span>
            </h1>
            {/* Using whitespace-pre-line to handle line breaks */}
            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto px-4 whitespace-pre-line">
              {t("heroDescription")}
            </p>
          </div>

          {/* CTA Buttons - Centered and responsive */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full px-4">
            <a
              href="https://grahaimpex.com/wp-content/uploads/2024/09/graha-impex-pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 border-0 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              >
                <Download className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6" />
                {t("downloadProfile")}
              </Button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto max-w-xs sm:max-w-none">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white/50 text-white bg-white/10 hover:bg-white/20 hover:border-white/70 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
              >
                {t("getQuote")}
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </Link>
          </div>

          {/* Stats - Better responsive spacing */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 max-w-4xl w-full px-4">
            {[
              { icon: Users, number: "50K+", label: t("dailyDeliveries") },
              { icon: Globe2, number: "50+", label: t("countries") },
              { icon: Award, number: "99.9%", label: t("successRate") },
              { icon: Star, number: "24/7", label: t("support") },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-fit mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 md:h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
