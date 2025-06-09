"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export default function Header({ isMenuOpen, toggleMenu, closeMenu }: HeaderProps) {
  return (
    <header className="px-4 sm:px-6 lg:px-8 h-16 sm:h-18 lg:h-20 flex items-center shadow-sm sticky top-0 bg-white z-50">
      <Link href="#" className="flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold text-groppa-green">GROPPA</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="ml-auto hidden lg:flex gap-4 xl:gap-6">
        <Button variant="ghost" asChild className="hover:bg-groppa-green/10 text-sm xl:text-base">
          <Link href="#porque-elegirnos">Por qué elegirnos</Link>
        </Button>
        <Button variant="ghost" asChild className="hover:bg-groppa-green/10 text-sm xl:text-base">
          <Link href="#proceso">Nuestro Proceso</Link>
        </Button>
        <Button variant="ghost" asChild className="hover:bg-groppa-green/10 text-sm xl:text-base">
          <Link href="#diferenciales">Diferenciales</Link>
        </Button>
        <Button asChild className="bg-groppa-green text-white hover:bg-groppa-green/90 text-sm xl:text-base">
          <Link href="#contacto">Contactanos</Link>
        </Button>
      </nav>

      {/* Mobile Menu Button */}
      <Button variant="ghost" size="sm" className="ml-auto lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t lg:hidden">
          <nav className="flex flex-col p-4 space-y-2">
            <Button variant="ghost" asChild className="justify-start hover:bg-groppa-green/10" onClick={closeMenu}>
              <Link href="#porque-elegirnos">Por qué elegirnos</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start hover:bg-groppa-green/10" onClick={closeMenu}>
              <Link href="#proceso">Nuestro Proceso</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start hover:bg-groppa-green/10" onClick={closeMenu}>
              <Link href="#diferenciales">Diferenciales</Link>
            </Button>
            <Button asChild className="bg-groppa-green text-white hover:bg-groppa-green/90 mt-2" onClick={closeMenu}>
              <Link href="#contacto">Contactanos</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
