import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { ProcessStep } from "@/lib/types"

interface OurProcessProps {
  processSteps: ProcessStep[]
}

export default function OurProcess({ processSteps }: OurProcessProps) {
  return (
    <section
      id="proceso"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-groppa-green/5 via-white to-groppa-green/10 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo - solo en desktop */}
      <div className="absolute top-10 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-groppa-green/10 rounded-full blur-xl hidden sm:block"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-groppa-green/5 rounded-full blur-2xl hidden sm:block"></div>

      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
            Tu Camino con <span className="text-groppa-green">GROPPA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 px-4 sm:px-0">
            Seguí el recorrido paso a paso. Simple, claro y sin sorpresas.
          </p>
        </div>

        {/* Contenedor principal */}
        <div className="relative max-w-6xl mx-auto">
          {/* Línea conectora curva de fondo - solo en desktop */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden xl:block"
            viewBox="0 0 800 600"
            fill="none"
          >
            <path
              d="M100 100 Q200 50 300 100 T500 100 Q600 50 700 100"
              stroke="#8dc43d"
              strokeWidth="3"
              strokeDasharray="10,5"
              opacity="0.3"
            />
          </svg>

          {/* Grid responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
              // Posiciones escalonadas solo en desktop
              const positions = ["lg:mt-0", "lg:mt-16", "lg:mt-8", "lg:mt-20", "lg:mt-4", "lg:mt-12"]

              return (
                <div key={index} className={`relative group ${positions[index] || ""}`}>
                  {/* Tarjeta principal */}
                  <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-groppa-green/10 transition-all duration-300 group-hover:shadow-lg group-hover:border-groppa-green/30">
                    {/* Número flotante */}
                    <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-groppa-green to-groppa-green/80 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg transition-transform duration-300">
                      {index + 1}
                    </div>

                    {/* Contenido de la tarjeta */}
                    <div className="pt-3 sm:pt-4">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-groppa-green/10 rounded-xl mb-3 sm:mb-4 mx-auto group-hover:bg-groppa-green/20 transition-colors duration-300">
                        {step.icon}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-groppa-dark-gray mb-2 sm:mb-3 text-center group-hover:text-groppa-green transition-colors duration-300">
                        {step.title}
                      </h3>

                      <p className="text-slate-600 text-center leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Indicador de progreso en la parte inferior */}
                    <div className="mt-4 sm:mt-6 flex justify-center">
                      <div className="flex space-x-1">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                              i <= index ? "bg-groppa-green shadow-sm" : "bg-slate-200 group-hover:bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Flecha conectora (solo visible en desktop y no en la última tarjeta) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden xl:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-groppa-green/40 group-hover:text-groppa-green/70 transition-colors duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Call to action integrado */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex flex-row items-center bg-white rounded-full px-6 sm:px-8 py-4 shadow-lg border border-groppa-green/20 gap-3 sm:gap-4">
              <span className="text-slate-600 text-sm sm:text-base">¿Listo para empezar?</span>
              <Button
                asChild
                className="bg-groppa-green text-white hover:bg-groppa-green/90 rounded-full px-4 sm:px-6 text-sm sm:text-base"
              >
                <Link href="#contacto">Iniciemos juntos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
