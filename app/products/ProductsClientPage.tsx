"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { getProducts, type Product } from "@/lib/supabase"
import { Package, ChevronDown, Download, FileText, ArrowRight, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface ProductsClientPageProps {
  initialProducts: Product[]
}

export default function ProductsClientPage({ initialProducts }: ProductsClientPageProps) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentFilters, setCurrentFilters] = useState({
    search: "",
    categoryId: "",
    subcategoryId: "",
  })

  const ITEMS_PER_PAGE = 12

  const catalogData = [
    {
      id: "spices",
      name: "Spices & Seasonings",
      description: "Complete catalog of premium spices, herbs, and seasoning blends",
      downloadLink: "#",
      icon: "🌶️",
      pages: "24 pages",
      size: "2.5 MB",
    },
    {
      id: "dehydrated",
      name: "Dehydrated Products",
      description: "Dried vegetables, fruits, and dehydrated food products catalog",
      downloadLink:
        "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/catlog-pdf//dehydratedProducts.pdf",
      icon: "🥕",
      pages: "8 pages",
      size: "1.8 MB",
    },
    {
      id: "oils",
      name: "Edible Oils",
      description: "Premium cooking oils and specialty oil products",
      downloadLink: "#",
      icon: "🫒",
      pages: "12 pages",
      size: "1.2 MB",
    },
    {
      id: "seeds",
      name: "Oil Seeds",
      description: "Various oil seeds and agricultural products catalog",
      downloadLink: "#",
      icon: "🌱",
      pages: "16 pages",
      size: "1.5 MB",
    },
    {
      id: "general",
      name: "Complete Rice Catalog",
      description: "Comprehensive catalog featuring all our Basmati Rice categories",
      downloadLink:
        "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/catlog-pdf//Basmati%20Rice%20Catalogue%20(3).pdf",
      icon: "📋",
      pages: "8 pages",
      size: "10 MB",
    },
  ]

  const loadProducts = useCallback(async (filters: typeof currentFilters, offset = 0, append = false) => {
    try {
      if (offset === 0) setLoading(true)
      else setLoadingMore(true)

      const data = await getProducts({
        categoryId: filters.categoryId || undefined,
        subcategoryId: filters.subcategoryId || undefined,
        search: filters.search || undefined,
        limit: ITEMS_PER_PAGE,
        offset,
      })

      if (append) {
        setProducts((prev) => [...prev, ...data])
      } else {
        setProducts(data)
      }

      setHasMore(data.length === ITEMS_PER_PAGE)
    } catch (error) {
      console.error("Error loading products:", error)
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  useEffect(() => {
    loadProducts(currentFilters)
  }, [currentFilters, loadProducts])

  const handleFiltersChange = useCallback((filters: typeof currentFilters) => {
    setCurrentFilters(filters)
  }, [])

  const loadMore = () => {
    if (!loadingMore && hasMore) {
      loadProducts(currentFilters, products.length, true)
    }
  }

  const handleCatalogDownload = (catalog: (typeof catalogData)[0]) => {
    if (catalog.downloadLink === "#") {
      alert("Download link will be available soon!")
      return
    }
    window.open(catalog.downloadLink, "_blank")
  }

  const ProductSkeleton = () => (
    <div className="space-y-4">
      <Skeleton className="h-48 sm:h-56 md:h-64 w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-10 w-full" />
    </div>
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Premium Export Products from India",
            description:
              "Explore Graha Impex's premium export products including Indian spices, dehydrated vegetables, edible oils, and oil seeds.",
            url: "https://grahaimpex.com/products",
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
                Premium Export Products from India
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 px-4">
                Discover our comprehensive range of premium spices, dehydrated products, and food exports designed for
                excellence
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
                    <ProductFilters onFiltersChange={handleFiltersChange} loading={loading} />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                  }`}
                >
                  {/* Rice Card */}
                  <Link href="https://rice-details.grahaimpex.in/" target="_blank" rel="noopener noreferrer">
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg h-full flex flex-col cursor-pointer">
                      <div className="relative overflow-hidden">
                        <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                          <Image
                            src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/new-product-images/istockphoto-519309790-612x612.jpg"
                            alt="Premium Rice Collection from Graha Impex"
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={75}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                          {/* Quick View overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Button
                              size="sm"
                              className="bg-white/90 text-gray-900 hover:bg-white transform scale-90 group-hover:scale-100 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4"
                            >
                              <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">Quick View</span>
                              <span className="sm:hidden">View</span>
                            </Button>
                          </div>

                          {/* Priority Badge */}
                          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                            <Badge className="bg-red-500 text-white font-medium text-xs sm:text-sm px-2 py-1">
                              Featured
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                            Explore Our Rice
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base line-clamp-3 leading-relaxed flex-1 mb-4">
                            Premium Basmati rice, specialty varieties, and bulk export options
                          </p>
                          <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors text-sm">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>

                  {/* Dry Chilli Card */}
                  <Link href="https://dry-chilli-details.grahaimpex.in/" target="_blank" rel="noopener noreferrer">
                    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg h-full flex flex-col cursor-pointer">
                      <div className="relative overflow-hidden">
                        <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                          <Image
                            src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/new-product-images/chilli%20display.jpg"
                            alt="Premium Dry Chilli Collection from Graha Impex"
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-500"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            quality={75}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

                          {/* Quick View overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Button
                              size="sm"
                              className="bg-white/90 text-gray-900 hover:bg-white transform scale-90 group-hover:scale-100 transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4"
                            >
                              <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">Quick View</span>
                              <span className="sm:hidden">View</span>
                            </Button>
                          </div>

                          {/* Featured Badge */}
                          <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                            <Badge className="bg-red-500 text-white font-medium text-xs sm:text-sm px-2 py-1">
                              Featured
                            </Badge>
                          </div>
                        </div>

                        <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                            Explore Our Dry Chilli
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base line-clamp-3 leading-relaxed flex-1 mb-4">
                            Premium red chillies, spicy varieties, and specialty chilli products
                          </p>
                          <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors text-sm">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>

                  {/* Regular products */}
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {loading ? (
                  <div
                    className={`grid gap-6 ${
                      viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                    }`}
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <ProductSkeleton key={i} />
                    ))}
                  </div>
                ) : products.length > 0 ? (
                  <>
                    <div
                      className={`grid gap-6 ${
                        viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                      }`}
                    >
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>

                    {hasMore && (
                      <div className="text-center mt-12">
                        <Button
                          onClick={loadMore}
                          disabled={loadingMore}
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto"
                        >
                          {loadingMore ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Loading More...
                            </>
                          ) : (
                            <>
                              Load More Products
                              <ChevronDown className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
                    <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                    <p className="text-gray-600 mb-6 px-4">There are no products matching the selected filters.</p>
                    <Button
                      onClick={() => handleFiltersChange({ search: "", categoryId: "", subcategoryId: "" })}
                      variant="outline"
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4">
            <Card className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-10 border border-gray-200">
              <CardHeader className="text-center p-0 mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Download Our Product Catalogs</h2>
                </div>
                <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Get detailed information with our comprehensive catalogs, updated monthly.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catalogData.map((catalog) => (
                    <Card
                      key={catalog.id}
                      className="group hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200"
                    >
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                          {catalog.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{catalog.name}</h4>
                        <div className="flex justify-center text-sm text-gray-500 mb-4 space-x-2">
                          <span>{catalog.pages}</span>
                          <span>&bull;</span>
                          <span>{catalog.size}</span>
                        </div>
                        <Button
                          onClick={() => handleCatalogDownload(catalog)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                          size="sm"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
