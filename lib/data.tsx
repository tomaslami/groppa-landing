import {
  ShieldCheck,
  Scale,
  Zap,
  Users,
  Lightbulb,
  HomeIcon,
  Gavel,
  CalendarClock,
  Smile,
  MessageCircle,
  Search,
  Briefcase,
  FileText,
  MapPin,
  Handshake,
} from "lucide-react"
import type { ServiceItem, ProcessStep, Differentiator, Testimonial } from "./types"

export const servicesData: ServiceItem[] = [
  {
    icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />,
    title: "Confianza y Profesionalismo",
    description: "Expertos dedicados a gestionar tu propiedad con la máxima seriedad y transparencia.",
  },
  {
    icon: <Scale className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />,
    title: "Seguridad Legal",
    description: "Asesoramiento legal integral para proteger tus intereses en cada paso del proceso.",
  },
  {
    icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />,
    title: "Rapidez con Estrategia",
    description: "Planes de acción eficientes y personalizados para alcanzar tus objetivos en el menor tiempo.",
  },
  {
    icon: <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />,
    title: "Acompañamiento Humano",
    description: "Entendemos que es un gran paso. Te acompañamos de cerca, con empatía y dedicación.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-groppa-green mb-3 sm:mb-4" />,
    title: "Soluciones Creativas",
    description: "Ideas innovadoras y un enfoque integral para destacar tu propiedad en el mercado.",
  },
]

export const processStepsData: ProcessStep[] = [
  {
    icon: <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-groppa-green" />,
    title: "Te escuchamos",
    description: "Comprendemos tus necesidades y objetivos.",
  },
  {
    icon: <Search className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-groppa-green" />,
    title: "Evaluamos tu propiedad",
    description: "Análisis detallado del inmueble y su potencial.",
  },
  {
    icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-groppa-green" />,
    title: "Proponemos un plan",
    description: "Estrategia personalizada para venta o alquiler.",
  },
  {
    icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-groppa-green" />,
    title: "Firmamos con respaldo legal",
    description: "Acuerdos claros y seguros para tu tranquilidad.",
  },
  {
    icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-groppa-green" />,
    title: "Publicamos y damos seguimiento",
    description: "Máxima visibilidad y gestión proactiva.",
  },
  {
    icon: <Handshake className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-groppa-green" />,
    title: "Acompañamos hasta el cierre",
    description: "Soporte continuo hasta finalizar la operación.",
  },
]

export const differentiatorsData: Differentiator[] = [
  {
    icon: <HomeIcon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />,
    title: "Estudio de Arquitectura Propio",
    description: "Potenciamos el valor de tu propiedad con soluciones de diseño y refacción.",
  },
  {
    icon: <Gavel className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />,
    title: "Asesoría Legal Especializada",
    description: "Abogados expertos en derecho inmobiliario para tu total seguridad.",
  },
  {
    icon: <CalendarClock className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />,
    title: "Administración Gratuita por 6 Meses",
    description: "Gestionamos tu alquiler sin costo inicial para facilitar tu transición.",
  },
  {
    icon: <Smile className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-groppa-green mb-2 sm:mb-3" />,
    title: "Atención Empática y Cercana",
    description: "Un equipo humano que entiende tus prioridades y te acompaña con calidez.",
  },
]

export const testimonialsData: Testimonial[] = [
  {
    name: "Laura M.",
    quote: "GROPPA entendió perfectamente mis necesidades. Su profesionalismo y calidez hicieron toda la diferencia.",
    avatarFallback: "LM",
  },
  {
    name: "Carlos G.",
    quote: "El acompañamiento legal fue impecable. Me sentí seguro durante todo el proceso de venta.",
    avatarFallback: "CG",
  },
  {
    name: "Ana P.",
    quote: "Alquilar mi departamento fue rápido y sin complicaciones gracias a su gestión eficiente.",
    avatarFallback: "AP",
  },
]
