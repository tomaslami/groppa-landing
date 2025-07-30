import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Bed, Bath, Square } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { featuredProperties } from "@/data/properties"

export default function FeaturedProperties() {

  return (
    <section 
      id="propiedades-destacadas" 
      className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-slate-50"
    >
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-groppa-dark-gray mb-4">
            Propiedades <span className="text-groppa-green">Destacadas</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 px-4 sm:px-0">
            Descubrí nuestra selección de propiedades exclusivas en las mejores ubicaciones de Buenos Aires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {featuredProperties.map((property, index) => (
            <Card
              key={`${property.id}-${index}`}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-slate-200 h-full group"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={400}
                  height={300}
                  src={property.images?.[0] || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                ></Image>
                <div className="absolute top-4 right-4 bg-groppa-green text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  {property.price}
                </div>
              </div>

              <CardContent className="p-6 flex flex-col h-max">
                <h3 className="text-lg sm:text-xl font-semibold text-groppa-dark-gray mb-2 group-hover:text-groppa-green transition-colors duration-300">
                  {property.title}
                </h3>

                <div className="flex items-center gap-1.5 text-slate-600 mb-4">
                  <MapPin className="w-4 h-4 text-groppa-green" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-600 mb-6 bg-slate-50 rounded-lg p-3">
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

                <div className="mt-auto">
                  <Button 
                    className="w-full bg-groppa-green text-white hover:bg-groppa-green/90 font-semibold transition-all duration-300 shadow-lg hover:shadow-groppa-green/25"
                    asChild
                  >
                    <Link href={`/propiedades/${property.id}`}>
                      Ver Detalles
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-groppa-green text-groppa-green hover:bg-groppa-green hover:text-white bg-transparent font-semibold transition-all duration-300 px-8 py-6"
          >
            <Link href="/propiedades">Ver Todas las Propiedades</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 