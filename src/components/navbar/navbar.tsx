"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="px-4 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center shadow-sm sticky top-0 bg-white z-50">
      <Link href="#" className="flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold italic text-groppa-green">
          GROPPA
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden lg:flex">
        <ul className="flex items-center gap-8">
          <li className="relative group">
            <Link href="#porque-elegirnos">Por qué elegirnos</Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-groppa-green group-hover:w-full transition-all duration-300" />
          </li>
          <li className="relative group">
            <Link href="#proceso">Nuestro Proceso</Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-groppa-green group-hover:w-full transition-all duration-300" />
          </li>
          <li className="relative group">
            <Link href="#diferenciales">Diferenciales</Link>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-groppa-green group-hover:w-full transition-all duration-300" />
          </li>
          <li className="">
            <Link href="#contacto">
              <Button
                variant="default"
                className="text-sm xl:text-base bg-groppa-green hover:bg-groppa-green/90 "
              >
                Contactanos
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="ml-auto lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t lg:hidden transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <Button
            variant="ghost"
            asChild
            className="justify-start hover:bg-groppa-green/10"
            onClick={closeMenu}
          >
            <Link href="#porque-elegirnos">Por qué elegirnos</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="justify-start hover:bg-groppa-green/10"
            onClick={closeMenu}
          >
            <Link href="#proceso">Nuestro Proceso</Link>
          </Button>
          <Button
            variant="ghost"
            asChild
            className="justify-start hover:bg-groppa-green/10"
            onClick={closeMenu}
          >
            <Link href="#diferenciales">Diferenciales</Link>
          </Button>
          <Button
            asChild
            className="bg-groppa-green text-white hover:bg-groppa-green/90 mt-2"
            onClick={closeMenu}
          >
            <Link href="#contacto">Contactanos</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
