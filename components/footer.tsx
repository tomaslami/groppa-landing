import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Instagram, Award } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-groppa-dark-gray text-white py-12 sm:py-16">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center">
              <span className="text-2xl sm:text-3xl font-bold text-groppa-green">GROPPA</span>
            </Link>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Profesionales en gestión inmobiliaria con humanidad y estrategia. Te acompañamos en cada paso del proceso.
            </p>

            {/* Información del martillero */}
            <div className="mt-4 pt-4 border-t border-slate-600">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-groppa-green" />
                <span className="text-white font-medium">Martillero Gustavo Groppa</span>
              </div>
              <p className="text-slate-300 text-sm mt-1">Mat. 5330</p>
            </div>
          </div>

          {/* Enlaces de navegación */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Navegación</h3>
            <nav className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                asChild
                className="justify-start text-slate-300 hover:text-groppa-green hover:bg-groppa-green/10 p-0 h-auto"
              >
                <Link href="#porque-elegirnos">Por qué elegirnos</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="justify-start text-slate-300 hover:text-groppa-green hover:bg-groppa-green/10 p-0 h-auto"
              >
                <Link href="#proceso">Nuestro Proceso</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="justify-start text-slate-300 hover:text-groppa-green hover:bg-groppa-green/10 p-0 h-auto"
              >
                <Link href="#diferenciales">Diferenciales</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="justify-start text-slate-300 hover:text-groppa-green hover:bg-groppa-green/10 p-0 h-auto"
              >
                <Link href="#contacto">Contacto</Link>
              </Button>
            </nav>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">Contacto</h3>
            <div className="flex flex-col space-y-3">
              <Button
                variant="ghost"
                asChild
                className="justify-start text-slate-300 hover:text-groppa-green hover:bg-groppa-green/10 p-0 h-auto"
              >
                <a
                  href="https://wa.me/+5491123456789?text=Hola%20GROPPA,%20estoy%20interesado/a%20en%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="justify-start text-slate-300 hover:text-groppa-green hover:bg-groppa-green/10 p-0 h-auto"
              >
                <a href="tel:+541123456789" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Llamar Ahora
                </a>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="justify-start text-slate-300 hover:text-groppa-green hover:bg-groppa-green/10 p-0 h-auto"
              >
                <a
                  href="https://www.instagram.com/groppa_propiedades/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  @groppa_propiedades
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-600 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-slate-400">
              &copy; {new Date().getFullYear()} GROPPA Inmobiliaria. Todos los derechos reservados.
            </p>
            <p className="text-xs text-slate-500">Diseño web profesional y empático para tu tranquilidad.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
