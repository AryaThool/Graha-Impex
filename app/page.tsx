import Hero from "@/components/hero"
import AboutFounder from "@/components/about-founder"
import WhyChooseUs from "@/components/why-choose-us"
import ProductSlideshow from "@/components/product-slideshow"
import Testimonials from "@/components/testimonials"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutFounder />
      <WhyChooseUs />
      <ProductSlideshow />
      <Testimonials />
    </div>
  )
}
