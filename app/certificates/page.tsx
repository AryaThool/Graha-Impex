import type { Metadata } from "next"
import CertificatesClient from "./CertificatesClient"

// SEO Metadata for Certificates Page
export const metadata: Metadata = {
  title: "Certifications & Registrations - Graha Impex | FSSAI, APEDA, MSME Certified",
  description:
    "View Graha Impex's official certifications and registrations including FSSAI License, APEDA Registration, MSME Udyam, GST Registration, Import Export Certificate, ICEGATE, and Spices Board Registration. Trusted export company from India.",
  keywords: [
    "FSSAI certified exporter",
    "APEDA registered company",
    "MSME Udyam registration",
    "GST registration certificate",
    "import export license India",
    "ICEGATE registration",
    "Spices Board registration",
    "certified food exporter India",
    "export license India",
    "food safety certification",
    "agricultural export certification",
    "Indian export company certificates",
  ],
  openGraph: {
    title: "Official Certifications & Registrations - Graha Impex",
    description:
      "Graha Impex is officially certified and registered with FSSAI, APEDA, MSME, and other regulatory bodies for safe and legal food exports from India.",
  },
  alternates: {
    canonical: "https://grahaimpex.com/certificates",
  },
}

export default function CertificatesPage() {
  return <CertificatesClient />
}
