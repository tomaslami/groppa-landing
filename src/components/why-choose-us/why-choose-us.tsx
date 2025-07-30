import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { ShieldCheck, Scale, Zap, Users, Lightbulb } from "lucide-react"
import type { ServiceItem } from "@/types/types"

export default function WhyChooseUs() {
  const services: ServiceItem[] = [
    {
      icon: (
        <ShieldCheck className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Confianza y Profesionalismo",
      description:
        "Expertos dedicados a gestionar tu propiedad con la máxima seriedad y transparencia.",
    },
    {
      icon: (
        <Scale className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Seguridad Legal",
      description:
        "Asesoramiento legal integral para proteger tus intereses en cada paso del proceso.",
    },
    {
      icon: (
        <Zap className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Rapidez con Estrategia",
      description:
        "Planes de acción eficientes y personalizados para alcanzar tus objetivos en el menor tiempo.",
    },
    {
      icon: (
        <Users className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Acompañamiento Humano",
      description:
        "Entendemos que es un gran paso. Te acompañamos de cerca, con empatía y dedicación.",
    },
    {
      icon: (
        <Lightbulb className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />
      ),
      title: "Soluciones Creativas",
      description:
        "Ideas innovadoras y un enfoque integral para destacar tu propiedad en el mercado.",
    },
  ]

  return (
    <section
      id="porque-elegirnos"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-28"
    >
      <div className="container px-6 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
            ¿Por Qué <span className="text-groppa-green">Elegirnos</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 px-6 sm:px-0">
            Te ofrecemos más que una gestión inmobiliaria; te brindamos tranquilidad y resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Feature key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: ServiceItem & { index: number }) => {
  return (
    <Card className="text-center p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mt-2 text-groppa-dark-gray">
        {title}
      </h3>
      <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </Card>
  )
}
