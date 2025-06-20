import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { I18nextProvider } from "@/components/i18next-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Graha Impex - Professional Courier Services",
  description: "Leading courier and logistics company providing reliable shipping solutions worldwide",
  keywords: "courier, logistics, shipping, delivery, international shipping, express delivery",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
