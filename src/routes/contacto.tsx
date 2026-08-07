import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const title = "Contacto | Asambleas y facturación para propiedad horizontal";
const description =
  "Solicita una propuesta para la logística de tu asamblea presencial en Medellín, tu asamblea virtual en Colombia o el servicio de facturación de tu unidad residencial.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contacto,
});

const datos = [
  { icon: MapPin, label: "Ubicación", value: "Medellín, Antioquia — Colombia" },
  { icon: Phone, label: "Teléfono / WhatsApp", value: "+57 300 000 0000" },
  { icon: Mail, label: "Correo", value: "info@pyhsistemasysonido.com" },
  { icon: Clock, label: "Horario", value: "Lunes a viernes, 8:00 a.m. – 6:00 p.m." },
];

function Contacto() {
  return (
    <>
      <section className="bg-[image:var(--gradient-ink)]">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/60">
            Hablemos
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink-foreground sm:text-5xl">
            Cotiza tu asamblea o tu facturación
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
            Escríbenos con la fecha tentativa, el número de inmuebles y la modalidad que
            necesitas. Respondemos con una propuesta detallada.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:py-24 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          {datos.map((d) => (
            <div key={d.label} className="surface-card flex items-start gap-4 p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <d.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {d.label}
                </p>
                <p className="mt-1 font-medium">{d.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form
          className="surface-card space-y-5 p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const cuerpo = [
              `Nombre: ${data.get("nombre")}`,
              `Unidad residencial: ${data.get("unidad")}`,
              `Teléfono: ${data.get("telefono")}`,
              `Servicio: ${data.get("servicio")}`,
              "",
              String(data.get("mensaje") ?? ""),
            ].join("\n");
            window.location.href = `mailto:info@pyhsistemasysonido.com?subject=${encodeURIComponent(
              "Solicitud de propuesta — " + String(data.get("servicio")),
            )}&body=${encodeURIComponent(cuerpo)}`;
          }}
        >
          <h2 className="text-2xl font-bold">Solicitar propuesta</h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Nombre
              <input
                name="nombre"
                required
                className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="block text-sm font-medium">
              Unidad residencial
              <input
                name="unidad"
                required
                className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Teléfono
              <input
                name="telefono"
                required
                className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <label className="block text-sm font-medium">
              Servicio
              <select
                name="servicio"
                className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
              >
                <option>Asamblea presencial en Medellín</option>
                <option>Asamblea virtual (Colombia)</option>
                <option>Asamblea híbrida</option>
                <option>Facturación para unidad residencial</option>
              </select>
            </label>
          </div>

          <label className="block text-sm font-medium">
            Mensaje
            <textarea
              name="mensaje"
              rows={5}
              placeholder="Fecha tentativa, número de inmuebles, ciudad…"
              className="mt-2 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
          >
            Enviar solicitud
          </button>
        </form>
      </section>
    </>
  );
}
