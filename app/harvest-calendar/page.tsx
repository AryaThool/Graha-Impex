import type { Metadata } from "next"
import HarvestCalendarClient from "./HarvestCalendarClient"

// SEO Metadata for Harvest Calendar Page
export const metadata: Metadata = {
  title: "Agricultural Harvesting Calendar - Graha Impex | Seasonal Export Planning",
  description:
    "View Graha Impex's comprehensive agricultural harvesting calendar for spices, seeds, and food products. Plan your export orders with our seasonal availability guide for Indian agricultural products.",
  keywords: [
    "harvest calendar India",
    "agricultural seasons India",
    "spices harvesting schedule",
    "export planning calendar",
    "seasonal availability",
    "Indian crop calendar",
    "agricultural export timing",
    "harvest seasons spices",
    "crop planning India",
    "seasonal export guide",
  ],
  openGraph: {
    title: "Agricultural Harvesting Calendar - Graha Impex",
    description:
      "Plan your export orders with our comprehensive harvesting calendar for Indian agricultural products and spices.",
  },
  alternates: {
    canonical: "https://grahaimpex.com/harvest-calendar",
  },
}

export default function HarvestCalendarPage() {
  return <HarvestCalendarClient />
}
