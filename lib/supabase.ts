import { createClient } from "@supabase/supabase-js"

// --- Robust Supabase Client Initialization ---
// This function safely gets the Supabase URL, providing a placeholder if the environment variable is not set.
// This is crucial for the Vercel build process to succeed without real credentials.
const getSupabaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url || url.trim() === "") {
    console.warn("Supabase URL is not set. Using a placeholder.")
    return "https://placeholder.supabase.co"
  }
  return url
}

// This function safely gets the Supabase Anon Key, providing a placeholder if not set.
const getSupabaseKey = () => {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!key || key.trim() === "") {
    console.warn("Supabase Anon Key is not set. Using a placeholder.")
    return "placeholder-key"
  }
  return key
}

const supabaseUrl = getSupabaseUrl()
const supabaseAnonKey = getSupabaseKey()

// Create the Supabase client. This will now work even during the build process on Vercel.
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// --- Database Types ---
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
  hsn_number: string | null
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

// --- Helper to check if Supabase is configured ---
const isSupabaseConfigured = () => {
  return supabaseUrl !== "https://placeholder.supabase.co"
}

// --- Database Functions with Error Handling and Mock Data ---

export const getCategories = async (): Promise<Category[]> => {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Returning mock categories.")
    return [
      { id: "spices", name: "Spices" },
      { id: "dehydrated", name: "Dehydrated Products" },
      { id: "oils", name: "Edible Oils" },
      { id: "seeds", name: "Oil Seeds" },
    ]
  }
  try {
    const { data, error } = await supabase.from("categories").select("*").order("name")
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export const getSubcategories = async (categoryId?: string): Promise<Subcategory[]> => {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Returning mock subcategories.")
    if (categoryId === "spices") {
      return [
        { id: "powder-spices", name: "Powder Spices", category_id: "spices" },
        { id: "whole-spices", name: "Whole Spices", category_id: "spices" },
      ]
    }
    return []
  }
  try {
    let query = supabase.from("subcategories").select("*").order("name")
    if (categoryId) {
      query = query.eq("category_id", categoryId)
    }
    const { data, error } = await query
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching subcategories:", error)
    return []
  }
}

export const getProductById = async (id: string): Promise<Product | null> => {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Returning mock product.")
    const mockProducts = [
      {
        id: "1",
        name: "Premium Turmeric Powder",
        description:
          "High-quality turmeric powder with rich curcumin content, perfect for export markets. Sourced from the finest turmeric farms in India with traditional processing methods that preserve the natural oils and active compounds.",
        image_url: "/placeholder.svg?height=400&width=600",
        category_id: "spices",
        subcategory_id: "powder-spices",
        hsn_number: "0910.30",
      },
    ]
    return mockProducts.find((p) => p.id === id) || null
  }
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*, categories(*), subcategories(*)")
      .eq("id", id)
      .single()
    if (error) throw error
    return data
  } catch (error) {
    console.error(`Error fetching product by id ${id}:`, error)
    return null
  }
}

export const getProducts = async (filters?: {
  categoryId?: string
  subcategoryId?: string
  search?: string
  limit?: number
  offset?: number
}): Promise<Product[]> => {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Returning mock products.")
    return [
      {
        id: "1",
        name: "Premium Turmeric Powder",
        description: "High-quality turmeric powder...",
        image_url: "/placeholder.svg?height=300&width=400",
        category_id: "spices",
        subcategory_id: "powder-spices",
        hsn_number: "0910.30",
      },
      {
        id: "2",
        name: "Organic Red Chili Powder",
        description: "Premium organic red chili powder...",
        image_url: "/placeholder.svg?height=300&width=400",
        category_id: "spices",
        subcategory_id: "powder-spices",
        hsn_number: "0904.20",
      },
      {
        id: "3",
        name: "Dehydrated Onion Flakes",
        description: "Premium quality dehydrated onion flakes...",
        image_url: "/placeholder.svg?height=300&width=400",
        category_id: "dehydrated",
        subcategory_id: "vegetables",
        hsn_number: "0712.20",
      },
      {
        id: "4",
        name: "Cold-Pressed Sesame Oil",
        description: "Cold-pressed sesame oil with rich nutty flavor...",
        image_url: "/placeholder.svg?height=300&width=400",
        category_id: "oils",
        subcategory_id: "edible-oils",
        hsn_number: "1515.50",
      },
      {
        id: "5",
        name: "Whole Cumin Seeds",
        description: "Premium quality cumin seeds...",
        image_url: "/placeholder.svg?height=300&width=400",
        category_id: "spices",
        subcategory_id: "whole-spices",
        hsn_number: "0909.31",
      },
      {
        id: "6",
        name: "Natural Sunflower Seeds",
        description: "High-quality sunflower seeds...",
        image_url: "/placeholder.svg?height=300&width=400",
        category_id: "seeds",
        subcategory_id: "oil-seeds",
        hsn_number: "1206.00",
      },
    ]
  }

  try {
    let query = supabase.from("products").select("*, categories(*), subcategories(*)")

    if (filters?.categoryId) query = query.eq("category_id", filters.categoryId)
    if (filters?.subcategoryId) query = query.eq("subcategory_id", filters.subcategoryId)
    if (filters?.search) query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)

    query = query.order("name")
    if (filters?.limit) query = query.limit(filters.limit)
    if (filters?.offset) query = query.range(filters.offset, filters.offset + (filters.limit || 10) - 1)

    const { data, error } = await query
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export const searchProducts = async (searchTerm: string): Promise<Product[]> => {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Returning empty search results.")
    return []
  }
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*, categories(*), subcategories(*)")
      .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
      .order("name")
      .limit(20)
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error searching products:", error)
    return []
  }
}

export const getHarvestCalendar = async (): Promise<HarvestCalendar[]> => {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Returning mock harvest calendar.")
    return [
      {
        id: "1",
        product_name: "Turmeric",
        jan: "Harvest",
        feb: "Processing",
        mar: "Available",
        apr: "Available",
        may: "Available",
        jun: "Available",
        jul: "Available",
        aug: "Available",
        sep: "Available",
        oct: "Planting",
        nov: "Growing",
        dec: "Growing",
        best_month: "January",
        created_at: new Date().toISOString(),
      },
      {
        id: "2",
        product_name: "Red Chili",
        jan: "Available",
        feb: "Harvest",
        mar: "Processing",
        apr: "Available",
        may: "Available",
        jun: "Available",
        jul: "Available",
        aug: "Available",
        sep: "Available",
        oct: "Available",
        nov: "Planting",
        dec: "Growing",
        best_month: "February",
        created_at: new Date().toISOString(),
      },
    ]
  }
  try {
    const { data, error } = await supabase.from("harvest_calendar").select("*").order("product_name")
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error fetching harvest calendar:", error)
    return []
  }
}

export const submitContactForm = async (formData: any) => {
  if (!isSupabaseConfigured()) {
    console.warn("Supabase not configured. Simulating contact form submission.")
    await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate network delay
    return { data: { success: true }, error: null }
  }
  try {
    const { data, error } = await supabase.from("contact_submissions").insert([formData])
    if (error) throw error
    return { data, error }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return { data: null, error }
  }
}
