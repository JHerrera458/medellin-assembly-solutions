import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-foreground">
            PyH Sistemas y Sonido
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Logística de asambleas presenciales y virtuales, y facturación para unidades
            residenciales. Más de 10 años en propiedad horizontal.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Servicios
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/asambleas" className="text-foreground/80 hover:text-primary">
                Asambleas presenciales en Medellín
              </Link>
            </li>
            <li>
              <Link to="/asambleas" className="text-foreground/80 hover:text-primary">
                Asambleas virtuales en toda Colombia
              </Link>
            </li>
            <li>
              <Link to="/facturacion" className="text-foreground/80 hover:text-primary">
                Facturación para unidades residenciales
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Contacto
          </p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Medellín, Antioquia
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +57 300 000 0000
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> info@pyhsistemasysonido.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/70 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PyH Sistemas y Sonido. Todos los derechos reservados.
      </div>
    </footer>
  );
}
