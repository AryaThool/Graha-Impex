"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import { getProducts, type Product } from "@/lib/supabase"
import { Package, Grid, List, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ProductsPage() {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([])
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

  // Load products
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

  // Initial load
  useEffect(() => {
    loadProducts(currentFilters)
  }, [loadProducts, currentFilters])

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Responsive padding */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">{t("products")}</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 px-4">
              Discover our comprehensive range of premium products designed for excellence
            </p>
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
                      {loading ? "Loading..." : `${products.length} Products Found`}
                    </h2>
                    {currentFilters.search && (
                      <p className="text-xs sm:text-sm text-gray-600 truncate">Results for "{currentFilters.search}"</p>
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
                            Loading...
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
                <div className="text-center py-12 sm:py-16 bg-white rounded-xl shadow-sm border border-gray-200">
                  <Package className="h-12 w-12 sm:h-16 sm:w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No Products Found</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base px-4">
                    Try adjusting your search criteria or browse all categories
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
  )
}
