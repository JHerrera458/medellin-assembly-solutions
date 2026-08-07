import { createFileRoute } from "@tanstack/react-router";

const title = "Quiénes somos | PyH Sistemas y Sonido";
const description =
  "Equipo interdisciplinario con más de 10 años de experiencia en propiedad horizontal: logística de asambleas, facturación y acompañamiento a consejos de administración en Medellín.";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Nosotros,
});

const valores = [
  "Confianza",
  "Honestidad",
  "Confidencialidad",
  "Cumplimiento",
  "Responsabilidad",
  "Respeto",
  "Innovación",
];

function Nosotros() {
  return (
    <>
      <section className="bg-[image:var(--gradient-ink)]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
            Desde Medellín
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink-foreground sm:text-5xl">
            Quiénes somos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Un equipo interdisciplinario dedicado a que la propiedad horizontal funcione con
            procesos claros, ágiles y confiables.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:py-24">
        <p className="text-lg leading-relaxed text-muted-foreground">
          En PyH Sistemas y Sonido proveemos servicios de alta calidad en el ámbito de la
          propiedad horizontal. Contamos con profesionales expertos en temas contables,
          financieros y tecnológicos, y más de 10 años de experiencia acompañando unidades
          residenciales en procesos de facturación y en el apoyo logístico para la realización
          de asambleas ágiles y efectivas.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Queremos ser la mejor opción para consejos de administración, administradores y
          habitantes de propiedad horizontal, con servicios que cumplen la Ley 675 de 2001 y que
          contribuyen al desarrollo social, cultural, ambiental y familiar de nuestra comunidad.
        </p>

        <h2 className="mt-16 text-3xl font-bold">Nuestros valores</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {valores.map((v) => (
            <span
              key={v}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium"
            >
              {v}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
