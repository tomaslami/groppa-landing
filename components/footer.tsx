export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 text-center bg-slate-50 border-t border-slate-200">
      <div className="container px-4 sm:px-6 md:px-8">
        <p className="text-xs sm:text-sm text-slate-600">
          &copy; {new Date().getFullYear()} GROPPA Inmobiliaria. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
