"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause, Star } from "lucide-react"
import Image from "next/image"

export default function ProductSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const products = [
    {
      id: 1,
      title: "Packaging Solutions",
      description: "Premium packaging materials and custom boxes for secure shipping",
      image: "/placeholder.svg?height=400&width=600",
      category: "Packaging",
    },
    {
      id: 2,
      title: "Shipping Labels & Documentation",
      description: "Professional shipping labels, customs forms, and tracking documents",
      image: "/placeholder.svg?height=400&width=600",
      category: "Documentation",
    },
    {
      id: 3,
      title: "Protective Materials",
      description: "Bubble wrap, foam padding, and protective materials for fragile items",
      image: "/placeholder.svg?height=400&width=600",
      category: "Protection",
    },
    {
      id: 4,
      title: "Tracking Devices",
      description: "GPS tracking devices and smart sensors for real-time monitoring",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technology",
    },
    {
      id: 5,
      title: "Storage Solutions",
      description: "Warehouse storage systems and inventory management tools",
      image: "/placeholder.svg?height=400&width=600",
      category: "Storage",
    },
    {
      id: 6,
      title: "Transportation Equipment",
      description: "Specialized vehicles and equipment for different shipping needs",
      image: "/placeholder.svg?height=400&width=600",
      category: "Transport",
    },
  ]

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, products.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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
            <span className="text-sm font-medium text-white">Our Product Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Product Gallery
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover our range of premium logistics products designed for excellence
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slideshow */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-80 flex items-end">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-2xl"></div>

                    {/* Product Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-3">
                        {product.category}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold leading-tight">{product.title}</h3>
                      <p className="text-blue-100 mt-2">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-0"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-0"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Play/Pause Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-0"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-cyan-400 w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {products.map((product, index) => (
              <button
                key={product.id}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 ${
                  index === currentSlide
                    ? "ring-2 ring-cyan-400 scale-105"
                    : "hover:scale-105 opacity-70 hover:opacity-100"
                }`}
                onClick={() => goToSlide(index)}
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={200}
                  height={120}
                  className="w-full h-16 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-1 left-1 right-1">
                  <p className="text-white text-xs font-medium truncate">{product.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
