import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Database types
export interface Category {
  id: string
  name: string
}

export interface Subcategory {
  id: string
  name: string
  category_id: string
}

export interface Product {
  id: string
  name: string
  description: string
  image_url: string
  category_id: string
  subcategory_id: string | null
  hsn_number: string | null // Added HSN number field
  categories?: Category
  subcategories?: Subcategory
}

export interface HarvestCalendar {
  id: string
  product_name: string
  jan: string
  feb: string
  mar: string
  apr: string
  may: string
  jun: string
  jul: string
  aug: string
  sep: string
  oct: string
  nov: string
  dec: string
  best_month: string
  created_at: string
}

// Database functions
export const getCategories = async (): Promise<Category[]> => {
  if (!supabase) {
    console.warn("Supabase client not initialized. Please check environment variables.")
    return []
  }

  const { data, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    console.error("Error fetching categories:", error)
    return []
  }

  return data || []
}

export const getSubcategories = async (categoryId?: string): Promise<Subcategory[]> => {
  if (!supabase) {
    console.warn("Supabase client not initialized. Please check environment variables.")
    return []
  }

  let query = supabase.from("subcategories").select("*").order("name")

  if (categoryId) {
    query = query.eq("category_id", categoryId)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching subcategories:", error)
    return []
  }

  return data || []
}

export const getProducts = async (filters?: {
  categoryId?: string
  subcategoryId?: string
  search?: string
  limit?: number
  offset?: number
}): Promise<Product[]> => {
  if (!supabase) {
    console.warn("Supabase client not initialized. Please check environment variables.")
    return []
  }

  let query = supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name
      ),
      subcategories (
        id,
        name
      )
    `)
    .order("name")

  if (filters?.categoryId) {
    query = query.eq("category_id", filters.categoryId)
  }

  if (filters?.subcategoryId) {
    query = query.eq("subcategory_id", filters.subcategoryId)
  }

  if (filters?.search) {
    query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
  }

  if (filters?.limit) {
    query = query.limit(filters.limit)
  }

  if (filters?.offset) {
    query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return data || []
}

export const getProductById = async (id: string): Promise<Product | null> => {
  if (!supabase) {
    console.warn("Supabase client not initialized. Please check environment variables.")
    return null
  }

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name
      ),
      subcategories (
        id,
        name
      )
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching product:", error)
    return null
  }

  return data
}

export const searchProducts = async (searchTerm: string): Promise<Product[]> => {
  if (!supabase) {
    console.warn("Supabase client not initialized. Please check environment variables.")
    return []
  }

  const { data, error } = await supabase
    .from("products")
    .select(`
      *,
      categories (
        id,
        name
      ),
      subcategories (
        id,
        name
      )
    `)
    .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
    .order("name")
    .limit(20)

  if (error) {
    console.error("Error searching products:", error)
    return []
  }

  return data || []
}

// Harvest Calendar functions
export const getHarvestCalendar = async (): Promise<HarvestCalendar[]> => {
  if (!supabase) {
    console.warn("Supabase client not initialized. Please check environment variables.")
    return []
  }

  const { data, error } = await supabase.from("harvest_calendar").select("*").order("product_name")

  if (error) {
    console.error("Error fetching harvest calendar:", error)
    return []
  }

  return data || []
}
