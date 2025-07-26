import { Card } from "@/components/ui/card"
import { HomeIcon, Gavel, CalendarClock, Smile } from "lucide-react"
import type { Differentiator } from "@/types/types"

export default function Differentiators() {
  const differentiators: Differentiator[] = [
    {
      icon: (
        <HomeIcon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Estudio de Arquitectura Propio",
      description:
        "Potenciamos el valor de tu propiedad con soluciones de diseño y refacción.",
    },
    {
      icon: (
        <Gavel className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Asesoría Legal Especializada",
      description:
        "Abogados expertos en derecho inmobiliario para tu total seguridad.",
    },
    {
      icon: (
        <CalendarClock className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Administración Gratuita por 6 Meses",
      description:
        "Gestionamos tu alquiler sin costo inicial para facilitar tu transición.",
    },
    {
      icon: (
        <Smile className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Atención Empática y Cercana",
      description:
        "Un equipo humano que entiende tus prioridades y te acompaña con calidez.",
    },
  ]

  return (
    <section
      id="diferenciales"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="container px-6 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
            ¿Qué Nos Hace <span className="text-groppa-green">Diferentes</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 px-6 sm:px-0">
            Servicios exclusivos y un enfoque humano que marcan la diferencia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {differentiators.map((item, index) => (
            <Card
              key={index}
              className="text-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mt-2 text-groppa-dark-gray">
                {item.title}
              </h3>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
