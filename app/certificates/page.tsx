import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle, Globe } from "lucide-react"
import Image from "next/image"

export default function CertificatesPage() {
  const certificates = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent quality in our services",
      issuer: "International Organization for Standardization",
      validUntil: "2025",
      category: "Quality Management",
    },
    {
      title: "ISO 14001:2015",
      description: "Environmental Management System certification for sustainable operations",
      issuer: "International Organization for Standardization",
      validUntil: "2025",
      category: "Environmental",
    },
    {
      title: "IATA Cargo Agent",
      description: "International Air Transport Association certification for air cargo handling",
      issuer: "IATA",
      validUntil: "2024",
      category: "Aviation",
    },
    {
      title: "AEO Certification",
      description: "Authorized Economic Operator status for secure and compliant trade",
      issuer: "Customs Authority",
      validUntil: "2026",
      category: "Customs & Trade",
    },
    {
      title: "FIATA Diploma",
      description: "International Federation of Freight Forwarders Associations certification",
      issuer: "FIATA",
      validUntil: "2025",
      category: "Freight Forwarding",
    },
    {
      title: "TAPA FSR",
      description: "Transported Asset Protection Association Freight Security Requirements",
      issuer: "TAPA",
      validUntil: "2024",
      category: "Security",
    },
  ]

  const accreditations = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Excellence Award",
      year: "2023",
      description: "Recognized for outstanding service quality and customer satisfaction",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Excellence",
      year: "2023",
      description: "Awarded for maintaining highest security standards in logistics",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Logistics Partner",
      year: "2022",
      description: "Certified as a trusted global logistics and supply chain partner",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Customer Choice Award",
      year: "2022",
      description: "Voted as the preferred courier service by business customers",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - NO SHIP ANIMATION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Certificates & Accreditations</h1>
            <p className="text-xl md:text-2xl mb-8">
              Our commitment to excellence is validated by industry-leading certifications for our products and services
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards through internationally recognized certifications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <Badge variant="outline">{cert.category}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Issued by:</span>
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Valid until:</span>
                      <span className="font-medium">{cert.validUntil}</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <Image
                      src="/placeholder.svg?height=100&width=150"
                      alt={`${cert.title} certificate`}
                      width={150}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry recognition for our commitment to excellence and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {accreditations.map((award, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">{award.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{award.title}</h3>
                        <Badge>{award.year}</Badge>
                      </div>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Standards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We adhere to international standards and regulations to ensure safe and compliant operations for all our
              products and services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Security Compliance</h3>
              <p className="text-gray-600 text-sm">
                Full compliance with international security standards and regulations
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">International Standards</h3>
              <p className="text-gray-600 text-sm">Adherence to global logistics and transportation standards</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">Continuous quality monitoring and improvement processes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
