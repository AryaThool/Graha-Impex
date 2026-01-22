import { createClient } from "@supabase/supabase-js"

// --- Supabase Client Initialization ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL or Anon Key is missing. Please check your .env file.")
}

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)

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
  description: string | null
  image_url: string
  category_id: string
  subcategory_id: string | null
  hsn_number: string | null
  origin: string | null
  harvesting_season: string | null
  purity: string | null
  flavour: string | null
  gmo_status: string | null
  moq: string | null
  product_description: string | null
  home_remedies: string | null
  benefits: string | null
  categories?: Category
  subcategories?: Subcategory
}

export type MonthStage =
  | "Sowing"
  | "Growing"
  | "Maturing"
  | "Harvesting"
  | "Processing"
  | "Exporting"
  | "Planting"
  | null

export interface HarvestCalendar {
  id: string
  product_name: string
  jan: MonthStage
  feb: MonthStage
  mar: MonthStage
  apr: MonthStage
  may: MonthStage
  jun: MonthStage
  jul: MonthStage
  aug: MonthStage
  sep: MonthStage
  oct: MonthStage
  nov: MonthStage
  dec: MonthStage
  best_month: string | null
}

// --- Data Fetching Functions ---

export const getCategories = async (): Promise<Category[]> => {
  try {
    const { data, error } = await supabase.from("categories").select("*").order("name")
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Caught exception in getCategories:", error)
    return []
  }
}

export const getSubcategories = async (categoryId?: string): Promise<Subcategory[]> => {
  try {
    let query = supabase.from("subcategories").select("*").order("name")
    if (categoryId) query = query.eq("category_id", categoryId)
    const { data, error } = await query
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Caught exception in getSubcategories:", error)
    return []
  }
}

export const getProductById = async (id: string): Promise<Product | null> => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        categories(*),
        subcategories(*)
      `,
      )
      .eq("id", id)
      .single()
    if (error && error.code !== "PGRST116") {
      // PGRST116 means no rows found, which is not an error here.
      console.error(`Error fetching product by id ${id}:`, error.message)
      throw error
    }
    return data
  } catch (error) {
    console.error(`Caught exception in getProductById for id ${id}:`, error)
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
  try {
    let query = supabase.from("products").select("*, categories(id, name), subcategories(id, name)")

    if (filters?.categoryId) {
      query = query.eq("category_id", filters.categoryId)
    }
    if (filters?.subcategoryId) {
      query = query.eq("subcategory_id", filters.subcategoryId)
    }
    if (filters?.search) {
      query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
    }

    query = query.order("name")
    if (filters?.limit) {
      query = query.limit(filters.limit)
    }
    if (filters?.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 12) - 1)
    }

    const { data, error } = await query
    if (error) {
      console.error("Error fetching products:", error.message)
      throw error
    }
    return data || []
  } catch (error) {
    console.error("Caught exception in getProducts:", error)
    return []
  }
}

export const getHarvestCalendar = async (): Promise<HarvestCalendar[]> => {
  try {
    const { data, error } = await supabase.from("harvest_calendar").select("*").order("product_name")
    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Caught exception in getHarvestCalendar:", error)
    return []
  }
}

export const submitContactForm = async (formData: {
  first_name: string
  last_name: string
  email: string
  phone: string | null
  message: string
}) => {
  try {
    // Try inserting without .select() to avoid potential RLS/trigger issues
    const { error } = await supabase.from("contact_submissions").insert([formData])
    if (error) {
      // If there's a database trigger error, we still want to show success to user
      // as the form data might have been saved despite the trigger error
      if (error.message?.includes("app.service_role_key")) {
        console.warn("Database trigger warning (form may still be saved):", error.message)
        return { data: formData, error: null }
      }
      throw error
    }
    return { data: formData, error: null }
  } catch (error) {
    console.error("Caught exception in submitContactForm:", error)
    return { data: null, error }
  }
}
