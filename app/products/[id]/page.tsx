"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, Package, Share2, Heart, ShoppingCart, Phone, Mail } from "lucide-react"
import { getProductById, getProducts, type Product } from "@/lib/supabase"
import ProductCard from "@/components/product-card"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      loadProduct(params.id as string)
    }
  }, [params.id])

  const loadProduct = async (id: string) => {
    try {
      setLoading(true)
      const productData = await getProductById(id)

      if (!productData) {
        router.push("/products")
        return
      }

      setProduct(productData)

      // Load related products from same category
      if (productData.category_id) {
        const related = await getProducts({
          categoryId: productData.category_id,
          limit: 4,
        })
        // Filter out current product
        setRelatedProducts(related.filter((p) => p.id !== id))
      }
    } catch (error) {
      console.error("Error loading product:", error)
      router.push("/products")
    } finally {
      setLoading(false)
    }
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleShare = async () => {
    if (navigator.share && product) {
      try {
        await navigator.share({
          title: product.name,
          text: product.description,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Fixed spacing for navbar */}
        <div className="pt-24 pb-8">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-32 mb-6" />
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <Skeleton className="h-64 sm:h-80 lg:h-96 w-full rounded-xl" />
              <div className="space-y-4 sm:space-y-6">
                <Skeleton className="h-6 sm:h-8 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-24 sm:h-32 w-full" />
                <Skeleton className="h-10 sm:h-12 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <Package className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed spacing for navbar */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          {/* Back Button - Fixed positioning to avoid navbar collision */}
          <div className="mb-6 sm:mb-8">
            <Link href="/products">
              <Button variant="ghost" className="hover:bg-white -ml-2 sm:-ml-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Products</span>
                <span className="sm:hidden">Back</span>
              </Button>
            </Link>
          </div>

          {/* Product Details - Responsive grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
            {/* Product Image - Responsive sizing */}
            <div className="relative">
              <Card className="overflow-hidden border-0 shadow-xl">
                <div className="relative h-64 sm:h-80 lg:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200">
                  {imageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600"></div>
                    </div>
                  )}

                  {!imageError ? (
                    <Image
                      src={product.image_url || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className={`object-cover ${imageLoading ? "opacity-0" : "opacity-100"}`}
                      onError={handleImageError}
                      onLoad={handleImageLoad}
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <Package className="h-16 w-16 sm:h-24 sm:w-24 text-gray-400" />
                    </div>
                  )}
                </div>
              </Card>
            </div>

            {/* Product Info - Responsive spacing */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                {/* Breadcrumb - Responsive text */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <span className="truncate">{product.categories?.name}</span>
                  {product.subcategories && (
                    <>
                      <span>/</span>
                      <span className="truncate">{product.subcategories.name}</span>
                    </>
                  )}
                </div>

                {/* Product Name - Responsive sizing */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {product.name}
                </h1>

                {/* Badges - Responsive layout */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <Badge variant="secondary" className="text-xs sm:text-sm">
                    {product.categories?.name}
                  </Badge>
                  {product.subcategories && (
                    <Badge variant="outline" className="text-xs sm:text-sm">
                      {product.subcategories.name}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Description - Responsive spacing */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Description</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons - Responsive layout */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 sm:h-auto"
                  >
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span className="text-sm sm:text-base">Contact for Quote</span>
                  </Button>
                  <div className="flex gap-3 sm:gap-2">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleShare}
                      className="flex-1 sm:flex-none h-12 sm:h-auto"
                    >
                      <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="ml-2 sm:hidden">Share</span>
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1 sm:flex-none h-12 sm:h-auto">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="ml-2 sm:hidden">Save</span>
                    </Button>
                  </div>
                </div>

                {/* Contact buttons - Responsive layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link href="/contact" className="block">
                    <Button variant="outline" size="lg" className="w-full h-12 sm:h-auto">
                      <Mail className="h-4 w-4 mr-2" />
                      <span className="text-sm sm:text-base">Get Info</span>
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full h-12 sm:h-auto">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm sm:text-base">Call Us</span>
                  </Button>
                </div>
              </div>

              {/* Product Details Card - Responsive padding */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Product Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                    <div className="flex justify-between sm:block">
                      <span className="text-gray-600">Category:</span>
                      <span className="sm:ml-0 ml-2 font-medium">{product.categories?.name}</span>
                    </div>
                    {product.subcategories && (
                      <div className="flex justify-between sm:block">
                        <span className="text-gray-600">Subcategory:</span>
                        <span className="sm:ml-0 ml-2 font-medium">{product.subcategories.name}</span>
                      </div>
                    )}
                    <div className="flex justify-between sm:block sm:col-span-2">
                      <span className="text-gray-600">Product ID:</span>
                      <span className="sm:ml-0 ml-2 font-mono text-xs">{product.id.slice(0, 8)}...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products - Responsive grid */}
          {relatedProducts.length > 0 && (
            <section>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Related Products</h2>
                <p className="text-gray-600 text-sm sm:text-base">Discover more products from the same category</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
