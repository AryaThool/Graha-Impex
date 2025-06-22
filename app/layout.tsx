import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Graha Impex - Leading Export Company from India | Premium Spices & Food Products",
    template: "%s | Graha Impex - Export Company India",
  },
  description:
    "Graha Impex is a leading export company from India specializing in premium spices, dehydrated products, edible oils, and oil seeds. Trusted by 50,000+ customers worldwide with 99.9% on-time delivery. Contact us for quality exports from India.",
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
  ],
  authors: [{ name: "Graha Impex Team" }],
  creator: "Graha Impex",
  publisher: "Graha Impex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grahaimpex.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Graha Impex - Leading Export Company from India",
    description:
      "Premium spices, dehydrated products, and food exports from India. Trusted by 50,000+ customers worldwide with certified quality and reliable delivery.",
    url: "https://grahaimpex.com",
    siteName: "Graha Impex",
    images: [
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        width: 1200,
        height: 630,
        alt: "Graha Impex - Export Company India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graha Impex - Leading Export Company from India",
    description:
      "Premium spices, dehydrated products, and food exports from India. Trusted by 50,000+ customers worldwide.",
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
    icon: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
    shortcut: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
    apple: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    yandex: "your-yandex-verification-code", // Add if targeting Russian market
    yahoo: "your-yahoo-verification-code", // Add if needed
  },
  category: "business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
        />
        <link rel="canonical" href="https://grahaimpex.com" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai, Maharashtra" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />

        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Graha Impex",
              alternateName: "Graha Impex Export Company",
              url: "https://grahaimpex.com",
              logo: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
              description:
                "Leading export company from India specializing in premium spices, dehydrated products, edible oils, and oil seeds.",
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
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7385143290",
                  contactType: "sales",
                  availableLanguage: "English",
                },
              ],
              email: "info@grahaimpex.com",
              foundingDate: "2010",
              founder: {
                "@type": "Person",
                name: "Ms. Aachal Patil",
              },
              numberOfEmployees: "50-100",
              industry: "Food Export",
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
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
