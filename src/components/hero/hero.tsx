import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="w-full h-screen py-12 sm:py-16 md:py-20 lg:py-32 xl:py-40 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/hero-image.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container h-full px-6 sm:px-6 md:px-8 text-center text-white relative z-10 flex items-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight mb-6 sm:mb-8">
            Vender o alquilar tu propiedad no es solo una operación.
            <br className="hidden sm:block" />
            <span className="text-groppa-green block sm:inline mt-2 sm:mt-0">
              Es un paso importante en tu vida.
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed px-6 sm:px-0">
            En GROPPA, acompañamos ese proceso como se merece. Profesionales en
            gestión inmobiliaria con humanidad y estrategia, de principio a fin.
            No estás solo en este camino.
          </p>
          <div className="mt-8 sm:mt-10 flex md:flex-row gap-4 flex-col items-center justify-center">
            <Link href="#contacto">
              <Button
                variant={"outline"}
                className="w-44 bg-white hover:bg-white/90 text-black text-sm xl:text-base px-6 p-4"
              >
                Ver Propiedades
              </Button>
            </Link>

            <Link href="#contacto">
              <Button
                variant={"default"}
                className="w-44 bg-groppa-green hover:bg-groppa-green/90 text-sm xl:text-base px-6 p-4"
              >
                Contactanos Ahora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
