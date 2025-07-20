import { getProducts } from "@/lib/supabase"
import ProductsClientPage from "./ProductsClientPage"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Our Products | Graha Impex",
  description: "Explore our wide range of export-quality products including Spices, Oils, and more.",
}

function ProductsPageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Skeleton className="h-10 w-1/3 mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-56 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function ProductsPage() {
  const initialProducts = await getProducts({ limit: 12 })

  return (
    <Suspense fallback={<ProductsPageSkeleton />}>
      <ProductsClientPage initialProducts={initialProducts} />
    </Suspense>
  )
}
