import { cn } from "@/lib/utils"
import { ShieldCheck, Scale, Zap, Users, Lightbulb } from "lucide-react"
import type { ServiceItem } from "@/types/types"

export default function WhyChooseUs() {
  const services: ServiceItem[] = [
    {
      icon: (
        <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />
      ),
      title: "Confianza y Profesionalismo",
      description:
        "Expertos dedicados a gestionar tu propiedad con la máxima seriedad y transparencia.",
    },
    {
      icon: (
        <Scale className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />
      ),
      title: "Seguridad Legal",
      description:
        "Asesoramiento legal integral para proteger tus intereses en cada paso del proceso.",
    },
    {
      icon: (
        <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />
      ),
      title: "Rapidez con Estrategia",
      description:
        "Planes de acción eficientes y personalizados para alcanzar tus objetivos en el menor tiempo.",
    },
    {
      icon: (
        <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />
      ),
      title: "Acompañamiento Humano",
      description:
        "Entendemos que es un gran paso. Te acompañamos de cerca, con empatía y dedicación.",
    },
    {
      icon: (
        <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />
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
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
            ¿Por Qué <span className="text-groppa-green">Elegirnos</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 px-4 sm:px-0">
            Te ofrecemos más que una gestión inmobiliaria; te brindamos
            tranquilidad y resultados.
          </p>
        </div>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6 sm:mb-8 max-w-6xl mx-auto">
          {services.slice(0, 3).map((service, index) => (
            <Feature key={index} {...service} index={index} />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <Feature key={index + 3} {...service} index={index} />
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
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature border-neutral-200",
        "lg:border-r lg:border-b border-neutral-200",
        (index === 0 || index === 3) && "lg:border-l border-neutral-200"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10 text-neutral-600">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-groppa-green transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  )
}
