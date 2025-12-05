import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Graha Impex - Premium Export Products from India",
    template: "%s | Graha Impex",
  },
  description:
    "Leading exporter of premium Indian spices, dehydrated products, edible oils, and agricultural products. FSSAI certified, APEDA registered. Serving global markets with quality and excellence.",
  keywords: [
    "Indian spices export",
    "premium spices India",
    "dehydrated products export",
    "edible oils export",
    "agricultural exports India",
    "FSSAI certified products",
    "APEDA registered exporter",
    "bulk spices supplier",
    "wholesale spices India",
    "export quality products",
  ],
  authors: [{ name: "Graha Impex" }],
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
    type: "website",
    locale: "en_US",
    url: "https://grahaimpex.com",
    title: "Graha Impex - Premium Export Products from India",
    description:
      "Leading exporter of premium Indian spices, dehydrated products, edible oils, and agricultural products. FSSAI certified, APEDA registered.",
    siteName: "Graha Impex",
    images: [
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        width: 1200,
        height: 630,
        alt: "Graha Impex - Premium Export Products from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Graha Impex - Premium Export Products from India",
    description:
      "Leading exporter of premium Indian spices, dehydrated products, edible oils, and agricultural products.",
    images: ["https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"],
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
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
    apple: [
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
