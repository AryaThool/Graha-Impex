import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Suspense } from "react"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Graha Impex - Leading Export Company from India | Premium Spices & Food Products",
    template: "%s | Graha Impex - Export Company India",
  },
  description:
    "Graha Impex is a leading export company from India specializing in premium spices, dehydrated products, edible oils, and oil seeds. Trusted by 50,000+ customers worldwide with 99.9% on-time delivery. View our agricultural harvesting chart and crop calendar for export planning.",
  keywords: [
    "Graha Impex",
    "export company India",
    "Indian spices export",
    "dehydrated products export",
    "edible oils export",
    "oil seeds export",
    "food products export India",
    "premium spices India",
    "international shipping India",
    "export business India",
    "Indian food exports",
    "spices supplier India",
    "agricultural exports India",
    "Mumbai export company",
    "Maharashtra exports",
    "FSSAI certified exporter",
    "APEDA registered exporter",
    "quality food products India",
    "bulk spices export",
    "wholesale spices India",
    "harvesting chart India",
    "agricultural harvesting chart",
    "crop calendar India",
    "harvest calendar",
    "seasonal harvesting guide",
    "agricultural calendar India",
    "crop harvesting schedule",
    "farming calendar India",
    "spices harvesting chart",
    "agricultural export planning",
    "harvest timing export",
    "crop export seasons",
    "seasonal export guide",
    "agricultural export calendar",
    "harvest chart exporters",
    "crop procurement calendar",
    "agricultural sourcing calendar",
  ],
  authors: [{ name: "Graha Impex Team" }],
  creator: "Graha Impex",
  publisher: "Graha Impex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grahaimpex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Graha Impex - Leading Export Company from India | Agricultural Harvesting Chart",
    description:
      "Premium spices, dehydrated products, and food exports from India. Trusted by 50,000+ customers worldwide with certified quality and reliable delivery. View our comprehensive agricultural harvesting chart and crop calendar.",
    url: "https://grahaimpex.com",
    siteName: "Graha Impex",
    images: [
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        width: 1200,
        height: 630,
        alt: "Graha Impex - Export Company India with Agricultural Harvesting Chart",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graha Impex - Leading Export Company from India | Harvesting Chart",
    description:
      "Premium spices, dehydrated products, and food exports from India. View our agricultural harvesting chart for export planning.",
    images: ["https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"],
    creator: "@grahaimpex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "business",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Maharashtra",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
    generator: 'v0.dev'
}

// Loading component for Suspense
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://sagobctjwpnpmpcxxyut.supabase.co" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://grahaimpex.com" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />

        {/* Performance hints */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* Enhanced Business Schema with performance optimization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Graha Impex",
              alternateName: ["Graha Impex Export Company", "Graha Impex India"],
              url: "https://grahaimpex.com",
              logo: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
              description:
                "Leading export company from India specializing in premium spices, dehydrated products, edible oils, and oil seeds. Providing agricultural harvesting chart and crop calendar for export planning.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mihan",
                addressLocality: "Nagpur",
                addressRegion: "Maharashtra",
                postalCode: "400001",
                addressCountry: "IN",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8766556928",
                  contactType: "customer service",
                  availableLanguage: "English",
                  areaServed: "Worldwide",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7385143290",
                  contactType: "sales",
                  availableLanguage: "English",
                  areaServed: "Worldwide",
                },
              ],
              email: "info@grahaimpex.com",
              foundingDate: "2010",
              founder: {
                "@type": "Person",
                name: "Ms. Aachal Patil",
              },
              numberOfEmployees: "50-100",
              industry: ["Food Export", "Agricultural Export", "Spices Export"],
              keywords:
                "export company India, spices export, agricultural harvesting chart, crop calendar, harvest chart, Indian food exports",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61560943020624",
                "https://www.linkedin.com/company/graha-impex/",
                "https://www.instagram.com/grahaimpex/",
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "FSSAI License",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Food Safety and Standards Authority of India",
                  },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "APEDA Registration",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "Agricultural and Processed Food Products Export Development Authority",
                  },
                },
              ],
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Agricultural Harvesting Chart",
                    description:
                      "Comprehensive crop calendar and seasonal harvesting guide for Indian agricultural products",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "Premium Indian Spices",
                    description: "High-quality spices for export including cumin, turmeric, coriander, and more",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Suspense fallback={<Loading />}>
          <Navbar />
        </Suspense>

        <main className="min-h-screen">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>

        <Suspense fallback={<div className="h-32 bg-gray-100"></div>}>
          <Footer />
        </Suspense>

        {/* Performance monitoring script (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Basic performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                    }
                  }, 0);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
