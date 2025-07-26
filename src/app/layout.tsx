import type { Metadata } from "next"
import { Lato } from "next/font/google"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Groppa Propiedades | Vendé o Alquilá tu Propiedad con Confianza",
  description:
    "Asesoramiento profesional y humano para vender o alquilar tu propiedad en Belgrano, Palermo, Núñez, Caballito o Recoleta. Tasación gratuita. Acompañamiento legal, arquitectónico y emocional.",
  keywords: [
    "inmobiliaria en CABA especializada en ventas",
    "vender propiedad en zona norte CABA",
    "tasar departamento en Belgrano sin cargo",
    "alquilar departamento en Palermo con inmobiliaria",
    "vender propiedad en Recoleta sin inmobiliaria",
    "cómo vender mi propiedad rápido en Buenos Aires",
    "asesoramiento para vender un departamento heredado",
    "cuál es la mejor inmobiliaria en Palermo para vender",
    "servicios para vender mi casa sin complicaciones",
    "necesito ayuda para alquilar mi departamento en Recoleta",
    "inmobiliaria que ofrezca tasación gratuita en CABA",
    "inmobiliaria que me acompañe en todo el proceso de venta",
    "inmobiliaria Belgrano",
    "inmobiliaria Palermo",
    "vender propiedad Núñez",
    "tasación gratuita Caballito",
    "alquilar departamento Recoleta",
    "Groppa Propiedades",
    "asesoramiento inmobiliario CABA",
    "vender mi casa en Buenos Aires",
    "corredor inmobiliario matriculado",
    "servicios legales inmobiliarios",
  ],
  creator: "Groppa Propiedades",
  applicationName: "Groppa Propiedades",
  openGraph: {
    title: "Groppa Propiedades | Vendé o Alquilá tu Propiedad con Confianza",
    description:
      "Acompañamos tu operación inmobiliaria con profesionalismo y empatía. Especialistas en CABA. Tasación gratis. Consultanos sin compromiso.",
    siteName: "Groppa Propiedades",
    type: "website",
    locale: "es_AR",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://groppaprop.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  )
}
