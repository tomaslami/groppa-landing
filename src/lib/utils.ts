import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Función para generar mensajes personalizados de WhatsApp
export function generateWhatsAppMessage(context: string, data?: any): string {
  const basePhone = "+5491124787452"
  
  switch (context) {
    case "property-detail":
      return `https://wa.me/${basePhone}?text=Hola! Te escribo para visitar ${data.fullAddress}. Me interesa conocer más detalles sobre esta propiedad.`
    
    case "schedule-visit":
      return `https://wa.me/${basePhone}?text=Hola! Me gustaría coordinar una visita para la propiedad en ${data.fullAddress}. ¿Cuándo podríamos agendar una cita?`
    
    case "property-listing":
      return `https://wa.me/${basePhone}?text=Hola! Me interesa la propiedad ${data.title} (ID: ${data.id}). ¿Podrías contarme más detalles?`
    
    case "general-inquiry":
      return `https://wa.me/${basePhone}?text=Hola! Estoy buscando una propiedad y me gustaría recibir asesoramiento personalizado.`
    
    case "not-found":
      return `https://wa.me/${basePhone}?text=Hola! No encontré la propiedad que busco en el listado. ¿Pueden ayudarme?`
    
    case "services":
      return `https://wa.me/${basePhone}?text=Hola! Estoy interesado/a en sus servicios inmobiliarios.`
    
    case "contact":
      return `https://wa.me/${basePhone}?text=Hola! Me gustaría contactarme para consultar sobre sus servicios.`
    
    default:
      return `https://wa.me/${basePhone}?text=Hola! Me gustaría recibir más información.`
  }
}
