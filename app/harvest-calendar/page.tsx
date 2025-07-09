import type { Metadata } from "next"
import HarvestCalendarClient from "./HarvestCalendarClient"

// Enhanced SEO Metadata for Harvest Calendar Page
export const metadata: Metadata = {
  title: "Agricultural Harvesting Chart India 2024 | Crop Calendar & Seasonal Guide - Graha Impex",
  description:
    "Complete agricultural harvesting chart for India 2024. View crop calendar, seasonal availability, planting schedule for spices, seeds & food products. Best harvesting months for export planning from leading Indian exporter Graha Impex.",
  keywords: [
    // Primary keywords
    "harvesting chart India",
    "agricultural harvesting chart",
    "crop harvesting calendar",
    "harvest calendar India",
    "seasonal harvesting guide",
    "agricultural calendar India",
    "crop calendar 2024",
    "harvesting schedule India",
    "farming calendar India",
    "agricultural seasons chart",

    // Specific crop keywords
    "spices harvesting chart",
    "cumin harvesting season",
    "turmeric harvest calendar",
    "sesame seeds harvest time",
    "fennel seeds harvesting",
    "coriander harvesting season",
    "mustard seeds harvest calendar",
    "fenugreek harvesting time",
    "chilli harvesting season",
    "cardamom harvest calendar",

    // Export related keywords
    "export harvesting calendar",
    "agricultural export planning",
    "crop export seasons India",
    "harvest timing for export",
    "seasonal export guide",
    "agricultural export calendar",
    "India crop export schedule",
    "harvest chart for exporters",

    // Location specific
    "Maharashtra harvesting chart",
    "Indian agricultural calendar",
    "harvest seasons Maharashtra",
    "crop calendar Maharashtra",
    "agricultural timing India",

    // Alternative terms
    "harvesting timetable",
    "crop harvesting guide",
    "agricultural planting calendar",
    "harvest planning chart",
    "seasonal crop availability",
    "agricultural production calendar",
    "crop maturity calendar",
    "harvest readiness chart",
    "agricultural cycle chart",
    "crop growing seasons",

    // Business keywords
    "Graha Impex harvest calendar",
    "agricultural export company",
    "harvest planning for business",
    "crop procurement calendar",
    "agricultural sourcing calendar",
  ],
  openGraph: {
    title: "Agricultural Harvesting Chart India 2024 | Complete Crop Calendar",
    description:
      "Comprehensive harvesting chart for Indian agricultural products. Plan your crop procurement and export orders with our detailed seasonal availability guide.",
    images: [
      {
        url: "https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png",
        width: 1200,
        height: 630,
        alt: "Agricultural Harvesting Chart India - Graha Impex",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agricultural Harvesting Chart India 2024 | Crop Calendar",
    description:
      "Complete harvesting chart for Indian crops. View seasonal availability and harvest timing for agricultural products.",
    images: ["https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"],
  },
  alternates: {
    canonical: "https://grahaimpex.com/harvest-calendar",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Maharashtra, India",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
}

export default function HarvestCalendarPage() {
  return <HarvestCalendarClient />
}
