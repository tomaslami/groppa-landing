import { Card } from "@/components/ui/card"
import type { Differentiator } from "@/lib/types"

interface DifferentiatorsProps {
  differentiators: Differentiator[]
}

export default function Differentiators({ differentiators }: DifferentiatorsProps) {
  return (
    <section id="diferenciales" className="w-full py-12 sm:py-16 md:py-20 lg:py-28">
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
              <h3 className="text-lg sm:text-xl font-semibold mt-2 text-groppa-dark-gray">{item.title}</h3>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
