import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileText,
  Globe2,
  MonitorSmartphone,
  ScanLine,
  ShieldCheck,
  Users,
  Vote,
} from "lucide-react";

import heroImg from "@/assets/hero-asamblea.jpg";
import virtualImg from "@/assets/asamblea-virtual.jpg";
import facturacionImg from "@/assets/facturacion.jpg";

const title = "Logística para Asambleas en Medellín y Asambleas Virtuales en Colombia | PyH";
const description =
  "Organizamos asambleas de propiedad horizontal: presenciales en Medellín y virtuales en toda Colombia, con software de quórum y votaciones. También facturación para unidades residenciales.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

const pilares = [
  {
    icon: Building2,
    title: "Asamblea presencial en Medellín",
    text: "Registro de asistencia, control de quórum en tiempo real, sonido, votación electrónica y acta de resultados el mismo día.",
    to: "/asambleas" as const,
  },
  {
    icon: Globe2,
    title: "Asamblea virtual en toda Colombia",
    text: "Plataforma de videoconferencia con verificación de copropietarios, poderes y votaciones auditables desde cualquier ciudad.",
    to: "/asambleas" as const,
  },
  {
    icon: FileText,
    title: "Facturación para unidades residenciales",
    text: "Liquidación de cuotas de administración, intereses, envío digital e impreso y control de cartera mes a mes.",
    to: "/facturacion" as const,
  },
];

const proceso = [
  {
    n: "01",
    title: "Planeación",
    text: "Revisamos convocatoria, coeficientes y orden del día junto al consejo y la administración.",
  },
  {
    n: "02",
    title: "Registro y quórum",
    text: "Acreditación de copropietarios y poderes con lectura del coeficiente en tiempo real.",
  },
  {
    n: "03",
    title: "Votaciones",
    text: "Cada punto se vota con nuestro software; los resultados se proyectan al instante.",
  },
  {
    n: "04",
    title: "Informe final",
    text: "Entregamos reportes de asistencia y votación listos para anexar al acta.",
  },
];

const beneficios = [
  { icon: Vote, text: "Votación por coeficiente, sin conteos manuales" },
  { icon: ScanLine, text: "Registro de asistencia ágil, sin filas" },
  { icon: ShieldCheck, text: "Trazabilidad y soporte de cada decisión" },
  { icon: Users, text: "Equipo en sitio durante toda la reunión" },
  { icon: MonitorSmartphone, text: "Participación desde celular o computador" },
  { icon: BadgeCheck, text: "Cumplimiento de la Ley 675 de 2001" },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[image:var(--gradient-ink)]">
        <img
          src={heroImg}
          alt="Asamblea general de copropietarios en una unidad residencial de Medellín"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 md:py-32 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink-foreground">
              Medellín · Presencial y virtual · Toda Colombia
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-ink-foreground sm:text-5xl lg:text-6xl">
              Asambleas que empiezan a tiempo y terminan con decisiones válidas
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/75">
              Somos el equipo de logística que acompaña a consejos y administradores de
              propiedad horizontal: control de quórum, votaciones electrónicas y reportes
              inmediatos. Presencial en Medellín, virtual en cualquier ciudad del país.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
              >
                Solicitar cotización <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/asambleas"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-white/10"
              >
                Ver cómo funciona
              </Link>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4 self-end">
            {[
              { k: "+10", v: "años en propiedad horizontal" },
              { k: "100%", v: "votaciones por coeficiente" },
              { k: "2", v: "modalidades: presencial y virtual" },
              { k: "Toda", v: "Colombia en modalidad virtual" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm"
              >
                <dt className="font-display text-3xl font-bold text-ink-foreground">{s.k}</dt>
                <dd className="mt-1 text-sm leading-snug text-ink-foreground/70">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Pilares */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow">Nuestros servicios</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Tres frentes para que la administración deje de improvisar
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pilares.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="surface-card group flex flex-col p-7 transition-transform hover:-translate-y-1"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Conoce más <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Modalidades */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl space-y-20 px-5 py-20 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Modalidad presencial</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Asambleas en Medellín</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Llegamos al salón social con todo el montaje: mesas de registro, sonido,
                proyección y el software de quórum y votaciones. La administración se dedica a
                presentar su gestión; nosotros nos encargamos de que cada voto quede bien
                contado.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Montaje de sonido y proyección incluido",
                  "Registro de asistencia y poderes con lectura de coeficiente",
                  "Resultados proyectados punto por punto",
                  "Informe de votación entregado al cierre",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={heroImg}
              alt="Equipo de logística apoyando una asamblea presencial en Medellín"
              width={1920}
              height={1088}
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
            />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={virtualImg}
              alt="Copropietaria participando en una asamblea virtual desde su vivienda"
              width={1200}
              height={900}
              loading="lazy"
              className="h-80 w-full rounded-3xl object-cover shadow-[var(--shadow-card)] lg:order-2"
            />
            <div>
              <p className="eyebrow">Modalidad virtual</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Asamblea virtual en toda Colombia
              </h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                No importa si la unidad está en Medellín, Bogotá, Cali o Barranquilla: operamos
                la reunión de forma remota con verificación de copropietarios, control de
                poderes y votaciones auditables desde el celular.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Enlace único por copropietario, sin suplantaciones",
                  "Quórum actualizado en vivo según ingresos y retiros",
                  "Votación abierta o secreta según el orden del día",
                  "Prueba técnica previa con la administración",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="eyebrow">Cómo trabajamos</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">El día de la asamblea, paso a paso</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {proceso.map((p) => (
            <div key={p.n} className="rounded-2xl border-l-2 border-primary/70 bg-secondary/50 p-6">
              <span className="font-display text-sm font-bold tracking-widest text-primary">
                {p.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.text} className="flex items-center gap-3 rounded-xl border border-border p-4">
              <b.icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm font-medium">{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Facturación */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:py-28 lg:grid-cols-2">
          <img
            src={facturacionImg}
            alt="Facturas de administración para unidades residenciales"
            width={1200}
            height={900}
            loading="lazy"
            className="h-80 w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <p className="eyebrow">Servicio complementario</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Facturación para unidades residenciales
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Liquidamos y entregamos las cuotas de administración de tu unidad cada mes: cálculo
              por coeficiente, intereses de mora, envío digital e impreso y reportes de cartera
              para el consejo.
            </p>
            <Link
              to="/facturacion"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
            >
              Ver el servicio de facturación <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="rounded-3xl bg-[image:var(--gradient-ink)] px-8 py-14 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-ink-foreground sm:text-4xl">
            ¿Tienes fecha de asamblea? Reservemos el equipo
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-foreground/70">
            Cuéntanos cuántas unidades tiene el conjunto y la modalidad que necesitas. Te
            enviamos la propuesta con todo incluido.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Hablar con un asesor <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
