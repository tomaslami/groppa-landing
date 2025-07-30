import type { ReactNode } from "react"

export interface Differentiator {
  icon: React.ReactNode
  title: string
  description: string
}

export interface ServiceItem {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Property {
  id: number
  images: string[]
  title: string
  location: string
  fullAddress: string
  price: string
  type: "venta" | "alquiler"
  propertyType: string
  beds: number
  baths: number
  area: string
  totalArea: string
  coveredArea: string
  balcony?: string
  floor: string
  orientation: string
  age: string
  expenses?: string
  description: string
  features: string[]
  amenities: {
    icon: React.ReactNode
    name: string
  }[]
  nearbyPlaces: string[]
  agent: {
    name: string
    phone: string
    whatsapp: string
    email: string
  }
}
