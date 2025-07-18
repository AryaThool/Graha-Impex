"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram, Award, Shield, Clock } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Certificates", href: "/certificates" },
  { name: "Harvest Calendar", href: "/harvest-calendar" },
  { name: "Contact", href: "/contact" },
]

const productCategories = [
  { name: "Spices & Seasonings", href: "/products?category=spices" },
  { name: "Dehydrated Products", href: "/products?category=dehydrated" },
  { name: "Edible Oils", href: "/products?category=oils" },
  { name: "Oil Seeds", href: "/products?category=seeds" },
  { name: "Agricultural Products", href: "/products?category=agricultural" },
]

const certifications = [
  { name: "FSSAI Certified", icon: Shield },
  { name: "APEDA Registered", icon: Award },
  { name: "ISO Certified", icon: Shield },
  { name: "Export License", icon: Globe },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="https://sagobctjwpnpmpcxxyut.supabase.co/storage/v1/object/public/founder-images//Graha%20Impex.png"
                alt="Graha Impex Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-bold">Graha Impex</h3>
                <p className="text-gray-400 text-sm">Export Excellence</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Leading exporter of premium Indian spices, dehydrated products, and agricultural commodities. Serving
              global markets with quality, reliability, and excellence since our inception.
            </p>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                  <cert.icon className="h-4 w-4 text-green-400" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Export Street
                    <br />
                    Gujarat, India - 380001
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-gray-300">+91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@grahaimpex.com</p>
                  <p className="text-gray-300">export@grahaimpex.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300">www.grahaimpex.com</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <h5 className="font-medium">Business Hours</h5>
              </div>
              <p className="text-sm text-gray-300">
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Sat: 9:00 AM - 2:00 PM
                <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">Get the latest updates on products and export opportunities</p>
            </div>
            <div className="flex w-full md:w-auto max-w-md space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">© 2024 Graha Impex. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
