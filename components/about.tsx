"use client"

import { useTranslation } from "react-i18next"

export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      <p className="whitespace-pre-line text-gray-600">{t("aboutText")}</p>

      <div className="whitespace-pre-line text-gray-600 mt-4">{t("serviceDescription")}</div>
    </div>
  )
}
