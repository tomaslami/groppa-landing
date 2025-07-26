import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MessageCircle,
  Search,
  Briefcase,
  FileText,
  MapPin,
  Handshake,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

interface ProcessStep {
  icon: React.ReactNode
  title: string
  description: string
  detail: string
}

export default function OurProcess() {
  const processSteps: ProcessStep[] = [
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Consulta Inicial",
      description: "Conversamos sobre tu departamento y objetivos de venta",
      detail: "Evaluamos ubicación, características y expectativas",
    },
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Tasación Profesional",
      description: "Análisis de mercado y valoración precisa del inmueble",
      detail: "Comparamos con ventas recientes en la zona",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "Estrategia de Marketing",
      description: "Plan personalizado para maximizar la visibilidad",
      detail: "Fotografía profesional y marketing digital",
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "Documentación Legal",
      description: "Preparamos toda la documentación necesaria",
      detail: "Contratos seguros y asesoramiento jurídico",
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "Publicación Activa",
      description: "Listamos en múltiples plataformas y redes",
      detail: "Máxima exposición en portales inmobiliarios",
    },
    {
      icon: <Handshake className="w-6 h-6 text-white" />,
      title: "Cierre Exitoso",
      description: "Acompañamos hasta la firma de escritura",
      detail: "Gestión completa del proceso de venta",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden py-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-groppa-dark-gray mb-6">
            Nuestro Proceso a la{" "}
            <span className="text-groppa-green">Venta</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Un proceso transparente y eficiente diseñado específicamente para la
            venta de departamentos. Cada paso está optimizado para obtener el
            mejor precio en el menor tiempo.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-groppa-green via-groppa-green/50 to-groppa-green hidden lg:block" />

            {/* Process Steps */}
            <div className="space-y-12 lg:space-y-24">
              {processSteps.map((step, index) => {
                const isEven = index % 2 === 0

                return (
                  <div key={index} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-groppa-green to-groppa-green/80 rounded-full flex items-center justify-center shadow-lg z-10  lg:flex">
                      <span className="text-white font-bold text-base">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`lg:w-1/2 ${
                        isEven ? "lg:pr-16" : "lg:pl-16 lg:ml-auto"
                      }`}
                    >
                      <Card
                        className={`group hover:shadow-xl transition-all duration-300 bg-white border border-slate-200 overflow-hidden ${
                          isEven ? "lg:text-right" : ""
                        }`}
                      >
                        <CardContent className="p-6">
                          {/* Mobile Timeline Number */}
                          <div className="lg:hidden w-10 h-10 bg-gradient-to-br from-groppa-green to-groppa-green/80 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <span className="text-white font-bold text-sm">
                              {index + 1}
                            </span>
                          </div>

                          {/* Icon Container */}
                          <div
                            className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-groppa-green to-groppa-green/80 rounded-xl mb-4 shadow-lg transition-all duration-300 ${
                              isEven ? "lg:ml-auto" : ""
                            }`}
                          >
                            {step.icon}
                          </div>

                          {/* Content */}
                          <div
                            className={
                              isEven ? "lg:text-right" : "lg:text-left"
                            }
                          >
                            <h3 className="text-xl font-bold text-groppa-dark-gray mb-2 group-hover:text-groppa-green transition-colors duration-300">
                              {step.title}
                            </h3>
                            <p className="text-base text-slate-700 mb-3 leading-relaxed">
                              {step.description}
                            </p>
                            <p className="text-slate-600 text-sm">
                              {step.detail}
                            </p>
                          </div>

                          {/* Progress Indicator */}
                          <div
                            className={`mt-4 flex items-center gap-2 ${
                              isEven ? "lg:justify-end" : "lg:justify-start"
                            } justify-center`}
                          >
                            <CheckCircle className="w-4 h-4 text-groppa-green" />
                            <span className="text-xs text-slate-500 font-medium">
                              Paso {index + 1} de {processSteps.length}
                            </span>
                          </div>
                        </CardContent>

                        <div
                          className={`absolute top-0 ${
                            isEven ? "right-0" : "left-0"
                          } w-1 h-full bg-gradient-to-b from-groppa-green to-groppa-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        ></div>
                      </Card>
                    </div>

                    {/* Connection Arrow (Desktop) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -bottom-12 z-20">
                        <div className="w-6 h-6 bg-groppa-green/20 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-3 h-3 text-groppa-green rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
