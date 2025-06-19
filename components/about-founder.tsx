import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutFounder() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-white">Meet Our Founder</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leadership That
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Drives Excellence
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Visionary leadership with decades of experience in transforming global logistics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Founder Card */}
          <div className="relative">
            <Card className="overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-8 md:p-12 text-white">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Founder Photo */}
                  <div className="flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Ms. Achal Patil - Founder & CEO"
                      width={200}
                      height={200}
                      className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white/30 shadow-xl object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left space-y-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold">Ms. Achal Patil</h3>
                      <p className="text-cyan-400 font-medium text-lg">Founder & CEO</p>
                    </div>

                    <blockquote className="text-lg leading-relaxed text-blue-100 italic">
                      "With over 15 years of experience in logistics and supply chain management, I founded Graha
                      Impex with a mission to provide world-class courier services that businesses and individuals can
                      rely on. Our journey is built on trust, innovation, and unwavering commitment to excellence."
                    </blockquote>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-white/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">15+</div>
                        <div className="text-xs text-blue-200">Years Exp.</div>
                      </div>
                      <div className="text-center border-l border-r border-white/20">
                        <div className="text-2xl font-bold text-green-400">MBA</div>
                        <div className="text-xs text-blue-200">Logistics</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">50K+</div>
                        <div className="text-xs text-blue-200">Clients</div>
                      </div>
                    </div>

                    <Link href="/about">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                        Learn More About Us
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full opacity-50 animate-pulse backdrop-blur-sm"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full opacity-50 animate-pulse backdrop-blur-sm"
              style={{ animationDelay: "1s" }}
            ></div>
          </Card>
        </div>
      </div>
    </section>
  )
}
