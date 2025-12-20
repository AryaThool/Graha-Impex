"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Certificates", href: "/certificates" },
  { name: "Harvest Calendar", href: "/harvest-calendar" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918766556928", "_blank")
  }

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 8766556928</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@grahaimpex.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span className="opacity-100">Maharashtra, India</span>
            </div>
          </div>
          <div className="text-sm">
            <span className="text-yellow-300">FSSAI Certified</span> |{" "}
            <span className="text-green-300">APEDA Registered</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-gray-200" : "bg-white border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Company Name */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
                  alt="Graha Impex Logo"
                  width={50}
                  height={50}
                  className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Graha Impex
                </span>
                <span className="text-sm text-gray-600 font-medium">Export Excellence</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                    pathname === item.href ? "bg-blue-100 text-blue-600 shadow-sm" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/new-product-images/GRAHA%20LOGO.png"
                        alt="Graha Impex Logo"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                      <div>
                        <span className="text-lg font-bold text-gray-900">Graha Impex</span>
                        <p className="text-xs text-gray-600">Export Excellence</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <div className="space-y-2 px-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                            pathname === item.href
                              ? "bg-blue-100 text-blue-600 shadow-sm"
                              : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Contact Info */}
                    <div className="mt-8 px-6 pt-6 border-t border-gray-200">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Phone className="h-5 w-5" />
                          <span className="text-sm">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Mail className="h-5 w-5" />
                          <span className="text-sm">info@grahaimpex.com</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <MapPin className="h-5 w-5" />
                          <span className="text-sm">Maharashtra, India</span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile WhatsApp */}
                    <div className="mt-6 px-6">
                      <Button
                        onClick={() => {
                          handleWhatsAppClick()
                          setIsOpen(false)
                        }}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}
