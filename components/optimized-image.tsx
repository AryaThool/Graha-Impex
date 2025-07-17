"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Package } from "lucide-react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  preload?: boolean
  eager?: boolean
}

// Generate optimized blur placeholder
const generateBlurDataURL = (width = 10, height = 10) => {
  // Create a simple base64 encoded blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `
  return `data:image/svg+xml;base64,${btoa(svg)}`
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 75, // Reduced from 85 for faster loading
  placeholder = "blur",
  blurDataURL,
  preload = false,
  eager = false,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageSrc, setImageSrc] = useState(src)

  // Preload image if requested
  useEffect(() => {
    if (preload && src && typeof window !== "undefined") {
      const img = new window.Image()
      img.src = src
      img.onload = () => {
        setImageLoading(false)
      }
      img.onerror = () => {
        setImageError(true)
        setImageLoading(false)
      }
    }
  }, [src, preload])

  const handleImageError = () => {
    console.warn(`Failed to load image: ${src}`)
    setImageError(true)
    setImageLoading(false)

    // Try fallback URL if original fails
    if (src.includes("supabase.co") && !src.includes("placeholder")) {
      setImageSrc("/placeholder.svg?height=400&width=600&text=Product+Image")
    }
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  // Generate blur placeholder
  const defaultBlurDataURL = blurDataURL || generateBlurDataURL(width || 400, height || 300)

  if (imageError) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}>
        <div className="text-center p-4">
          <Package className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-xs text-gray-500">Image not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Loading skeleton */}
      {imageLoading && (
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 ${className} animate-pulse`}>
          <div className="absolute inset-0 bg-gray-200 opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`${className} ${imageLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
        priority={priority || eager}
        sizes={sizes}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={defaultBlurDataURL}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading={priority || eager ? "eager" : "lazy"}
        // Add performance hints
        decoding="async"
        // Optimize for faster loading
        unoptimized={false}
      />
    </div>
  )
}
