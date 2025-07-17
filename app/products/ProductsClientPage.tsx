"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { getProducts, getCategories, type Product, type Category } from "@/lib/supabase"
import { Package, Grid, List, ChevronDown, Download, FileText, Star } from "lucide-react"

export default function ProductsClientPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [currentFilters, setCurrentFilters] = useState({
    search: "",
    categoryId: "",
    subcategoryId: "",
  })

  const ITEMS_PER_PAGE = 12

  // Catalog data
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
      name: "Complete Product Catalog",
      description: "Comprehensive catalog featuring all our product categories",
      downloadLink: "#",
      icon: "📋",
      pages: "48 pages",
      size: "4.2 MB",
    },
  ]

  // Load products and categories
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

  const loadCategories = useCallback(async () => {
    try {
      const data = await getCategories()
      setCategories(data)
    } catch (error) {
      console.error("Error loading categories:", error)
    }
  }, [])

  // Initial load
  useEffect(() => {
    loadProducts(currentFilters)
    loadCategories()
  }, [loadProducts, loadCategories, currentFilters])

  // Handle filter changes
  const handleFiltersChange = useCallback((filters: typeof currentFilters) => {
    setCurrentFilters(filters)
  }, [])

  // Load more products
  const loadMore = () => {
    if (!loadingMore && hasMore) {
      loadProducts(currentFilters, products.length, true)
    }
  }

  // Handle catalog download
  const handleCatalogDownload = (catalog: (typeof catalogData)[0]) => {
    if (catalog.downloadLink === "#") {
      alert("Download link will be available soon!")
      return
    }
    window.open(catalog.downloadLink, "_blank")
  }

  // Loading skeleton
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
      {/* Products Page Schema */}
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
            mainEntity: {
              "@type": "ItemList",
              name: "Export Products",
              description: "Premium quality export products from India",
              numberOfItems: products.length,
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://grahaimpex.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: "https://grahaimpex.com/products",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section - Responsive padding */}
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

        {/* Catalog Download Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
                <FileText className="w-5 h-5 mr-2 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Product Catalogs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Download Our
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Product Catalogs
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get detailed information about our export products with comprehensive catalogs featuring specifications,
                pricing, and bulk order details for international buyers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {catalogData.map((catalog, index) => (
                <Card
                  key={catalog.id}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200"
                >
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {catalog.icon}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{catalog.name}</h3>

                    <p className="text-sm text-gray-600 mb-4 flex-1 line-clamp-3">{catalog.description}</p>

                    <div className="space-y-3">
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{catalog.pages}</span>
                        <span>{catalog.size}</span>
                      </div>

                      <Button
                        onClick={() => handleCatalogDownload(catalog)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        size="sm"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">
                  All catalogs are updated monthly with latest products and export pricing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Responsive spacing */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Filters Sidebar - Responsive */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-200">
                  <ProductFilters onFiltersChange={handleFiltersChange} loading={loading} />
                </div>
              </div>

              {/* Products Grid */}
              <div className="lg:col-span-3">
                {/* Results Header - Responsive layout */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 bg-white rounded-xl shadow-sm p-4 sm:p-6 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                    <div className="min-w-0">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                        {loading ? "Loading Export Products..." : `${products.length} Export Products Available`}
                      </h2>
                      {currentFilters.search && (
                        <p className="text-xs sm:text-sm text-gray-600 truncate">
                          Results for "{currentFilters.search}"
                        </p>
                      )}
                    </div>
                  </div>

                  {/* View Mode Toggle - Responsive */}
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1 self-start sm:self-auto">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="h-8 w-8 p-0"
                    >
                      <Grid className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="h-8 w-8 p-0"
                    >
                      <List className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>

                {/* Products Grid/List - Responsive grid */}
                {loading ? (
                  <div
                    className={`grid gap-4 sm:gap-6 ${
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
                      className={`grid gap-4 sm:gap-6 ${
                        viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
                      }`}
                    >
                      {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>

                    {/* Load More Button - Responsive */}
                    {hasMore && (
                      <div className="text-center mt-8 sm:mt-12">
                        <Button
                          onClick={loadMore}
                          disabled={loadingMore}
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto"
                        >
                          {loadingMore ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                              Loading More Products...
                            </>
                          ) : (
                            <>
                              Load More Export Products
                              <ChevronDown className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12 sm:py-16 bg-white rounded-xl shadow-sm border border-gray-200">
                    <Package className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Export Products Found</h3>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base px-4">
                      Try adjusting your search criteria or browse all product categories
                    </p>
                    <Button
                      onClick={() => setCurrentFilters({ search: "", categoryId: "", subcategoryId: "" })}
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
      </div>
    </>
  )
}
