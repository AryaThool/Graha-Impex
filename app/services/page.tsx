import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Plane, Ship, Package, Clock, Shield, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Express Delivery",
      description: "Fast and reliable same-day and next-day delivery services for urgent shipments",
      features: ["Same-day delivery", "Real-time tracking", "Proof of delivery", "Insurance coverage"],
      price: "Starting from $15",
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "International Shipping",
      description: "Worldwide shipping solutions with customs clearance and door-to-door delivery",
      features: ["Global network", "Customs handling", "Multi-modal transport", "Competitive rates"],
      price: "Starting from $25",
    },
    {
      icon: <Ship className="h-8 w-8" />,
      title: "Freight Services",
      description: "Cost-effective freight solutions for large shipments and bulk cargo",
      features: ["Sea freight", "Air freight", "Land transport", "Warehousing"],
      price: "Custom quotes",
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "E-commerce Solutions",
      description: "Specialized services for online retailers and e-commerce businesses",
      features: ["Fulfillment services", "Returns management", "COD services", "API integration"],
      price: "Starting from $8",
    },
  ]

  const features = [
    { icon: <Clock className="h-6 w-6" />, title: "24/7 Support", description: "Round-the-clock customer service" },
    { icon: <Shield className="h-6 w-6" />, title: "Secure Handling", description: "Safe and secure package handling" },
    { icon: <Globe className="h-6 w-6" />, title: "Global Network", description: "Worldwide delivery coverage" },
    { icon: <Zap className="h-6 w-6" />, title: "Fast Processing", description: "Quick pickup and processing" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8">Comprehensive logistics solutions tailored to your needs</p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From express delivery to international freight, we provide comprehensive logistics solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{service.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver more than just packages - we deliver peace of mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-white rounded-lg shadow-sm mb-4 inline-block">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started today and experience the difference of professional logistics services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Track Package
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
