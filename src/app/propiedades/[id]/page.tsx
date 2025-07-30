"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  Phone,
  MessageCircle,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  User,
  Building,
  Home,
  Car,
  Wifi,
  Dumbbell,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { propertyData, getPropertyById } from "@/data/properties"
import type { Property } from "@/types/types"
import { cn, generateWhatsAppMessage } from "@/lib/utils"

// Función helper para convertir nombre de icono a componente JSX
const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    Car,
    Wifi,
    Dumbbell,
    Shield,
    Building,
    Home,
  }
  
  const IconComponent = iconMap[iconName]
  return IconComponent ? <IconComponent className="w-5 h-5" /> : null
}


interface PropertyDetailPageProps {
  params: Promise<{ id: string }>
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)

  const { id } = React.use(params)
  const property = propertyData[id]

  // Detectar orientación landscape en pantallas pequeñas
  useEffect(() => {
    const checkLandscape = () => {
      setIsLandscape(window.innerHeight <= 500 && window.innerWidth > window.innerHeight)
    }

    checkLandscape()
    window.addEventListener('resize', checkLandscape)
    window.addEventListener('orientationchange', checkLandscape)

    return () => {
      window.removeEventListener('resize', checkLandscape)
      window.removeEventListener('orientationchange', checkLandscape)
    }
  }, [])

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-groppa-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-12 h-12 text-groppa-green" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-groppa-dark-gray mb-4">
            Propiedad no encontrada
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-8">
            La propiedad que buscás no existe o fue removida del listado.
          </p>
          <Button 
            asChild 
            className="bg-groppa-green text-white hover:bg-groppa-green/90 font-semibold px-8 py-6"
          >
            <Link href="/propiedades">Volver a Propiedades</Link>
          </Button>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }


  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isImageModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup: restaurar scroll cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isImageModalOpen])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Modal de imagen en pantalla completa */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-4">
            <Image
              width={1200}
              height={800}
              src={property.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${property.title} - Imagen ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Botón cerrar */}
            <Button
              variant="secondary"
              size="icon"
              className={cn(
                "absolute z-50 flex items-center justify-center rounded-md backdrop-blur-sm transition-all duration-200 bg-white/90 hover:bg-white",
                isLandscape 
                  ? "top-1 right-1 w-7 h-7 min-w-[28px] min-h-[28px]" 
                  : "top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 min-w-[32px] min-h-[32px] sm:min-w-[40px] sm:min-h-[40px]"
              )}
              onClick={() => setIsImageModalOpen(false)}
            >
              <span className="text-base sm:text-lg font-bold">✕</span>
            </Button>
            
            {/* Controles de navegación en modal */}
            {property.images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 z-50 flex items-center justify-center rounded-md backdrop-blur-sm transition-all duration-200 bg-white/90 hover:bg-white",
                    isLandscape 
                      ? "left-1 w-9 h-9 min-w-[36px] min-h-[36px]" 
                      : "left-2 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]"
                  )}
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-8 h-8 " />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className={cn(
                    "absolute top-1/2 -translate-y-1/2 z-50 flex items-center justify-center rounded-md backdrop-blur-sm transition-all duration-200 bg-white/90 hover:bg-white",
                    isLandscape 
                      ? "right-1 w-9 h-9 min-w-[36px] min-h-[36px]" 
                      : "right-2 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px]"
                  )}
                  onClick={nextImage}
                >
                  <ChevronRight className="w-10 h-10 " />
                </Button>
              </>
            )}
            
            {/* Indicador de imagen en modal */}
            <div 
              className={cn(
                "absolute left-1/2 -translate-x-1/2 backdrop-blur-sm rounded-full z-50 transition-all duration-200 bg-black/80 text-white font-medium",
                isLandscape 
                  ? "bottom-1 px-2 py-1 text-[0.7rem]" 
                  : "bottom-2 sm:bottom-4 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm"
              )}
            >
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container px-4 sm:px-6 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/propiedades"
                className="flex items-center gap-2 text-groppa-green hover:text-groppa-green/80 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium ">Atrás</span>
              </Link>
              <div className="hidden sm:block w-px h-6 bg-slate-300"></div>
              <Link href="/" className="text-xl sm:text-2xl font-bold text-groppa-green">
                GROPPA
              </Link>
            </div>
           
          </div>
        </div>
      </header>

      <div className="container px-4 sm:px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna Principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Galería de Imágenes */}
            <Card className="overflow-hidden shadow-lg border border-slate-200">
              <div className="relative">
                <Image
                  width={800}
                  height={600}
                  src={property.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${property.title} - Imagen ${currentImageIndex + 1}`}
                  className="w-full h-80 sm:h-96 lg:h-[400px] object-cover cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                />

                {/* Controles de Navegación */}
                {property.images.length > 1 && (
                  <>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                      onClick={nextImage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </>
                )}

                {/* Indicador de Imagen */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {property.images.length}
                </div>

                {/* Botón Expandir */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <Maximize2 className="w-4 h-4" />
                </Button>

                {/* Badge de Tipo */}
                <Badge
                  className={cn(
                    "absolute top-4 left-4 font-semibold",
                    property.type === "venta" 
                      ? "bg-groppa-green text-white hover:bg-groppa-green/90" 
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  )}
                >
                  {property.type === "venta" ? "EN VENTA" : "EN ALQUILER"}
                </Badge>
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="p-4 bg-white h-max">
                  <div className="flex gap-2 pb-2">
                    {property.images.map((image: string, index: number) => (
                      <Image
                        key={index}
                        width={80}
                        height={60}
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className={cn(
                          "w-20 h-16 object-cover rounded cursor-pointer flex-shrink-0 transition-all duration-300",
                          index === currentImageIndex 
                            ? "ring-2 ring-groppa-green shadow-lg" 
                            : "opacity-70 hover:opacity-100"
                        )}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </Card>

            {/* Información Principal */}
            <Card className="shadow-lg border border-slate-200">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
                      {property.title}
                    </h1>
                    <div className="flex items-center gap-2 text-slate-600 mb-6">
                      <MapPin className="w-5 h-5 text-groppa-green" />
                      <span className="text-base sm:text-lg">{property.fullAddress}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-groppa-green mb-2">
                      {property.price}
                    </div>
                    {property.expenses && (
                      <div className="text-sm sm:text-base text-slate-600">
                        + Expensas: {property.expenses}
                      </div>
                    )}
                  </div>

                  <div className="w-full h-px bg-slate-200"></div>

                  {/* Características Principales */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <Bed className="w-6 h-6 text-groppa-green mx-auto mb-2" />
                      <div className="font-semibold text-groppa-dark-gray">{property.beds}</div>
                      <div className="text-sm text-slate-600">Dormitorios</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <Bath className="w-6 h-6 text-groppa-green mx-auto mb-2" />
                      <div className="font-semibold text-groppa-dark-gray">{property.baths}</div>
                      <div className="text-sm text-slate-600">Baños</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <Square className="w-6 h-6 text-groppa-green mx-auto mb-2" />
                      <div className="font-semibold text-groppa-dark-gray">{property.totalArea}</div>
                      <div className="text-sm text-slate-600">Superficie</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                      <Calendar className="w-6 h-6 text-groppa-green mx-auto mb-2" />
                      <div className="font-semibold text-groppa-dark-gray">{property.age}</div>
                      <div className="text-sm text-slate-600">Antigüedad</div>
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-200"></div>

                  {/* Descripción */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-groppa-dark-gray mb-4">
                      Descripción
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Características y Amenities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-lg border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-groppa-dark-gray mb-4">
                    Características
                  </h3>
                  <ul className="space-y-3">
                    {property.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-groppa-green rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border border-slate-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-groppa-dark-gray mb-4">
                    Amenities
                  </h3>
                  <div className="space-y-3">
                    {property.amenities.map((amenity: any, index: number) => (
                      <div key={index} className="flex items-center gap-3 text-slate-600">
                        <div className="text-groppa-green">{getIconComponent(amenity.iconName)}</div>
                        <span className="text-sm sm:text-base">{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detalles Técnicos */}
            <Card className="shadow-lg border border-slate-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-groppa-dark-gray mb-6">
                  Detalles de la Propiedad
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <span className="text-sm text-slate-500 block">Tipo:</span>
                    <div className="font-medium text-groppa-dark-gray">{property.propertyType}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block">Superficie total:</span>
                    <div className="font-medium text-groppa-dark-gray">{property.totalArea}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block">Superficie cubierta:</span>
                    <div className="font-medium text-groppa-dark-gray">{property.coveredArea}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block">Piso:</span>
                    <div className="font-medium text-groppa-dark-gray">{property.floor}</div>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 block">Orientación:</span>
                    <div className="font-medium text-groppa-dark-gray">{property.orientation}</div>
                  </div>
                  {property.balcony && (
                    <div>
                      <span className="text-sm text-slate-500 block">Balcón/Patio:</span>
                      <div className="font-medium text-groppa-dark-gray">{property.balcony}</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Ubicación y Cercanías */}
            <Card className="shadow-lg border border-slate-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-groppa-dark-gray mb-6">
                  Ubicación y Cercanías
                </h3>
                <div className="space-y-3">
                  {property.nearbyPlaces.map((place: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 text-slate-600">
                      <MapPin className="w-4 h-4 text-groppa-green flex-shrink-0" />
                      <span className="text-sm sm:text-base">{place}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar de Contacto */}
          <div className="space-y-6 ">
            <Card className="shadow-lg border border-slate-200 sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-groppa-dark-gray mb-2">
                    ¿Te interesa esta propiedad?
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Contactanos para más información o para coordinar una visita
                  </p>
                </div>

                <div className="space-y-4">
                  <Button asChild className="w-full bg-groppa-green text-white hover:bg-groppa-green/90 h-12 font-semibold shadow-lg hover:shadow-groppa-green/25 transition-all duration-300">
                    <a
                      href={generateWhatsAppMessage("property-detail", property)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Consultar por WhatsApp
                    </a>
                  </Button>

                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full h-12 border-slate-300 text-groppa-dark-gray hover:bg-slate-50 font-semibold"
                  >
                    <a
                      href={generateWhatsAppMessage("schedule-visit", property)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Visita
                    </a>
                  </Button>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
