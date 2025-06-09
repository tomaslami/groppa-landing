import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { ServiceItem } from "@/lib/types"

interface WhyChooseUsProps {
  services: ServiceItem[]
}

export default function WhyChooseUs({ services }: WhyChooseUsProps) {
  return (
    <section id="porque-elegirnos" className="w-full py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
            ¿Por Qué Elegir<span className="text-groppa-green">nos</span>?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 px-4 sm:px-0">
            Te ofrecemos más que una gestión inmobiliaria; te brindamos tranquilidad y resultados.
          </p>
        </div>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {services.slice(0, 3).map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader className="items-center text-center pb-4">
                {service.icon}
                <CardTitle className="text-groppa-dark-gray text-lg sm:text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <CardHeader className="items-center text-center pb-4">
                {service.icon}
                <CardTitle className="text-groppa-dark-gray text-lg sm:text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <CardDescription className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
