import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Graha Impex - Our Story, Mission & Leadership | Export Company India",
  description:
    "Learn about Graha Impex's journey as a leading export company from India. Founded by Ms. Aachal Patil, we specialize in premium spices and food products export with 15+ years of experience. Discover our mission, values, and commitment to quality.",
  keywords: [
    "about Graha Impex",
    "Graha Impex story",
    "Ms. Aachal Patil founder",
    "export company India history",
    "Indian food exporter",
    "spices export company",
    "Mumbai export business",
    "food export experience",
    "export company leadership",
    "Indian agricultural exports",
  ],
  openGraph: {
    title: "About Graha Impex - Our Story & Leadership",
    description:
      "Learn about Graha Impex's journey as India's leading export company. Founded by Ms. Aachal Patil with 15+ years of experience in premium food exports.",
    images: [
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        width: 1200,
        height: 630,
        alt: "About Graha Impex - Export Company India",
      },
    ],
  },
  alternates: {
    canonical: "https://grahaimpex.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* About Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Graha Impex",
            description: "Learn about Graha Impex's journey as a leading export company from India.",
            url: "https://grahaimpex.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "Graha Impex",
              founder: {
                "@type": "Person",
                name: "Ms. Aachal Patil",
                jobTitle: "Chief Executive Officer",
                worksFor: {
                  "@type": "Organization",
                  name: "Graha Impex",
                },
              },
              foundingDate: "2010",
              description: "A New-Age Export Company With Old-School Values",
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
                  name: "About Us",
                  item: "https://grahaimpex.com/about",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">About Graha Impex</h1>
              <p className="text-xl md:text-2xl mb-8">A New-Age Export Company With Old-School Values</p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  The idea behind our company was born from a powerful blend of business experience and a passion for
                  meaningful trade.
                </p>
                <p className="text-gray-600 mb-4">
                  One of our founders comes from a long line of Indian entrepreneurs, with successful ventures in
                  petroleum and infrastructure. The other, a first-generation entrepreneur, stepped into business with a
                  vision to make a difference in how Indian products are delivered to the global stage.
                </p>
                <p className="text-gray-600 mb-6">
                  Together, they created this company with a shared purpose: To uplift Indian farmers, manufacturers,
                  and small producers. To give global buyers access to authentic, high-quality products. And to build a
                  company that stands for integrity, quality, and trust.
                </p>
                <Link href="/contact">
                  <Button size="lg">Get in Touch</Button>
                </Link>
              </div>
              <div>
                <Image
                  src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
                  alt="Graha Impex warehouse and operations"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are guided by a commitment to integrity, excellence, and customer-centricity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Clear Communication</h3>
                  <p className="text-gray-600">
                    Ensuring information is conveyed accurately and understandably, fostering transparency and
                    minimizing misunderstandings.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Fast response times</h3>
                  <p className="text-gray-600">
                    Promptly addressing queries or concerns to maintain efficiency and demonstrate reliability.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Attention to detail</h3>
                  <p className="text-gray-600">
                    Carefully managing every aspect, no matter how small, to ensure precision and high-quality outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
                  <p className="text-gray-600">
                    Tailoring experiences and solutions to meet the unique needs and preferences of each individual
                    client.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team is our strength. From sourcing specialists to logistics coordinators, quality inspectors, and
                customer service managers — each person plays a key role in making sure every shipment meets the highest
                standards.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ms. Aachal Patil",
                  role: "Chief Executive Officer",
                  image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//person.jpg",
                },
                {
                  name: "Mr. Karan Khurana",
                  role: "Director",
                  image: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//person.jpg",
                },
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role} at Graha Impex`}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
