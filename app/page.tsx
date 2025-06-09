"use client"
import { useState } from "react"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"
import Header from "@/components/header"
import Hero from "@/components/hero"
import WhyChooseUs from "@/components/why-choose-us"
import OurProcess from "@/components/our-process"
import Differentiators from "@/components/differentiators"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { servicesData, processStepsData, differentiatorsData, testimonialsData } from "@/lib/data"

export default function GroppaLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="flex flex-col min-h-screen text-groppa-dark-gray bg-white">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />

      <main className="flex-1">
        <Hero />
        <WhyChooseUs services={servicesData} />
        <OurProcess processSteps={processStepsData} />
        <Differentiators differentiators={differentiatorsData} />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsAppButton
        phoneNumber="+5491126631808"
        message="Hola!! Estoy interesado/a en sus servicios."
      />
    </div>
  )
}
