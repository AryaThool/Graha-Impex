"use client"

import { Badge } from "@/components/ui/badge"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, Leaf, TrendingUp, Info } from "lucide-react"
import { getHarvestCalendar, type HarvestCalendar } from "@/lib/supabase"

export default function HarvestCalendarClient() {
  const [harvestData, setHarvestData] = useState<HarvestCalendar[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadHarvestData()
  }, [])

  const loadHarvestData = async () => {
    try {
      setLoading(true)
      const data = await getHarvestCalendar()
      setHarvestData(data)
    } catch (error) {
      console.error("Error loading harvest calendar:", error)
    } finally {
      setLoading(false)
    }
  }

  const months = [
    { key: "jan", name: "Jan" },
    { key: "feb", name: "Feb" },
    { key: "mar", name: "Mar" },
    { key: "apr", name: "Apr" },
    { key: "may", name: "May" },
    { key: "jun", name: "Jun" },
    { key: "jul", name: "Jul" },
    { key: "aug", name: "Aug" },
    { key: "sep", name: "Sep" },
    { key: "oct", name: "Oct" },
    { key: "nov", name: "Nov" },
    { key: "dec", name: "Dec" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sowing":
        return "bg-green-100 text-green-800 border-green-200"
      case "Growing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Maturing":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Harvesting":
        return "bg-red-100 text-red-800 border-red-200"
      case "Processing":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Exporting":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-white text-gray-400 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Sowing":
        return "🌱"
      case "Growing":
        return "🌿"
      case "Maturing":
        return "🌾"
      case "Harvesting":
        return "🚜"
      case "Processing":
        return "⚙️"
      case "Exporting":
        return "📦"
      default:
        return ""
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Skeleton className="h-12 w-96 mx-auto mb-4 bg-white/20" />
              <Skeleton className="h-6 w-full max-w-2xl mx-auto bg-white/20" />
            </div>
          </div>
        </section>

        {/* Loading Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-16 w-full" />
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <>
      {/* Harvest Calendar Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Agricultural Harvesting Calendar - Graha Impex",
            description:
              "Comprehensive harvesting calendar for Indian agricultural products and spices export planning.",
            url: "https://grahaimpex.com/harvest-calendar",
            mainEntity: {
              "@type": "Dataset",
              name: "Agricultural Harvest Calendar",
              description: "Seasonal availability and harvesting schedule for Indian agricultural products",
              creator: {
                "@type": "Organization",
                name: "Graha Impex",
              },
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
                  name: "Harvest Calendar",
                  item: "https://grahaimpex.com/harvest-calendar",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="h-12 w-12" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Harvesting Calendar</h2>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Plan your export orders with our comprehensive seasonal availability guide for Indian agricultural
                products
              </p>
            </div>
          </div>
        </section>

        {/* Legend Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Info className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Activity Legend</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { status: "Sowing", icon: "🌱" },
                  { status: "Growing", icon: "🌿" },
                  { status: "Maturing", icon: "🌾" },
                  { status: "Harvesting", icon: "🚜" },
                  { status: "Processing", icon: "⚙️" },
                  { status: "Exporting", icon: "📦" },
                ].map((item) => (
                  <div
                    key={item.status}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium ${getStatusColor(
                      item.status,
                    )}`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Table Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full mx-auto">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                    <Leaf className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-600">{harvestData.length}</div>
                    <p className="text-xs text-gray-600">Agricultural products tracked</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Peak Season</CardTitle>
                    <TrendingUp className="h-4 w-4 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-orange-600">Sep-Oct</div>
                    <p className="text-xs text-gray-600">Highest harvesting activity</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Export Ready</CardTitle>
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-blue-600">Year Round</div>
                    <p className="text-xs text-gray-600">Continuous availability</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Calendar Table - Responsive Design */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Agricultural Harvesting Calendar 2024
                  </CardTitle>
                  <p className="text-gray-600">Seasonal availability and processing schedule for our export products</p>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Desktop Table */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      {/* Table Header */}
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200 w-48">
                            Product Name
                          </th>
                          {months.map((month) => (
                            <th
                              key={month.key}
                              className="px-2 py-3 text-center text-xs font-semibold text-gray-900 w-20"
                            >
                              {month.name}
                            </th>
                          ))}
                          <th className="px-3 py-3 text-center text-xs font-semibold text-gray-900 bg-gray-100 w-32">
                            Best Month
                          </th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody className="bg-white divide-y divide-gray-200">
                        {harvestData.map((product, index) => (
                          <tr key={product.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                            {/* Product Name */}
                            <td className="px-4 py-3 text-xs font-medium text-gray-900 border-r border-gray-200">
                              <div className="flex items-center gap-1">
                                <span className="text-sm">🌾</span>
                                <span className="capitalize leading-tight">{product.product_name}</span>
                              </div>
                            </td>

                            {/* Month Columns */}
                            {months.map((month) => {
                              const status = product[month.key as keyof HarvestCalendar] as string
                              return (
                                <td key={month.key} className="px-1 py-3 text-center">
                                  {status && (
                                    <div
                                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium border ${getStatusColor(
                                        status,
                                      )}`}
                                      title={status}
                                    >
                                      <span className="text-sm">{getStatusIcon(status)}</span>
                                    </div>
                                  )}
                                </td>
                              )
                            })}

                            {/* Best Month */}
                            <td className="px-3 py-3 text-center bg-gray-100">
                              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold text-gray-900 bg-yellow-100 border border-yellow-300">
                                <span>⭐</span>
                                <span className="hidden xl:inline">{product.best_month || "N/A"}</span>
                                <span className="xl:hidden">
                                  {product.best_month?.split("-")[0] || product.best_month}
                                </span>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile/Tablet Cards */}
                  <div className="lg:hidden p-4 space-y-4">
                    {harvestData.map((product, index) => (
                      <Card key={product.id} className="border border-gray-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base font-bold text-gray-900 flex items-center gap-2">
                            <span className="text-lg">🌾</span>
                            <span className="capitalize">{product.product_name}</span>
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Best Month:</span>
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 font-medium">
                              ⭐ {product.best_month || "N/A"}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="grid grid-cols-6 gap-2">
                            {months.map((month) => {
                              const status = product[month.key as keyof HarvestCalendar] as string
                              return (
                                <div key={month.key} className="text-center">
                                  <div className="text-xs font-medium text-gray-600 mb-1">{month.name}</div>
                                  {status ? (
                                    <div
                                      className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium border ${getStatusColor(
                                        status,
                                      )}`}
                                      title={status}
                                    >
                                      <span className="text-sm">{getStatusIcon(status)}</span>
                                    </div>
                                  ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"></div>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                  <Info className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">
                    Calendar updated monthly based on seasonal patterns and agricultural data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
