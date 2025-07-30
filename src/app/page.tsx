import Header from "@/components/navbar/navbar"
import Hero from "@/components/hero/hero"
import WhyChooseUs from "@/components/why-choose-us/why-choose-us"
import OurProcess from "@/components/our-process/our-process"
import Differentiators from "@/components/differentiators/differentiators"
import FeaturedProperties from "@/components/featured-properties/featured-properties"
import Contact from "@/components/contact/contact"
import Footer from "@/components/footer/footer"
import WhatsAppButton from "@/components/whatsapp-button/whatsapp-button"

export default function GroppaLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <OurProcess />
        <Differentiators />
        <FeaturedProperties />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
