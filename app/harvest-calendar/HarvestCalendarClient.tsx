"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar, Leaf, Info } from "lucide-react"
import { getHarvestCalendar } from "@/lib/supabase"

// Simplified harvest data
const staticHarvestData = [
  { name: "Basmati Rice", months: [false, false, false, false, false, false, false, false, true, true, true, true] },
  {
    name: "Turmeric Finger",
    months: [true, true, true, false, false, false, false, false, false, false, false, false],
  },
  { name: "Dry Chilli", months: [true, true, true, false, false, false, false, false, false, true, true, true] },
  { name: "Cardamom", months: [false, false, false, false, false, false, false, true, true, true, true, true] },
  {
    name: "Big Cardamom",
    months: [false, false, false, false, false, false, false, false, false, true, true, true],
  },
  {
    name: "Coffee",
    months: [true, true, true, false, false, false, false, false, false, false, true, true],
  },
  {
    name: "Dehydrated Onion",
    months: [true, true, true, true, false, false, false, false, false, false, false, false],
  },
  { name: "Sesame Seeds", months: [false, false, false, true, true, false, false, false, true, true, false, false] },
  { name: "Cumin Seeds", months: [false, true, true, false, false, false, false, false, false, false, false, false] },
  { name: "Fennel Seeds", months: [false, true, true, false, false, false, false, false, false, false, false, false] },
  { name: "Fenugreek", months: [false, true, true, false, false, false, false, false, false, false, false, false] },
  { name: "Coriander Seeds", months: [false, true, true, false, false, false, false, false, false, false, false, false] },
  { name: "Cheakpeas", months: [true, true, true, true, false, false, false, false, false, false, false, false] },
  { name: "Ground Nut Kernels", months: [false, false, false, true, true, false, false, false, true, true, false, true] },
  { name: "Ground Nut Kernels", months: [true, true, true, false, false, false, false, false, false, false, false, true] },
]

const months = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
]

export default function HarvestCalendarClient() {
  const [harvestData, setHarvestData] = useState(staticHarvestData)
  const [loading, setLoading] = useState(false)

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
              "Simple agricultural harvesting chart showing seasonal availability and harvest timing for spices and seeds.",
            url: "https://grahaimpex.com/harvest-calendar",
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">Agricultural Harvesting Chart</h1>
              <p className="text-lg text-white/90">
                View our product availability and harvest seasons throughout the year
              </p>
            </div>
          </div>
        </section>

        {/* Legend Section */}
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Info className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">How to Read This Chart</h3>
              </div>
              <p className="text-gray-600">
                🌾 indicate when each product is in harvest season and available for procurement.
              </p>
            </div>
          </div>
        </section>

        {/* Main Harvest Table */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-full">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Product Harvest Calendar</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100 border-b-2 border-gray-300">
                          <th className="px-6 py-4 text-left font-bold text-gray-900 border-r border-gray-200 min-w-48">
                            PRODUCTS
                          </th>
                          {months.map((month) => (
                            <th
                              key={month}
                              className="px-3 py-4 text-center font-bold text-gray-900 border-r border-gray-200 text-sm"
                            >
                              {month}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {harvestData.map((product, index) => (
                          <tr key={product.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-6 py-4 font-bold text-gray-900 border-r border-gray-200">
                              {product.name}
                            </td>
                            {product.months.map((isHarvest, monthIndex) => (
                              <td key={monthIndex} className="px-3 py-4 text-center border-r border-gray-200">
                                {isHarvest ? (
                                  <span className="text-2xl">🌾</span>
                                ) : (
                                  <span className="text-gray-300">–</span>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Our Harvest Calendar</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Planning Your Procurement</h3>
                  <p className="text-gray-600">
                    Use this chart to plan your orders and ensure you're sourcing products during their peak harvest
                    season for maximum freshness and quality.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Quality Assurance</h3>
                  <p className="text-gray-600">
                    Products harvested during their designated seasons undergo rigorous quality control and processing
                    to meet international export standards.
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
