"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, Globe, X, ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, i18n } = useTranslation()
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/products", label: t("products") },
    { href: "/contact", label: t("contact") },
  ]

  // EXPANDED LANGUAGE LIST
  const languages = [
    { value: "en", label: "English", flag: "🇺🇸" },
    { value: "hi", label: "हिंदी", flag: "🇮🇳" },
    { value: "es", label: "Español", flag: "🇪🇸" },
    { value: "fr", label: "Français", flag: "🇫🇷" },
    { value: "de", label: "Deutsch", flag: "🇩🇪" },
    { value: "zh", label: "中文", flag: "🇨🇳" },
    { value: "ar", label: "العربية", flag: "🇸🇦" },
    { value: "pt", label: "Português", flag: "🇵🇹" },
    { value: "ru", label: "Русский", flag: "🇷🇺" },
    { value: "ja", label: "日本語", flag: "🇯🇵" },
    { value: "ko", label: "한국어", flag: "🇰🇷" },
    { value: "it", label: "Italiano", flag: "🇮🇹" },
    { value: "nl", label: "Nederlands", flag: "🇳🇱" },
    { value: "tr", label: "Türkçe", flag: "🇹🇷" },
    { value: "th", label: "ไทย", flag: "🇹🇭" },
    { value: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
    { value: "id", label: "Bahasa Indonesia", flag: "🇮🇩" },
    { value: "pl", label: "Polski", flag: "🇵🇱" },
    { value: "uk", label: "Українська", flag: "🇺🇦" },
    { value: "sw", label: "Kiswahili", flag: "🇰🇪" },
  ]

  const currentLanguage = languages.find((lang) => lang.value === i18n.language)

  const handleLanguageChange = (newLanguage: string) => {
    i18n.changeLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
                alt="Graha Impex Logo"
                width={40}
                height={40}
                className={`transition-all duration-300 ${
                  isScrolled ? "brightness-100" : "brightness-0 invert"
                } group-hover:scale-110 transition-transform rounded-lg`}
              />
              <div className="absolute -inset-2 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Graha Impex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-blue-600 bg-blue-50"
                      : "text-cyan-400 bg-white/10"
                    : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      isScrolled ? "bg-blue-600" : "bg-cyan-400"
                    }`}
                  ></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative group">
              <Select value={i18n.language} onValueChange={handleLanguageChange}>
                <SelectTrigger
                  className={`w-44 border-0 transition-all duration-300 ${
                    isScrolled
                      ? "bg-gray-50 hover:bg-gray-100 text-gray-700"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/20"
                  }`}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="mr-1">{currentLanguage?.flag}</span>
                  <SelectValue />
                  <ChevronDown className="h-4 w-4 ml-auto" />
                </SelectTrigger>
                <SelectContent className="max-h-60 overflow-y-auto border-0 shadow-xl">
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value} className="hover:bg-blue-50">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Link href="/contact">
              <Button
                className={`transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                }`}
              >
                {t("getQuote")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-lg border-l border-gray-200/50">
              <div className="flex flex-col space-y-8 mt-8">
                <Link href="/" className="flex items-center space-x-3">
                  <Image
                    src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
                    alt="Graha Impex Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                  <span className="text-2xl font-bold text-gray-900">Graha Impex</span>
                </Link>

                <nav className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        pathname === item.href
                          ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Language Selector & CTA */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Language</label>
                    <Select value={i18n.language} onValueChange={handleLanguageChange}>
                      <SelectTrigger className="bg-gray-50 border-gray-200">
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="mr-1">{currentLanguage?.flag}</span>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-60 overflow-y-auto">
                        {languages.map((lang) => (
                          <SelectItem key={lang.value} value={lang.value}>
                            <div className="flex items-center gap-3">
                              <span>{lang.flag}</span>
                              <span>{lang.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
                      {t("getQuote")}
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
