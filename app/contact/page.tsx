import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

// SEO Metadata for Contact Page
export const metadata: Metadata = {
  title: "Contact Graha Impex - Export Inquiry & Business Partnership | India",
  description:
    "Contact Graha Impex for export inquiries, business partnerships, and premium product sourcing from India. Get quotes for spices, dehydrated products, and food exports. Call +91-8766556928 or email info@grahaimpex.com",
  keywords: [
    "contact Graha Impex",
    "export inquiry India",
    "business partnership",
    "spices export quote",
    "food products export",
    "Mumbai export company contact",
    "international trade inquiry",
    "bulk order inquiry",
    "export business contact",
    "Indian exporter contact",
  ],
  openGraph: {
    title: "Contact Graha Impex - Export Inquiry & Business Partnership",
    description:
      "Get in touch with Graha Impex for export inquiries and business partnerships. Premium food products export from India.",
  },
  alternates: {
    canonical: "https://grahaimpex.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
