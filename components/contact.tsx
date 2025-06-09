import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section
      id="contacto"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/placeholder.svg?width=1200&height=600')" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container px-4 sm:px-6 md:px-8 relative z-10">
        <Card className="max-w-lg mx-auto p-4 sm:p-6 shadow-xl bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-3 sm:pb-4">
            <CardTitle className="text-xl sm:text-2xl font-bold text-groppa-dark-gray mb-2">
              <span className="text-groppa-green">Contactanos</span>
            </CardTitle>
            <CardDescription className="text-slate-600 text-sm sm:text-base">
              Completá el formulario y te respondemos rápido.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <form
              action="mailto:contacto@groppa.com"
              method="post"
              encType="text/plain"
              className="space-y-3 sm:space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-groppa-dark-gray mb-1">
                  Nombre Completo
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-groppa-dark-gray mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-groppa-dark-gray mb-1">
                  Teléfono (Opcional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Tu número de teléfono"
                  className="h-10 sm:h-11 text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-groppa-dark-gray mb-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Contanos sobre tu propiedad o consulta..."
                  required
                  rows={4}
                  className="text-sm sm:text-base resize-none"
                />
              </div>
              <Button
                type="submit"
                className="bg-groppa-green text-white w-full hover:bg-groppa-green/90 text-base sm:text-lg py-3 h-auto"
              >
                Enviar Consulta
              </Button>
            </form>
            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-groppa-dark-gray font-medium mb-2 sm:mb-3 text-sm">O contactanos directamente:</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3">
                <Button
                  variant="outline"
                  asChild
                  className="border-groppa-green text-groppa-green hover:text-groppa-green hover:bg-groppa-green/10 w-full sm:w-auto text-sm py-2"
                >
                  <a
                    href="https://wa.me/+5491126631808?text=Hola!!%20Estoy%20interesado/a%20en%20sus%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="border-groppa-green text-groppa-green hover:text-groppa-green hover:bg-groppa-green/10 w-full sm:w-auto text-sm py-2"
                >
                  <a href="tel:+541123456789">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Llamar Ahora
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
