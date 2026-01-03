import type { Metadata } from "next"
import { Suspense, lazy } from "react"
import Hero from "@/components/hero"
import LazyComponent from "@/components/lazy-component"
import AboutFounder from "@/components/about-founder"

// Lazy load components for better performance
const WhyChooseUs = lazy(() => import("@/components/why-choose-us"))
const Testimonials = lazy(() => import("@/components/testimonials"))

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
    "fast loading website",
    "optimized export website",
    "mobile friendly export company",
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

// Loading components
function HeroSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="animate-pulse text-center">
        <div className="h-16 bg-white/20 rounded mb-4 w-96"></div>
        <div className="h-8 bg-white/10 rounded w-64 mx-auto"></div>
      </div>
    </div>
  )
}

function SectionSkeleton() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      {/* Enhanced Homepage Schema for SEO */}
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
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
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
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".hero-description"],
            },
          }),
        }}
      />

      <div>
        {/* Hero Section - Critical above-the-fold content */}
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>

        {/* Lazy loaded sections for better performance */}
        <LazyComponent fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <WhyChooseUs />
          </Suspense>
        </LazyComponent>

        {/* Founder Section */}
        <LazyComponent fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <AboutFounder />
          </Suspense>
        </LazyComponent>

        <LazyComponent fallback={<SectionSkeleton />}>
          <Suspense fallback={<SectionSkeleton />}>
            <Testimonials />
          </Suspense>
        </LazyComponent>
      </div>
    </>
  )
}
