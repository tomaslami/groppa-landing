import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MessageCircle,
  Phone,
  Mail,
  User,
  Send,
  MapPin,
  Clock,
} from "lucide-react"

export default function Contact() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-groppa-dark-gray mb-6 tracking-tight">
            Escribinos para <span className="text-groppa-green">saber más</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Contáctanos para resolver tus dudas y concretar tu compra.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Contact Form - Takes 7 columns */}
            <div className="lg:col-span-7">
              <Card className="bg-white border border-slate-200 shadow-lg overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-groppa-dark-gray mb-3">
                      Envía tu Consulta
                    </h2>
                    <p className="text-slate-600">
                      Completa el formulario y nos pondremos en contacto en
                      menos de 24 horas
                    </p>
                  </div>

                  <form
                    action="mailto:contacto@groppa.com"
                    method="post"
                    encType="text/plain"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-groppa-dark-gray text-sm font-semibold mb-3 group-focus-within:text-groppa-green transition-colors">
                          <User className="inline h-4 w-4 mr-2" />
                          Nombre Completo
                        </label>
                        <Input
                          name="name"
                          type="text"
                          placeholder="Tu nombre completo"
                          required
                          className="h-12 bg-white border-slate-300 text-groppa-dark-gray placeholder:text-slate-500 focus:border-groppa-green focus:ring-groppa-green/20 transition-all duration-300"
                        />
                      </div>

                      <div className="group">
                        <label className="block text-groppa-dark-gray text-sm font-semibold mb-3 group-focus-within:text-groppa-green transition-colors">
                          <Mail className="inline h-4 w-4 mr-2" />
                          Email
                        </label>
                        <Input
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          required
                          className="h-12 bg-white border-slate-300 text-groppa-dark-gray placeholder:text-slate-500 focus:border-groppa-green focus:ring-groppa-green/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-groppa-dark-gray text-sm font-semibold mb-3 group-focus-within:text-groppa-green transition-colors">
                        <Phone className="inline h-4 w-4 mr-2" />
                        Teléfono (Opcional)
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Tu número de teléfono"
                        className="h-12 bg-white border-slate-300 text-groppa-dark-gray placeholder:text-slate-500 focus:border-groppa-green focus:ring-groppa-green/20 transition-all duration-300"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-groppa-dark-gray text-sm font-semibold mb-3 group-focus-within:text-groppa-green transition-colors">
                        <MessageCircle className="inline h-4 w-4 mr-2" />
                        Mensaje
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Cuéntanos sobre tu proyecto, consulta o cómo podemos ayudarte..."
                        required
                        rows={6}
                        className="bg-white border-slate-300 text-groppa-dark-gray placeholder:text-slate-500 focus:border-groppa-green focus:ring-groppa-green/20 transition-all duration-300 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-groppa-green hover:bg-groppa-green/90 text-white font-bold text-base shadow-lg hover:shadow-groppa-green/25 transition-all duration-300"
                    >
                      <Send className="mr-3 h-4 w-4" />
                      Enviar Consulta
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar - Takes 5 columns */}
            <div className="lg:col-span-5 space-y-6">
              {/* Quick Actions */}
              <Card className="bg-white border border-slate-200 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-groppa-dark-gray mb-6">
                    Contacto Inmediato
                  </h3>
                  <div className="space-y-4">
                    <Button
                      asChild
                      className="w-full h-12 bg-groppa-green hover:bg-groppa-green/90 text-white font-semibold text-base shadow-lg transition-all duration-300"
                    >
                      <a
                        href="https://wa.me/+5491126631808?text=Hola!!%20Estoy%20interesado/a%20en%20sus%20servicios."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-3 h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-12 border-2 border-groppa-green/30 text-groppa-dark-gray hover:bg-groppa-green/10 font-semibold text-base transition-all duration-300 bg-white"
                    >
                      <a href="tel:+541123456789">
                        <Phone className="mr-3 h-4 w-4" />
                        Llamar Ahora
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="bg-white border border-slate-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-groppa-dark-gray mb-6">
                    Información
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-groppa-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-groppa-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-groppa-dark-gray mb-1">
                          Ubicación
                        </h4>
                        <p className="text-slate-600 text-sm">
                          Buenos Aires, Argentina
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-groppa-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-groppa-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-groppa-dark-gray mb-1">
                          Email
                        </h4>
                        <p className="text-slate-600 text-sm">
                          contacto@groppa.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-groppa-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-groppa-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-groppa-dark-gray mb-1">
                          Horarios
                        </h4>
                        <p className="text-slate-600 text-sm">
                          Lun - Vie: 9:00 - 18:00
                        </p>
                        <p className="text-slate-600 text-sm">
                          Sáb: 9:00 - 14:00
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
