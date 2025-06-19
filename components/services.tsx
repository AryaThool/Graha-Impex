import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Plane, Package, Globe } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Express Delivery",
      description: "Fast and reliable same-day and next-day delivery services for urgent shipments",
      features: ["Same-day delivery", "Real-time tracking", "Proof of delivery"],
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "International Shipping",
      description: "Worldwide shipping solutions with customs clearance and door-to-door delivery",
      features: ["Global network", "Customs handling", "Competitive rates"],
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Freight Services",
      description: "Cost-effective freight solutions for large shipments and bulk cargo",
      features: ["Sea & air freight", "Warehousing", "Supply chain"],
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Specialized services for online retailers and e-commerce businesses",
      features: ["Fulfillment services", "Returns management", "API integration"],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive logistics solutions tailored to meet your specific shipping and delivery needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
