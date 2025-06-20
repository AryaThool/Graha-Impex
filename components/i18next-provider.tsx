"use client"

import type React from "react"
import { useEffect } from "react"
import { I18nextProvider as Provider } from "react-i18next"
import i18n from "@/lib/i18n"

export function I18nextProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize i18n on client side
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("i18nextLng") || "en"
      i18n.changeLanguage(savedLanguage)
    }
  }, [])

  return <Provider i18n={i18n}>{children}</Provider>
}
