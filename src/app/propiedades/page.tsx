"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Square, Search, Filter, Grid, List, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { allProperties } from "@/data/properties"
import type { Property } from "@/types/types"
import { generateWhatsAppMessage } from "@/lib/utils"

// Interfaz local para las propiedades de esta página
interface ListingProperty {
  id: number
  image: string
  title: string
  location: string
  price: string
  type: "venta" | "alquiler"
  propertyType: string
  beds: number
  baths: number
  area: string
  zone: string
  rooms: number
}

// Función helper para convertir las propiedades del formato centralizado al formato de la página
const formatPropertiesForListing = (properties: any[]): ListingProperty[] => {
  return properties.map(property => ({
    id: property.id,
    image: property.images[0] || "/placeholder.svg",
    title: property.title,
    location: property.location,
    price: property.price,
    type: property.type,
    propertyType: property.propertyType.toLowerCase(),
    beds: property.beds,
    baths: property.baths,
    area: property.area,
    zone: property.location.toLowerCase().split(',')[0].trim().replace(/\s+/g, ''),
    rooms: property.beds,
  }))
}

// Datos formateados para esta página
const propertiesData = formatPropertiesForListing(allProperties)



export default function PropiedadesPage() {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("recent")
  const [filters, setFilters] = useState({
    operation: "",
    propertyType: "",
    zone: "",
    rooms: "",
    minPrice: "",
    maxPrice: "",
  })

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    applyFilters(newFilters, sortBy)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    applyFilters(filters, value)
  }

  const sortProperties = (properties: ListingProperty[], sortBy: string) => {
    const sorted = [...properties]
    
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d]/g, ''))
          const priceB = parseFloat(b.price.replace(/[^\d]/g, ''))
          return priceA - priceB
        })
      case "price-high":
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^\d]/g, ''))
          const priceB = parseFloat(b.price.replace(/[^\d]/g, ''))
          return priceB - priceA
        })
      case "area":
        return sorted.sort((a, b) => {
          const areaA = parseFloat(a.area.replace(/[^\d]/g, ''))
          const areaB = parseFloat(b.area.replace(/[^\d]/g, ''))
          return areaB - areaA
        })
      case "recent":
      default:
        return sorted.sort((a, b) => b.id - a.id) // Más recientes por ID
    }
  }

  const applyFilters = (currentFilters: typeof filters, currentSort: string = sortBy) => {
    const filtered = propertiesData.filter((property) => {
      if (currentFilters.operation && property.type !== currentFilters.operation) return false
      if (currentFilters.propertyType && property.propertyType !== currentFilters.propertyType) return false
      if (currentFilters.zone && property.zone !== currentFilters.zone) return false
      if (currentFilters.rooms && property.rooms.toString() !== currentFilters.rooms) return false
      return true
    })
    
    const sortedAndFiltered = sortProperties(filtered, currentSort)
    setFilteredProperties(sortedAndFiltered)
  }

  const clearFilters = () => {
    const resetFilters = {
      operation: "",
      propertyType: "",
      zone: "",
      rooms: "",
      minPrice: "",
      maxPrice: "",
    }
    setFilters(resetFilters)
    setSortBy("recent")
    applyFilters(resetFilters, "recent")
  }

  // Aplicar ordenamiento inicial
  useEffect(() => {
    applyFilters(filters, sortBy)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Solo ejecutar una vez al montar el componente

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container px-4 sm:px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-groppa-green hover:text-groppa-green/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium hidden sm:inline">Volver al inicio</span>
                <span className="text-sm font-medium sm:hidden">Volver</span>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <Link href="/" className="text-xl sm:text-2xl font-bold text-groppa-green">
                GROPPA
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`transition-all duration-300 ${
                  viewMode === "grid" 
                    ? "bg-groppa-green text-white hover:bg-groppa-green/90" 
                    : "border-slate-300 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`transition-all duration-300 ${
                  viewMode === "list" 
                    ? "bg-groppa-green text-white hover:bg-groppa-green/90" 
                    : "border-slate-300 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 sm:px-6 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar con Filtros */}
          <div className="lg:w-80 space-y-6">
            <Card className="shadow-lg border border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-groppa-dark-gray flex items-center gap-2">
                    <Filter className="w-5 h-5 text-groppa-green" />
                    Filtros
                  </h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-groppa-green hover:bg-groppa-green/10 font-medium"
                  >
                    Limpiar
                  </Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-groppa-dark-gray mb-3">
                      Tipo de operación
                    </label>
                    <Select value={filters.operation} onValueChange={(value) => handleFilterChange("operation", value)}>
                      <SelectTrigger className="border-slate-300 focus:border-groppa-green focus:ring-groppa-green/20">
                        <SelectValue placeholder="Venta / Alquiler" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="venta">Venta</SelectItem>
                        <SelectItem value="alquiler">Alquiler</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-groppa-dark-gray mb-3">
                      Tipo de propiedad
                    </label>
                    <Select
                      value={filters.propertyType}
                      onValueChange={(value) => handleFilterChange("propertyType", value)}
                    >
                      <SelectTrigger className="border-slate-300 focus:border-groppa-green focus:ring-groppa-green/20">
                        <SelectValue placeholder="Departamento, Casa..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="departamento">Departamento</SelectItem>
                        <SelectItem value="casa">Casa</SelectItem>
                        <SelectItem value="ph">PH</SelectItem>
                        <SelectItem value="local">Local</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-groppa-dark-gray mb-3">
                      Zona
                    </label>
                    <Select value={filters.zone} onValueChange={(value) => handleFilterChange("zone", value)}>
                      <SelectTrigger className="border-slate-300 focus:border-groppa-green focus:ring-groppa-green/20">
                        <SelectValue placeholder="Barrio o zona" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="palermo">Palermo</SelectItem>
                        <SelectItem value="belgrano">Belgrano</SelectItem>
                        <SelectItem value="recoleta">Recoleta</SelectItem>
                        <SelectItem value="caballito">Caballito</SelectItem>
                        <SelectItem value="villa-crespo">Villa Crespo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-groppa-dark-gray mb-3">
                      Ambientes
                    </label>
                    <Select value={filters.rooms} onValueChange={(value) => handleFilterChange("rooms", value)}>
                      <SelectTrigger className="border-slate-300 focus:border-groppa-green focus:ring-groppa-green/20">
                        <SelectValue placeholder="1, 2, 3+ amb" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 ambiente</SelectItem>
                        <SelectItem value="2">2 ambientes</SelectItem>
                        <SelectItem value="3">3 ambientes</SelectItem>
                        <SelectItem value="4">4+ ambientes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Información de Contacto */}
            <Card className="shadow-lg border-2 border-groppa-green bg-groppa-green/5">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-groppa-dark-gray mb-3">
                  ¿Necesitás ayuda?
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Nuestros asesores están listos para ayudarte a encontrar la propiedad perfecta.
                </p>
                <Button 
                  asChild 
                  className="w-full bg-groppa-green text-white hover:bg-groppa-green/90 font-semibold shadow-lg hover:shadow-groppa-green/25 transition-all duration-300"
                >
                  <a
                    href={generateWhatsAppMessage("general-inquiry")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contactar Asesor
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contenido Principal */}
          <div className="flex-1">
            {/* Header de Resultados */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
                  Todas las <span className="text-groppa-green">Propiedades</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-600">
                  {filteredProperties.length} propiedades encontradas
                  {filteredProperties.length !== allProperties.length && ` de ${allProperties.length} totales`}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-slate-600">Ordenar por:</span>
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-48 border-slate-300 focus:border-groppa-green focus:ring-groppa-green/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Más recientes</SelectItem>
                    <SelectItem value="price-low">Precio: menor a mayor</SelectItem>
                    <SelectItem value="price-high">Precio: mayor a menor</SelectItem>
                    <SelectItem value="area">Superficie</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Grid/Lista de Propiedades */}
            <div className={
              viewMode === "grid" 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" 
                : "space-y-6"
            }>
              {filteredProperties.map((property) => (
                <Card
                  key={property.id}
                  className={`overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-slate-200 hover:border-groppa-green/50 group ${
                    viewMode === "list" ? "flex flex-row" : "h-full"
                  }`}
                >
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "w-80 flex-shrink-0" : ""
                  }`}>
                    <Image
                      width={400}
                      height={300}
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === "list" ? "w-full h-full" : "w-full h-48 sm:h-56"
                      }`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`font-semibold ${
                          property.type === "venta" 
                            ? "bg-groppa-green text-white hover:bg-groppa-green/90" 
                            : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                      >
                        {property.type === "venta" ? "VENTA" : "ALQUILER"}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-semibold text-groppa-dark-gray shadow-lg">
                      {property.price}
                    </div>
                  </div>

                  <CardContent className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                    <div className="space-y-4">
                      <h3 className="text-lg sm:text-xl font-semibold text-groppa-dark-gray group-hover:text-groppa-green transition-colors duration-300">
                        {property.title}
                      </h3>

                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4 text-groppa-green" />
                        <span className="text-sm">{property.location}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm text-slate-600 bg-slate-50 rounded-lg p-3">
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-4 h-4 text-groppa-green" />
                          <span className="font-medium">{property.beds} hab</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-4 h-4 text-groppa-green" />
                          <span className="font-medium">{property.baths} baños</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Square className="w-4 h-4 text-groppa-green" />
                          <span className="font-medium">{property.area}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`flex gap-3 ${viewMode === "list" ? "mt-6" : "mt-6"}`}>
                      <Button 
                        asChild 
                        className="flex-1 bg-groppa-green text-white hover:bg-groppa-green/90 font-semibold shadow-lg hover:shadow-groppa-green/25 transition-all duration-300"
                      >
                        <Link href={`/propiedades/${property.id}`}>Ver Detalles</Link>
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-groppa-green text-groppa-green hover:bg-groppa-green hover:text-white font-semibold transition-all duration-300"
                        asChild
                      >
                        <a
                          href={generateWhatsAppMessage("property-listing", property)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Contactar
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mensaje si no hay resultados */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-groppa-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-groppa-green" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-groppa-dark-gray mb-4">
                  No se encontraron propiedades
                </h3>
                <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-md mx-auto">
                  Intentá modificar los filtros o contactanos para que te ayudemos a encontrar lo que buscás.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={clearFilters} 
                    className="bg-groppa-green text-white hover:bg-groppa-green/90 font-semibold px-8"
                  >
                    Limpiar Filtros
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-groppa-green text-groppa-green hover:bg-groppa-green hover:text-white font-semibold px-8"
                    asChild
                  >
                    <a
                      href={generateWhatsAppMessage("not-found")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactar Asesor
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
