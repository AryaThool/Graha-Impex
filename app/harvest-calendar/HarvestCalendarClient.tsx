"use client"

import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, Leaf, TrendingUp, Info, Download, FileText, Clock, MapPin } from "lucide-react"
import { getHarvestCalendar, type HarvestCalendar } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

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
    { key: "jan", name: "Jan", fullName: "January" },
    { key: "feb", name: "Feb", fullName: "February" },
    { key: "mar", name: "Mar", fullName: "March" },
    { key: "apr", name: "Apr", fullName: "April" },
    { key: "may", name: "May", fullName: "May" },
    { key: "jun", name: "Jun", fullName: "June" },
    { key: "jul", name: "Jul", fullName: "July" },
    { key: "aug", name: "Aug", fullName: "August" },
    { key: "sep", name: "Sep", fullName: "September" },
    { key: "oct", name: "Oct", fullName: "October" },
    { key: "nov", name: "Nov", fullName: "November" },
    { key: "dec", name: "Dec", fullName: "December" },
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
      {/* Enhanced Harvest Calendar Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Agricultural Harvesting Chart India 2024 | Complete Crop Calendar",
            description:
              "Comprehensive agricultural harvesting chart for India showing seasonal availability, planting schedule, and harvest timing for spices, seeds, and food products.",
            url: "https://grahaimpex.com/harvest-calendar",
            mainEntity: {
              "@type": "Dataset",
              name: "Indian Agricultural Harvesting Chart 2024",
              description:
                "Complete seasonal harvesting calendar for Indian agricultural products including spices, seeds, oils, and food crops with monthly activity tracking",
              creator: {
                "@type": "Organization",
                name: "Graha Impex",
                url: "https://grahaimpex.com",
              },
              keywords:
                "harvesting chart, agricultural calendar, crop calendar, harvest seasons, India agriculture, spices harvest, export planning",
              spatialCoverage: {
                "@type": "Place",
                name: "India",
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 20.5937,
                  longitude: 78.9629,
                },
              },
              temporalCoverage: "2024",
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "text/html",
                contentUrl: "https://grahaimpex.com/harvest-calendar",
              },
            },
            about: [
              {
                "@type": "Thing",
                name: "Agricultural Harvesting",
                description: "The process of gathering mature crops from fields",
              },
              {
                "@type": "Thing",
                name: "Crop Calendar",
                description: "Seasonal schedule showing when to plant, grow, and harvest crops",
              },
              {
                "@type": "Thing",
                name: "Indian Agriculture",
                description: "Agricultural practices and crop production in India",
              },
            ],
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
                  name: "Agricultural Harvesting Chart",
                  item: "https://grahaimpex.com/harvest-calendar",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Enhanced Hero Section with SEO Content */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Calendar className="h-12 w-12" />
                <Leaf className="h-12 w-12" />
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                Agricultural Harvesting Chart
              </h1>
              

              {/* SEO-rich feature highlights */}
             
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
       

        {/* Legend Section */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <Info className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Agricultural Activity Legend</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our <strong>harvesting chart</strong> uses color-coded indicators to show different agricultural
                activities throughout the year:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { status: "Sowing", icon: "🌱", description: "Planting season" },
                  { status: "Growing", icon: "🌿", description: "Growth period" },
                  { status: "Maturing", icon: "🌾", description: "Maturation phase" },
                  { status: "Harvesting", icon: "🚜", description: "Harvest time" },
                  { status: "Processing", icon: "⚙️", description: "Post-harvest processing" },
                  { status: "Exporting", icon: "📦", description: "Export ready" },
                ].map((item) => (
                  <div
                    key={item.status}
                    className={`flex flex-col items-center gap-2 px-3 py-4 rounded-lg border text-sm font-medium ${getStatusColor(
                      item.status,
                    )}`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.status}</span>
                    <span className="text-xs text-center opacity-80">{item.description}</span>
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
              {/* Enhanced Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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
                    <CardTitle className="text-sm font-medium">Peak Harvest</CardTitle>
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

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Coverage</CardTitle>
                    <MapPin className="h-4 w-4 text-purple-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-purple-600">All India</div>
                    <p className="text-xs text-gray-600">Pan-India agricultural data</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Calendar Table - Enhanced with SEO content */}
              <Card className="shadow-xl">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <Calendar className="h-6 w-6 text-blue-600" />
                        Complete Agricultural Harvesting Chart 2024
                      </CardTitle>
                      <p className="text-gray-600 mt-2">
                        Comprehensive <strong>crop calendar</strong> showing seasonal availability and processing
                        schedule for Indian agricultural exports
                      </p>
                    </div>
                   
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Desktop Table */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full">
                      {/* Table Header */}
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 border-r border-gray-200 w-48">
                            Agricultural Product
                          </th>
                          {months.map((month) => (
                            <th
                              key={month.key}
                              className="px-2 py-3 text-center text-xs font-semibold text-gray-900 w-20"
                              title={`${month.fullName} activities`}
                            >
                              {month.name}
                            </th>
                          ))}
                          <th className="px-3 py-3 text-center text-xs font-semibold text-gray-900 bg-gray-100 w-32">
                            Best Harvest Month
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
                                <span
                                  className="capitalize leading-tight"
                                  title={`${product.product_name} harvesting schedule`}
                                >
                                  {product.product_name}
                                </span>
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
                                      title={`${product.product_name} - ${status} in ${month.fullName}`}
                                    >
                                      <span className="text-sm">{getStatusIcon(status)}</span>
                                    </div>
                                  )}
                                </td>
                              )
                            })}

                            {/* Best Month */}
                            <td className="px-3 py-3 text-center bg-gray-100">
                              <span
                                className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold text-gray-900 bg-yellow-100 border border-yellow-300"
                                title={`Best harvesting time for ${product.product_name}`}
                              >
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
                            <span className="text-sm text-gray-600">Best Harvest Month:</span>
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
                                      title={`${status} in ${month.fullName}`}
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

              {/* SEO-rich Additional Information */}
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    How to Use This Harvesting Chart
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Our <strong>agricultural harvesting chart</strong> provides month-by-month activity tracking for
                      each crop:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>
                        • <strong>Sowing</strong>: Best time to plant seeds
                      </li>
                      <li>
                        • <strong>Growing</strong>: Active growth period
                      </li>
                      <li>
                        • <strong>Maturing</strong>: Crop development phase
                      </li>
                      <li>
                        • <strong>Harvesting</strong>: Optimal harvest timing
                      </li>
                      <li>
                        • <strong>Processing</strong>: Post-harvest activities
                      </li>
                      <li>
                        • <strong>Exporting</strong>: Ready for export
                      </li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Benefits for Exporters & Farmers
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      This <strong>crop calendar 2024</strong> helps you:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Plan procurement schedules effectively</li>
                      <li>• Optimize export timing for best prices</li>
                      <li>• Coordinate with farmers for bulk orders</li>
                      <li>• Manage inventory and storage requirements</li>
                      <li>• Ensure quality by harvesting at right time</li>
                      <li>• Meet international delivery commitments</li>
                    </ul>
                  </div>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm">
                  <Info className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">
                    <strong>Harvesting chart</strong> updated monthly based on Indian agricultural patterns and climate
                    data
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                Frequently Asked Questions About Agricultural Harvesting Chart
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    What is an agricultural harvesting chart?
                  </h3>
                  <p className="text-gray-700">
                    An <strong>agricultural harvesting chart</strong> is a comprehensive calendar that shows the optimal
                    timing for planting, growing, and harvesting different crops throughout the year. Our chart covers
                    over 30 Indian agricultural products including spices, seeds, and oils.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    When is the best time to harvest cumin in India?
                  </h3>
                  <p className="text-gray-700">
                    According to our <strong>cumin harvesting season</strong> data, cumin is typically harvested in
                    January in India, with processing continuing through February and March. The best harvest month for
                    cumin is January.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    How accurate is this crop calendar for export planning?
                  </h3>
                  <p className="text-gray-700">
                    Our <strong>crop calendar 2024</strong> is based on extensive agricultural data from across India
                    and is updated monthly. It's specifically designed for export planning and has been used
                    successfully by numerous agricultural exporters for procurement and delivery scheduling.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Which months have the highest harvesting activity in India?
                  </h3>
                  <p className="text-gray-700">
                    Based on our <strong>harvesting chart</strong>, September and October show the highest harvesting
                    activity across multiple crops including turmeric, coriander, and various oil seeds. This makes it
                    the peak season for agricultural procurement in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
