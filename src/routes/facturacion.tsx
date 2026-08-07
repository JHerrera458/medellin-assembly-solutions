import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Coins, Mail, Printer, TrendingUp } from "lucide-react";

import facturacionImg from "@/assets/facturacion.jpg";

const title = "Facturación para Unidades Residenciales | PyH Sistemas y Sonido";
const description =
  "Liquidación mensual de cuotas de administración por coeficiente, intereses de mora, envío digital e impreso y reportes de cartera para consejos y administradores.";

export const Route = createFileRoute("/facturacion")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Facturacion,
});

const incluye = [
  {
    icon: Coins,
    title: "Liquidación por coeficiente",
    text: "Cuotas de administración, extraordinarias, parqueaderos y conceptos adicionales calculados según el coeficiente de cada inmueble.",
  },
  {
    icon: TrendingUp,
    title: "Intereses y cartera",
    text: "Cálculo automático de intereses de mora y reporte de cartera por edades para el consejo de administración.",
  },
  {
    icon: Mail,
    title: "Envío digital",
    text: "Cada copropietario recibe su factura por correo electrónico el mismo día del corte.",
  },
  {
    icon: Printer,
    title: "Entrega impresa",
    text: "Impresión y entrega física en portería para las unidades que la necesitan.",
  },
];

const beneficios = [
  "Corte mensual en fecha fija, sin retrasos",
  "Formato claro: saldo anterior, pagos, intereses y total a pagar",
  "Histórico consultable por inmueble",
  "Soporte para las preguntas de los copropietarios",
  "Información lista para la contabilidad de la unidad",
  "Reportes de recaudo para la asamblea y el consejo",
];

function Facturacion() {
  return (
    <>
      <section className="bg-[image:var(--gradient-ink)]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
            Propiedad horizontal
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink-foreground sm:text-5xl">
            Facturación para unidades residenciales
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Nos encargamos del ciclo completo de facturación de la administración para que la
            unidad tenga cuentas claras y el recaudo llegue a tiempo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {incluye.map((i) => (
            <article key={i.title} className="surface-card p-7">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                <i.icon className="h-6 w-6" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{i.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <img
            src={facturacionImg}
            alt="Facturas de cuotas de administración listas para entrega"
            width={1200}
            height={900}
            loading="lazy"
            className="h-80 w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <p className="eyebrow">Qué gana tu unidad</p>
            <h2 className="mt-3 text-3xl font-bold">Menos reprocesos, mejor recaudo</h2>
            <ul className="mt-7 space-y-3">
              {beneficios.map((b) => (
                <li key={b} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-secondary px-8 py-12 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Cuéntanos cuántos inmuebles tiene la unidad
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Con ese dato preparamos una propuesta de facturación mensual a la medida.
          </p>
          <Link
            to="/contacto"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Solicitar propuesta <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
