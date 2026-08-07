import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, CheckCircle2, Globe2 } from "lucide-react";

import heroImg from "@/assets/hero-asamblea.jpg";
import virtualImg from "@/assets/asamblea-virtual.jpg";

const title = "Logística para Asambleas: presencial en Medellín y virtual en Colombia";
const description =
  "Control de quórum, votación electrónica por coeficiente, sonido y reportes inmediatos para asambleas de propiedad horizontal. Presencial en Medellín, virtual en todo el país.";

export const Route = createFileRoute("/asambleas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Asambleas,
});

const presencial = [
  "Montaje de sonido, micrófonos y proyección en el salón social",
  "Mesas de registro con acreditación de propietarios y poderes",
  "Software de quórum con coeficiente actualizado en vivo",
  "Votación electrónica punto por punto, con resultados proyectados",
  "Personal de apoyo durante toda la reunión",
  "Informe de asistencia y votaciones al finalizar",
];

const virtual = [
  "Plataforma de videoconferencia operada por nuestro equipo",
  "Enlace único e intransferible por copropietario",
  "Registro de poderes y validación de representación",
  "Quórum recalculado con cada ingreso o retiro",
  "Votaciones abiertas o secretas, auditables",
  "Prueba técnica previa y línea de soporte el día de la asamblea",
];

const faqs = [
  {
    q: "¿En qué ciudades prestan el servicio?",
    a: "Las asambleas presenciales las atendemos en Medellín y el Área Metropolitana. La modalidad virtual la operamos para unidades residenciales en cualquier ciudad de Colombia.",
  },
  {
    q: "¿Cómo se garantiza el quórum?",
    a: "Cada copropietario se registra contra la base de coeficientes de la unidad. El sistema suma el porcentaje presente en tiempo real y lo proyecta, de modo que el presidente sabe en todo momento si hay quórum decisorio.",
  },
  {
    q: "¿Se pueden hacer votaciones secretas?",
    a: "Sí. Cada punto del orden del día se configura como votación abierta o secreta, y el resultado se registra por coeficiente para anexarlo al acta.",
  },
  {
    q: "¿Con cuánta anticipación se debe contratar?",
    a: "Recomendamos al menos dos semanas antes de la fecha, para revisar la convocatoria, cargar la base de coeficientes y hacer la prueba técnica.",
  },
];

function Asambleas() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[image:var(--gradient-ink)]">
        <img
          src={heroImg}
          alt="Asamblea de copropietarios con votación electrónica"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
            Servicio principal
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink-foreground sm:text-5xl">
            Logística para asambleas de propiedad horizontal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Un solo proveedor para el registro, el quórum, las votaciones y los reportes.
            Presencial en Medellín o virtual en toda Colombia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="surface-card p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Building2 className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-2xl font-bold">Asamblea presencial · Medellín</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ideal para unidades que reúnen a sus copropietarios en el salón social o en un
              auditorio externo.
            </p>
            <ul className="mt-6 space-y-3">
              {presencial.map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="surface-card p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary">
              <Globe2 className="h-6 w-6" />
            </span>
            <h2 className="mt-6 text-2xl font-bold">Asamblea virtual · Toda Colombia</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Para unidades con copropietarios en otras ciudades o que buscan mayor
              participación sin desplazamientos.
            </p>
            <ul className="mt-6 space-y-3">
              {virtual.map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <img
            src={virtualImg}
            alt="Participación remota en una asamblea virtual"
            width={1200}
            height={900}
            loading="lazy"
            className="h-80 w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <p className="eyebrow">Modalidad mixta</p>
            <h2 className="mt-3 text-3xl font-bold">¿Y si algunos asisten y otros no pueden?</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              También operamos asambleas híbridas: el salón social funciona con registro y
              votación electrónica, mientras los copropietarios conectados en línea votan desde
              su celular. El quórum es uno solo y suma ambas modalidades.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-[image:var(--gradient-ink)] px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-ink-foreground sm:text-3xl">
            Cotiza la logística de tu próxima asamblea
          </h2>
          <Link
            to="/contacto"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Solicitar propuesta <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
