import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Box, Shield, Truck, Smartphone, Warehouse, Star, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProductsPage() {
  const productCategories = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Packaging Solutions",
      description: "Premium packaging materials and custom boxes for secure shipping worldwide",
      products: ["Custom Boxes", "Bubble Mailers", "Poly Bags", "Corrugated Boxes"],
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Protective Materials",
      description: "Advanced protective materials to ensure your items arrive safely",
      products: ["Bubble Wrap", "Foam Padding", "Air Cushions", "Fragile Tape"],
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Tracking Technology",
      description: "State-of-the-art tracking devices and monitoring solutions",
      products: ["GPS Trackers", "Smart Sensors", "RFID Tags", "Mobile Apps"],
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      icon: <Box className="h-8 w-8" />,
      title: "Documentation Products",
      description: "Professional shipping labels, forms, and documentation solutions",
      products: ["Shipping Labels", "Customs Forms", "Invoices", "Tracking Numbers"],
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      icon: <Warehouse className="h-8 w-8" />,
      title: "Storage Solutions",
      description: "Comprehensive warehouse and storage management systems",
      products: ["Rack Systems", "Inventory Software", "Barcode Scanners", "Storage Bins"],
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Transportation Equipment",
      description: "Specialized vehicles and equipment for efficient logistics operations",
      products: ["Delivery Vehicles", "Loading Equipment", "Cargo Containers", "Refrigerated Units"],
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
  ]

  const featuredProducts = [
    {
      name: "Smart Tracking System",
      description: "Real-time GPS tracking with mobile app integration",
      price: "$299",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=250&width=300",
      badge: "Best Seller",
    },
    {
      name: "Premium Packaging Kit",
      description: "Complete packaging solution for fragile items",
      price: "$89",
      rating: 4.8,
      reviews: 203,
      image: "/placeholder.svg?height=250&width=300",
      badge: "Popular",
    },
    {
      name: "Temperature Monitor",
      description: "Advanced temperature and humidity monitoring device",
      price: "$199",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=250&width=300",
      badge: "New",
    },
  ]

  const features = [
    { icon: <CheckCircle className="h-6 w-6" />, title: "Quality Assured", description: "ISO certified products" },
    { icon: <Shield className="h-6 w-6" />, title: "Warranty", description: "2-year warranty on all products" },
    { icon: <Truck className="h-6 w-6" />, title: "Fast Delivery", description: "Same-day delivery available" },
    { icon: <Star className="h-6 w-6" />, title: "Expert Support", description: "24/7 technical support" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - NO SHIP ANIMATION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl mb-8">
              Premium logistics products designed for efficiency, security, and reliability
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Request Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and innovative products trusted by thousands of customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>
                  </div>
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive range of logistics products across multiple categories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className={`h-full hover:shadow-lg transition-shadow ${category.featured ? "ring-2 ring-blue-200" : ""}`}
              >
                <div className="relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {category.featured && (
                    <Badge className="absolute top-4 right-4" variant="default">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600">{category.icon}</div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm text-gray-700">Available Products:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {category.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Explore Category
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product is designed with quality, reliability, and customer satisfaction in mind
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Specifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed specifications and technical information for our product range
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Product specifications"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Technical Excellence</h3>
                <p className="text-gray-600 mb-6">
                  Our products are engineered to meet the highest industry standards with rigorous testing and quality
                  control.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">ISO 9001:2015 Certified</h4>
                    <p className="text-gray-600 text-sm">Quality management system certification</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Environmentally Friendly</h4>
                    <p className="text-gray-600 text-sm">Sustainable materials and eco-friendly packaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Global Compliance</h4>
                    <p className="text-gray-600 text-sm">Meets international shipping and safety standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Advanced Technology</h4>
                    <p className="text-gray-600 text-sm">Latest technology integration for optimal performance</p>
                  </div>
                </div>
              </div>
              <Button size="lg">Download Product Catalog</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Order Our Products?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with our product specialists to find the perfect solutions for your logistics needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Request Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
