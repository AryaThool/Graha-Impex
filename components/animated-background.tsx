"use client"

import { MapPin, Truck, Plane, Package } from "lucide-react"

interface AnimatedBackgroundProps {
  opacity?: number
  showFloatingElements?: boolean
}

export default function AnimatedBackground({ opacity = 0.3, showFloatingElements = true }: AnimatedBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {/* Ocean Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='15' cy='15' r='1'/%3E%3Ccircle cx='45' cy='45' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Animated Shipping Route */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main Shipping Route */}
        <path
          d="M 50 300 Q 200 250 400 280 T 800 300 Q 1000 320 1200 300"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          fill="none"
          filter="url(#glow)"
          className="animate-pulse"
          strokeDasharray="8,4"
        />

        {/* Secondary Routes */}
        <path
          d="M 100 400 Q 300 350 500 380 T 900 400"
          stroke="url(#routeGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
          strokeDasharray="4,2"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>

      {/* Source Port */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
            <MapPin className="h-6 w-6 text-blue-300" />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-blue-200 whitespace-nowrap">
            India
          </div>
          {/* Port Infrastructure */}
          <div className="absolute -right-3 top-6 w-6 h-1 bg-blue-400/40 rounded"></div>
          <div className="absolute -right-4 top-4 w-8 h-1 bg-blue-400/20 rounded"></div>
        </div>
      </div>

      {/* Destination Port */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
        <div className="relative">
          <div className="w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
            <MapPin className="h-6 w-6 text-green-300" />
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green-200 whitespace-nowrap">
            World
          </div>
          {/* Port Infrastructure */}
          <div className="absolute -left-3 top-6 w-6 h-1 bg-green-400/40 rounded"></div>
          <div className="absolute -left-4 top-4 w-8 h-1 bg-green-400/20 rounded"></div>
        </div>
      </div>

      {/* Animated Container Ship */}
      <div className="absolute top-1/2 transform -translate-y-1/2 animate-ship-journey">
        <div className="relative">
          {/* Ship Body */}
          <div className="w-16 h-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg relative shadow-xl border border-gray-600">
            {/* Ship Hull */}
            <div className="absolute bottom-0 w-full h-3 bg-gradient-to-r from-red-700 to-red-800 rounded-b-lg border-t border-red-600"></div>

            {/* Containers on Ship - More vibrant colors */}
            <div className="absolute -top-2 left-1 w-2 h-2 bg-blue-600 rounded-sm shadow-sm border border-blue-700"></div>
            <div className="absolute -top-2 left-4 w-2 h-2 bg-red-600 rounded-sm shadow-sm border border-red-700"></div>
            <div className="absolute -top-2 left-7 w-2 h-2 bg-green-600 rounded-sm shadow-sm border border-green-700"></div>
            <div className="absolute -top-2 left-10 w-2 h-2 bg-yellow-500 rounded-sm shadow-sm border border-yellow-600"></div>

            {/* Ship Bridge - More prominent */}
            <div className="absolute -top-4 right-1 w-3 h-3 bg-white rounded-sm shadow-md border border-gray-300"></div>

            {/* Ship Wake - More visible */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2">
              <div className="w-6 h-1 bg-white/40 rounded-full animate-pulse shadow-sm"></div>
              <div
                className="w-4 h-1 bg-white/30 rounded-full mt-1 animate-pulse shadow-sm"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-3 h-1 bg-white/20 rounded-full mt-1 animate-pulse shadow-sm"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            {/* Ship Details - Add more visual elements */}
            <div className="absolute top-0 left-2 w-1 h-1 bg-orange-400 rounded-full"></div>
            <div className="absolute top-0 right-3 w-1 h-1 bg-orange-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Floating Logistics Elements */}
      {showFloatingElements && (
        <>
          <div className="absolute top-20 left-1/4 animate-float-slow">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <Truck className="h-4 w-4 text-blue-300" />
            </div>
          </div>

          <div className="absolute top-32 right-1/3 animate-float-medium">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <Plane className="h-4 w-4 text-yellow-300" />
            </div>
          </div>

          <div className="absolute bottom-32 left-1/3 animate-float-fast">
            <div className="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
              <Package className="h-4 w-4 text-green-300" />
            </div>
          </div>
        </>
      )}

      {/* Animated Cargo Movement Indicators */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-blue-400/60 rounded-full animate-bounce"></div>
          <div className="w-1 h-1 bg-green-400/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div
            className="w-1 h-1 bg-yellow-400/60 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
