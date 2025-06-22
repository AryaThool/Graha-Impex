import type { Metadata } from "next"
import Hero from "@/components/hero"
import AboutFounder from "@/components/about-founder"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"

export const metadata: Metadata = {
  title: "Graha Impex - Leading Export Company from India | Premium Spices & Food Products",
  description:
    "Graha Impex is India's trusted export company specializing in premium spices, dehydrated products, edible oils, and oil seeds. Serving 50,000+ customers worldwide with FSSAI & APEDA certification. Get quality exports from India with 99.9% on-time delivery.",
  keywords: [
    "Graha Impex",
    "export company India",
    "Indian spices export",
    "premium spices India",
    "dehydrated products export",
    "edible oils export",
    "food products export",
    "Mumbai export company",
    "FSSAI certified exporter",
    "APEDA registered",
    "international shipping India",
    "bulk spices supplier",
    "agricultural exports India",
  ],
  openGraph: {
    title: "Graha Impex - Leading Export Company from India",
    description:
      "India's trusted export company for premium spices, dehydrated products, and food exports. Serving 50,000+ customers worldwide with certified quality.",
    images: [
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        width: 1200,
        height: 630,
        alt: "Graha Impex - Export Company India",
      },
    ],
  },
  alternates: {
    canonical: "https://grahaimpex.com",
  },
}

export default function HomePage() {
  return (
    <>
      {/* Homepage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Graha Impex - Leading Export Company from India",
            description: "India's trusted export company for premium spices, dehydrated products, and food exports.",
            url: "https://grahaimpex.com",
            mainEntity: {
              "@type": "Organization",
              name: "Graha Impex",
              description:
                "Leading export company from India specializing in premium spices, dehydrated products, edible oils, and oil seeds.",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "50000",
                bestRating: "5",
                worstRating: "1",
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
              ],
            },
          }),
        }}
      />

      <div>
        <Hero />
        <AboutFounder />
        <WhyChooseUs />
        <Testimonials />
      </div>
    </>
  )
}
