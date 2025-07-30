import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full h-screen py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-slate-800 flex flex-col justify-center items-center">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-groppa-green/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-groppa-green/5 rounded-full blur-3xl"></div>

      <div className="container px-4 sm:px-6 md:px-8 text-center text-white relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-6 sm:mb-8">
            Hacemos que tu propiedad
            <br className="hidden sm:block" />
            <span className="text-groppa-green block sm:inline mt-2 sm:mt-0">encuentre su lugar en el mundo</span>
          </h1>
          <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed px-4 sm:px-0">
            Ventas, alquileres y administración de propiedades con respaldo profesional y atención personalizada.
          </p>

         
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-groppa-green text-white hover:bg-groppa-green/90 text-lg px-8 py-6">
              <Link href="/propiedades">Ver Propiedades</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-black text-black bg-white hover:bg-white/90 text-lg px-8 py-6 "
            >
              <Link href="#contacto">Contactanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
