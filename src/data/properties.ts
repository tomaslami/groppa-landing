import type { Property } from "@/types/types"

// Tipo modificado para amenities con nombre de icono en lugar de elemento JSX
type PropertyAmenity = {
  iconName: string
  name: string
}

// Tipo modificado para las propiedades de datos
type PropertyData = Omit<Property, 'amenities'> & {
  amenities: PropertyAmenity[]
}

// Datos de propiedades (en una aplicación real, esto vendría de una API o base de datos)
export const propertyData: { [key: string]: PropertyData } = {
  "1": {
    id: 1,
    images: [
      "/propiedades/gallo/Gallo-1.jpg",
      "/propiedades/gallo/Gallo-2.jpg",
      "/propiedades/gallo/Gallo-3.jpg",
      "/propiedades/gallo/Gallo-4.jpg",
      "/propiedades/gallo/Gallo-5.jpg",
      "/propiedades/gallo/Gallo-6.jpg",
      "/propiedades/gallo/Gallo-7.jpg",
      "/propiedades/gallo/Gallo-8.jpg",
      "/propiedades/gallo/Gallo-9.jpg",
    ],
    title: "2 Ambientes - Palermo, CABA",
    location: "Palermo, CABA",
    fullAddress: "Gallo 1184",
    price: "USD 133.000",
    type: "venta",
    propertyType: "Departamento",
    beds: 1,
    baths: 1,
    area: "50 m²",
    totalArea: "50 m²",
    coveredArea: "50 m²",
    floor: "Consultar piso",
    orientation: "Excelente iluminación natural",
    age: "Moderno",
    expenses: "$160.000/mes",
    description:
      "Moderno y luminoso departamento de 2 ambientes ubicado en una de las zonas más buscadas de Palermo. Cuenta con amplio living comedor con excelente entrada de luz natural, cocina integrada separada con barra desayunadora, espacio para heladera y lavarropas, gran dormitorio con placard espejado de piso a techo. Excelente estado general, con detalles modernos y funcionales. Ideal para vivir o invertir en una zona conectada, segura y rodeada de servicios, comercios, transporte y espacios verdes.",
    features: [
      "Amplio living comedor con excelente luz natural",
      "Cocina integrada con barra desayunadora",
      "Espacio para heladera y lavarropas",
      "Gran dormitorio con placard espejado de piso a techo",
      "Excelente estado general",
      "Detalles modernos y funcionales",
      "Ubicación privilegiada en Palermo",
      "Zona conectada y segura",
    ],
    amenities: [
      { iconName: "Home", name: "Pileta" },
      { iconName: "Building", name: "SUM con parrilla" },
      { iconName: "Shield", name: "Edificio de categoría" },
      { iconName: "Car", name: "Zona con servicios" },
    ],
    nearbyPlaces: [
      "Centro de Palermo",
      "Servicios y comercios",
      "Transporte público",
      "Espacios verdes",
      "Zona gastronómica de Palermo",
      "Centros comerciales",
    ],
    agent: {
      name: "Gustavo Groppa",
      phone: "+54 9 11 2478-7452",
      whatsapp: "+5491124787452",
      email: "contacto@groppa.com",
    },
  },
}

// Lista de todas las propiedades para facilitar filtros y búsquedas
export const allProperties: PropertyData[] = Object.values(propertyData)

// Propiedades destacadas (para mostrar en la página principal)
export const featuredProperties: PropertyData[] = [
  propertyData["1"],
  // Nota: Solo tenemos una propiedad por ahora, repetiremos para demostración
  propertyData["1"],
  propertyData["1"],
].filter(Boolean) // Filtrar propiedades undefined

// Función helper para obtener una propiedad por ID
export const getPropertyById = (id: string): PropertyData | undefined => {
  return propertyData[id]
}

// Función helper para obtener propiedades por tipo
export const getPropertiesByType = (type: "venta" | "alquiler"): PropertyData[] => {
  return allProperties.filter(property => property.type === type)
}

// Función helper para obtener propiedades por tipo de propiedad
export const getPropertiesByPropertyType = (propertyType: string): PropertyData[] => {
  return allProperties.filter(property => property.propertyType === propertyType)
}

// Función helper para convertir iconName a elemento JSX
export const getIconComponent = (iconName: string) => {
  // Esta función necesitará ser implementada en cada componente que la use
  // para evitar importar componentes JSX en este archivo de datos
  return iconName
} 