"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, CheckCircle, FileText, Verified, Eye, X } from "lucide-react"
import Image from "next/image"

export default function CertificatesClient() {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null)

  const certificates = [
    {
      id: "gst",
      name: "GST Registration",
      fullName: "Goods and Services Tax Registration",
      authority: "Government of India",
      description: "Official GST registration enabling legal business operations and tax compliance across India",
      image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/certificate-images//GST.jpg",
      validUntil: "Permanent",
      registrationNumber: "27XXXXX1234X1ZX",
      issuedDate: "2020",
      category: "Tax Registration",
      importance: "Essential for all business transactions in India",
      benefits: [
        "Legal business operations",
        "Input tax credit eligibility",
        "Interstate trade authorization",
        "Government tender participation",
      ],
      color: "blue",
      priority: 1,
    },
    {
      id: "fssai",
      name: "FSSAI License",
      fullName: "Food Safety and Standards Authority of India License",
      authority: "FSSAI, Government of India",
      description:
        "Food safety license ensuring compliance with Indian food safety standards for manufacturing and export",
      image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/certificate-images//fssai-logo.jpg",
      validUntil: "2026",
      registrationNumber: "12345678901234",
      issuedDate: "2021",
      category: "Food Safety",
      importance: "Mandatory for food business operations",
      benefits: [
        "Food safety compliance",
        "Consumer trust assurance",
        "Export eligibility",
        "Quality standard certification",
      ],
      color: "green",
      priority: 2,
    },
    {
      id: "import-export",
      name: "Import Export Certificate",
      fullName: "Import Export Code (IEC) Certificate",
      authority: "Directorate General of Foreign Trade (DGFT)",
      description: "Essential certificate for conducting import and export business operations in India",
      image:
        "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/certificate-images//import-export-certificate.png",
      validUntil: "Permanent",
      registrationNumber: "1234567890",
      issuedDate: "2020",
      category: "Trade License",
      importance: "Mandatory for international trade",
      benefits: [
        "International trade authorization",
        "Customs clearance facilitation",
        "Export incentive eligibility",
        "Foreign exchange compliance",
      ],
      color: "purple",
      priority: 3,
    },
    {
      id: "msme",
      name: "MSME Udyam Registration",
      fullName: "Micro, Small and Medium Enterprises Udyam Registration",
      authority: "Ministry of MSME, Government of India",
      description: "Official MSME registration providing various benefits and support for small and medium enterprises",
      image:
        "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/certificate-images//msme-udyam-registration.jpg",
      validUntil: "Permanent",
      registrationNumber: "UDYAM-MH-12-1234567",
      issuedDate: "2021",
      category: "Enterprise Registration",
      importance: "Provides MSME benefits and support",
      benefits: ["Government scheme eligibility", "Loan facility access", "Tax benefits", "Tender preference"],
      color: "orange",
      priority: 4,
    },
    {
      id: "apeda",
      name: "APEDA Registration",
      fullName: "Agricultural and Processed Food Products Export Development Authority",
      authority: "APEDA, Government of India",
      description: "Registration with APEDA for export of agricultural and processed food products",
      image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/certificate-images//Apeda-logo.jpg",
      validUntil: "2025",
      registrationNumber: "AP/EXP/2021/12345",
      issuedDate: "2021",
      category: "Export Authorization",
      importance: "Essential for agricultural exports",
      benefits: [
        "Agricultural export authorization",
        "Export promotion support",
        "Market development assistance",
        "Quality certification support",
      ],
      color: "emerald",
      priority: 5,
    },
    {
      id: "icegate",
      name: "ICEGATE Registration",
      fullName: "Indian Customs Electronic Commerce/Electronic Data Interchange Gateway",
      authority: "Indian Customs, Government of India",
      description: "Digital platform registration for customs clearance and trade facilitation",
      image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/certificate-images//ICEGATE.jpeg",
      validUntil: "Active",
      registrationNumber: "ICE123456789",
      issuedDate: "2020",
      category: "Customs Registration",
      importance: "Digital customs clearance platform",
      benefits: ["Online customs clearance", "Faster processing", "Digital documentation", "Real-time tracking"],
      color: "cyan",
      priority: 6,
    },
    {
      id: "spices-board",
      name: "Spices Board Registration",
      fullName: "Spices Board of India Registration",
      authority: "Spices Board, Government of India",
      description: "Registration for export of spices and spice products under Spices Board regulations",
      image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/certificate-images//SPICES-BOARD.jpeg",
      validUntil: "2025",
      registrationNumber: "SB/EXP/2021/5678",
      issuedDate: "2021",
      category: "Commodity Registration",
      importance: "Mandatory for spices export",
      benefits: [
        "Spices export authorization",
        "Quality assurance",
        "Market promotion support",
        "Research and development access",
      ],
      color: "red",
      priority: 7,
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50 text-blue-800",
      green: "border-green-200 bg-green-50 text-green-800",
      purple: "border-purple-200 bg-purple-50 text-purple-800",
      orange: "border-orange-200 bg-orange-50 text-orange-800",
      emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
      cyan: "border-cyan-200 bg-cyan-50 text-cyan-800",
      red: "border-red-200 bg-red-50 text-red-800",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate)
  }

  const closeCertificateModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <>
      {/* Certificates Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Certifications & Registrations - Graha Impex",
            description:
              "Official certifications and registrations of Graha Impex including FSSAI, APEDA, MSME, and other regulatory compliance certificates.",
            url: "https://grahaimpex.com/certificates",
            mainEntity: {
              "@type": "Organization",
              name: "Graha Impex",
              hasCredential: certificates.map((cert) => ({
                "@type": "EducationalOccupationalCredential",
                name: cert.fullName,
                credentialCategory: cert.category,
                recognizedBy: {
                  "@type": "Organization",
                  name: cert.authority,
                },
                dateCreated: cert.issuedDate,
                expires: cert.validUntil !== "Permanent" && cert.validUntil !== "Active" ? cert.validUntil : undefined,
              })),
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
                  name: "Certificates",
                  item: "https://grahaimpex.com/certificates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="h-12 w-12" />
                <Award className="h-12 w-12" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Certifications & Registrations</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Officially certified and registered with all major regulatory bodies for safe and legal export
                operations
              </p>
              <div className="flex items-center justify-center gap-2 text-lg">
                <Verified className="h-6 w-6 text-green-300" />
                <span>100% Compliant • Fully Authorized • Trusted Exporter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-6">
                  <FileText className="w-5 h-5 mr-2 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">Official Documentation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Official
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Certifications & Registrations
                  </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Graha Impex is officially certified and registered with all major regulatory bodies, ensuring complete
                  compliance for international food exports from India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates
                  .sort((a, b) => a.priority - b.priority)
                  .map((certificate) => (
                    <Card
                      key={certificate.id}
                      className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border border-gray-200 overflow-hidden"
                    >
                      <div className="relative">
                        {/* Certificate Image */}
                        <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                          <Image
                            src={certificate.image || "/placeholder.svg"}
                            alt={`${certificate.fullName} Certificate`}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.src = "/placeholder.svg?height=200&width=300"
                            }}
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                          {/* View Button */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Button
                              onClick={() => openCertificateModal(certificate)}
                              size="sm"
                              className="bg-white/90 text-gray-900 hover:bg-white transform scale-90 group-hover:scale-100 transition-all duration-300"
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </div>

                          {/* Priority Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge className={`${getColorClasses(certificate.color)} border font-medium`}>
                              {certificate.category}
                            </Badge>
                          </div>

                          {/* Status Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-green-100 text-green-800 border-green-200 font-medium">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Active
                            </Badge>
                          </div>
                        </div>

                        {/* Certificate Info */}
                        <CardHeader className="pb-4">
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {certificate.name}
                          </CardTitle>
                          <p className="text-sm text-gray-600 font-medium">{certificate.authority}</p>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <p className="text-gray-700 text-sm mb-4 line-clamp-3">{certificate.description}</p>

                          <div className="pt-4">
                            <Button
                              onClick={() => openCertificateModal(certificate)}
                              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                              size="sm"
                            >
                              <FileText className="h-4 w-4 mr-2" />
                              View Certificate Details
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Statement */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <Shield className="h-16 w-16 mx-auto mb-6 text-blue-200" />
              <h2 className="text-3xl font-bold mb-6">100% Regulatory Compliance</h2>
              <p className="text-xl mb-8 text-blue-100">
                All our certifications are current, valid, and regularly renewed to ensure continuous compliance with
                Indian and international export regulations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-300" />
                  <h3 className="font-semibold mb-1">Food Safety Certified</h3>
                  <p className="text-sm text-blue-200">FSSAI approved for food exports</p>
                </div>
                <div>
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-300" />
                  <h3 className="font-semibold mb-1">Export Authorized</h3>
                  <p className="text-sm text-blue-200">APEDA & DGFT registered</p>
                </div>
                <div>
                  <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-300" />
                  <h3 className="font-semibold mb-1">Tax Compliant</h3>
                  <p className="text-sm text-blue-200">GST & MSME registered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900">{selectedCertificate.fullName}</h3>
              <Button variant="ghost" size="icon" onClick={closeCertificateModal} className="hover:bg-gray-100">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Certificate Image */}
                <div>
                  <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={selectedCertificate.image || "/placeholder.svg"}
                      alt={`${selectedCertificate.fullName} Certificate`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-6">
                  <div>
                    <Badge className={`${getColorClasses(selectedCertificate.color)} border font-medium mb-4`}>
                      {selectedCertificate.category}
                    </Badge>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedCertificate.name}</h4>
                    <p className="text-gray-600 mb-4">{selectedCertificate.description}</p>
                    <p className="text-sm text-blue-600 font-medium">{selectedCertificate.importance}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Issuing Authority</label>
                      <p className="text-gray-900 font-medium">{selectedCertificate.authority}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Category</label>
                      <p className="text-gray-900 font-medium">{selectedCertificate.category}</p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Benefits</h5>
                    <ul className="space-y-2">
                      {selectedCertificate.benefits.map((benefit: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
