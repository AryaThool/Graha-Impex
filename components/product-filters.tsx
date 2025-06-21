"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, X, Package } from "lucide-react"
import { getCategories, getSubcategories, type Category, type Subcategory } from "@/lib/supabase"

interface ProductFiltersProps {
  onFiltersChange: (filters: {
    search: string
    categoryId: string
    subcategoryId: string
  }) => void
  loading?: boolean
}

export default function ProductFilters({ onFiltersChange, loading }: ProductFiltersProps) {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("")
  const [categories, setCategories] = useState<Category[]>([])
  const [subcategories, setSubcategories] = useState<Subcategory[]>([])
  const [showFilters, setShowFilters] = useState(false)

  // Debounced search function
  const debouncedOnFiltersChange = useCallback(
    debounce((filters: { search: string; categoryId: string; subcategoryId: string }) => {
      onFiltersChange(filters)
    }, 300),
    [onFiltersChange],
  )

  // Load categories on mount
  useEffect(() => {
    loadCategories()
  }, [])

  // Load subcategories when category changes
  useEffect(() => {
    if (selectedCategory) {
      loadSubcategories(selectedCategory)
    } else {
      setSubcategories([])
      setSelectedSubcategory("")
    }
  }, [selectedCategory])

  // Emit filter changes with debounce for search
  useEffect(() => {
    debouncedOnFiltersChange({
      search,
      categoryId: selectedCategory,
      subcategoryId: selectedSubcategory,
    })
  }, [search, selectedCategory, selectedSubcategory, debouncedOnFiltersChange])

  const loadCategories = async () => {
    const data = await getCategories()
    setCategories(data)
  }

  const loadSubcategories = async (categoryId: string) => {
    const data = await getSubcategories(categoryId)
    setSubcategories(data)
  }

  const clearFilters = () => {
    setSearch("")
    setSelectedCategory("")
    setSelectedSubcategory("")
  }

  const hasActiveFilters = search || selectedCategory || selectedSubcategory

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Search Bar - Fixed debounced input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 pr-4 h-10 sm:h-12 text-sm sm:text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors"
          disabled={loading}
        />
        {search && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearch("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 sm:h-8 sm:w-8 p-0"
          >
            <X className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        )}
      </div>

      {/* Filter Toggle Button - Responsive layout */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
          <span className="font-medium text-gray-900 text-sm sm:text-base">Filter Products</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="text-red-600 border-red-200 hover:bg-red-50 text-xs sm:text-sm px-2 sm:px-3"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
              <span className="hidden sm:inline">Clear All</span>
              <span className="sm:hidden">Clear</span>
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden text-xs sm:text-sm px-2 sm:px-3"
          >
            <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Filter Controls - Responsive visibility */}
      <div className={`space-y-3 sm:space-y-4 ${showFilters ? "block" : "hidden lg:block"}`}>
        <div className="space-y-3 sm:space-y-4">
          {/* Category Filter - Full width on mobile */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-700">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory} disabled={loading}>
              <SelectTrigger className="h-10 sm:h-11 text-sm">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Subcategory Filter - Full width on mobile */}
          <div className="space-y-2">
            <label className="text-xs sm:text-sm font-medium text-gray-700">Subcategory</label>
            <Select
              value={selectedSubcategory}
              onValueChange={setSelectedSubcategory}
              disabled={loading || !selectedCategory || subcategories.length === 0}
            >
              <SelectTrigger className="h-10 sm:h-11 text-sm">
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {subcategories.map((subcategory) => (
                  <SelectItem key={subcategory.id} value={subcategory.id}>
                    {subcategory.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters - Responsive badges */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-1 sm:gap-2 pt-2">
            {search && (
              <Badge variant="secondary" className="flex items-center gap-1 text-xs px-2 py-1">
                <span className="truncate max-w-20 sm:max-w-none">Search: "{search}"</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearch("")}
                  className="h-3 w-3 sm:h-4 sm:w-4 p-0 hover:bg-transparent"
                >
                  <X className="h-2 w-2 sm:h-3 sm:w-3" />
                </Button>
              </Badge>
            )}

            {selectedCategory && (
              <Badge variant="secondary" className="flex items-center gap-1 text-xs px-2 py-1">
                <span className="truncate max-w-20 sm:max-w-none">
                  {categories.find((c) => c.id === selectedCategory)?.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedCategory("")}
                  className="h-3 w-3 sm:h-4 sm:w-4 p-0 hover:bg-transparent"
                >
                  <X className="h-2 w-2 sm:h-3 sm:w-3" />
                </Button>
              </Badge>
            )}

            {selectedSubcategory && (
              <Badge variant="secondary" className="flex items-center gap-1 text-xs px-2 py-1">
                <span className="truncate max-w-20 sm:max-w-none">
                  {subcategories.find((s) => s.id === selectedSubcategory)?.name}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSubcategory("")}
                  className="h-3 w-3 sm:h-4 sm:w-4 p-0 hover:bg-transparent"
                >
                  <X className="h-2 w-2 sm:h-3 sm:w-3" />
                </Button>
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timeout: NodeJS.Timeout
  return ((...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }) as T
}
