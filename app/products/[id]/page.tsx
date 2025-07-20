import { getProductById, getProducts } from "@/lib/supabase"
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Calendar, FlaskConical, Leaf, ShieldCheck, Package, Info, Sparkles, HeartPulse } from "lucide-react"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id)
  if (!product) return { title: "Product Not Found" }
  return {
    title: `${product.name} | Graha Impex`,
    description: product.description || `High-quality ${product.name} exported by Graha Impex.`,
    keywords: [product.name, product.categories?.name, product.subcategories?.name, "export", "India"].filter(
      Boolean,
    ) as string[],
    openGraph: {
      title: product.name,
      description: product.description || "",
      images: [{ url: product.image_url, width: 1200, height: 630, alt: product.name }],
    },
  }
}

export async function generateStaticParams() {
  const products = await getProducts({ limit: 100 })
  return products.map((product) => ({ id: product.id }))
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProductById(params.id)
  if (!product) notFound()

  const specifications = [
    { icon: <Globe className="h-5 w-5 text-blue-500" />, label: "Origin", value: product.origin },
    {
      icon: <Calendar className="h-5 w-5 text-green-500" />,
      label: "Harvesting Season",
      value: product.harvesting_season,
    },
    { icon: <FlaskConical className="h-5 w-5 text-purple-500" />, label: "Purity", value: product.purity },
    { icon: <Leaf className="h-5 w-5 text-yellow-500" />, label: "Flavour", value: product.flavour },
    { icon: <ShieldCheck className="h-5 w-5 text-red-500" />, label: "GMO Status", value: product.gmo_status },
    { icon: <Package className="h-5 w-5 text-gray-500" />, label: "Minimum Order Quantity", value: product.moq },
    { icon: <Info className="h-5 w-5 text-indigo-500" />, label: "HSN Number", value: product.hsn_number },
  ].filter((spec) => spec.value)

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg sticky top-24">
              <div className="relative w-full aspect-square">
                <Image
                  src={product.image_url || "/placeholder.svg?height=600&width=600"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-2 mb-4">
              {product.categories && <Badge variant="outline">{product.categories.name}</Badge>}
              {product.subcategories && <Badge variant="secondary">{product.subcategories.name}</Badge>}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-8">{product.description}</p>

            <Card className="mb-8 bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl">Product Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {specifications.map((spec) => (
                    <li key={spec.label} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">{spec.icon}</div>
                      <div>
                        <span className="font-semibold text-gray-700">{spec.label}</span>
                        <p className="text-gray-600">{spec.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {product.product_description && (
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-blue-500" />
                      Detailed Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none text-gray-700">{product.product_description}</div>
                  </CardContent>
                </Card>
              )}
              {product.benefits && (
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HeartPulse className="h-6 w-6 text-green-500" />
                      Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none text-gray-700">{product.benefits}</div>
                  </CardContent>
                </Card>
              )}
              {product.home_remedies && (
                <Card className="bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-6 w-6 text-yellow-600" />
                      Home Remedies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none text-gray-700">{product.home_remedies}</div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
