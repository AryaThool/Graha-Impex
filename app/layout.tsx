import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { I18nextProvider } from "@/components/i18next-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Graha Impex - Professional Export Services",
  description:
    "Leading export company providing reliable shipping solutions worldwide with premium products and excellence.",
  keywords: "export, import, logistics, shipping, delivery, international shipping, spices, food products",
  icons: {
    icon: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
    shortcut: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
    apple: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
  },
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
      </head>
      <body className={inter.className}>
        <I18nextProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </I18nextProvider>
      </body>
    </html>
  )
}
