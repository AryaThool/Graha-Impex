"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Hash, Package } from "lucide-react"
import type { Product } from "@/lib/supabase"
import { useState } from "react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    console.log("Product card image failed to load:", product.image_url)
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg h-full flex flex-col">
      <div className="relative overflow-hidden">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Loading indicator */}
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            </div>
          )}

          {!imageError ? (
            <Image
              src={product.image_url || "/placeholder.svg"}
              alt={`${product.name} - Premium export quality from Graha Impex`}
              fill
              className={`object-cover group-hover:scale-110 transition-all duration-500 ${
                imageLoading ? "opacity-0" : "opacity-100"
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={75}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="text-center p-4">
                <Package className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-xs text-gray-500">Image not available</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

          {/* Quick View Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Link href={`/products/${product.id}`} prefetch={false}>
              <Button
                size="sm"
                className="bg-white/90 text-gray-900 hover:bg-white transform scale-90 group-hover:scale-100 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4"
              >
                <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Quick View</span>
                <span className="sm:hidden">View</span>
              </Button>
            </Link>
          </div>

          {/* Category Badge */}
          {product.categories && (
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
              <Badge variant="secondary" className="bg-white/90 text-gray-900 font-medium text-xs sm:text-sm px-2 py-1">
                {product.categories.name}
              </Badge>
            </div>
          )}

          {/* HSN Number Badge */}
          {product.hsn_number && (
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
              <Badge
                variant="outline"
                className="bg-blue-50/90 border-blue-200 text-blue-700 font-medium text-xs sm:text-sm px-2 py-1 flex items-center gap-1"
              >
                <Hash className="h-3 w-3" />
                <span className="hidden sm:inline">HSN:</span>
                {product.hsn_number}
              </Badge>
            </div>
          )}

          {/* Subcategory Badge */}
          {product.subcategories && (
            <div
              className={`absolute ${product.hsn_number ? "top-10 sm:top-12" : "top-2 sm:top-4"} right-2 sm:right-4`}
            >
              <Badge
                variant="outline"
                className="bg-white/90 border-gray-300 text-gray-700 font-medium text-xs sm:text-sm px-2 py-1"
              >
                {product.subcategories.name}
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
          <div className="space-y-3 flex-1 flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
              {product.name}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base line-clamp-3 leading-relaxed flex-1">
              {product.description}
            </p>

            <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100 mt-auto">
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Category</span>
                <span className="text-sm font-medium text-gray-900 truncate">
                  {product.categories?.name || "Uncategorized"}
                </span>
                {/* HSN Number in card footer */}
                {product.hsn_number && (
                  <div className="mt-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">HSN Code</span>
                    <span className="text-sm font-medium text-blue-600 block">{product.hsn_number}</span>
                  </div>
                )}
              </div>

              <Link href={`/products/${product.id}`} className="ml-3" prefetch={false}>
                <Button
                  variant="outline"
                  size="sm"
                  className="hover:bg-blue-50 hover:border-blue-300 text-xs sm:text-sm px-3 sm:px-4 bg-transparent"
                >
                  <span className="hidden sm:inline">View Details</span>
                  <span className="sm:hidden">Details</span>
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
