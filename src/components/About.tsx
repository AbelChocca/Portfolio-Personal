import { BrainCircuit, Code2, ChartNoAxesCombined } from "lucide-react";

import AnimatedDiv from "./AnimatedDiv";

const cards = [
  {
    title: "Análisis y mejora de procesos",
    description:
      "Me interesa comprender cómo funcionan las operaciones de un negocio, identificar tareas manuales y oportunidades de mejora, y transformar esos procesos en flujos digitales más organizados y eficientes.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Tecnología aplicada al negocio",
    description:
      "Desarrollo soluciones con Python, SQL y tecnologías backend para automatizar tareas, integrar información y facilitar el seguimiento de operaciones. Mi experiencia incluye sistemas de inventario, ventas y gestión comercial.",
    icon: Code2,
  },
  {
    title: "Aprendizaje y mejora continua",
    description:
      "Busco seguir desarrollando mis capacidades en análisis de datos, automatización e indicadores de gestión. Me motiva aprender de problemas reales, colaborar con otros y encontrar formas prácticas de mejorar los procesos.",
    icon: BrainCircuit,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        py-24 md:py-36
        overflow-hidden
      "
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute
          right-[-120px]
          top-[20%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-indigo-500/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedDiv stagger preset="fadeUp" distance={18}>
          {/* ENCABEZADO */}
          <div className="max-w-3xl mb-14">
            <p
              className="
                text-[var(--primary)]
                font-medium
                tracking-wide
                uppercase
                text-sm
                mb-4
              "
            >
              Sobre mí
            </p>

            <h2
              className="
                text-4xl
                md:text-5xl
                font-bold
                tracking-tight
                leading-tight
                text-[var(--foreground)]
              "
            >
              Me interesa entender cómo funcionan los negocios y mejorarlos a
              través de la tecnología.
            </h2>

            <p
              className="
                mt-6
                text-base md:text-lg
                leading-relaxed
                text-[var(--muted)]
              "
            >
              Soy estudiante de Ingeniería de Software, con enfoque en
              desarrollo backend e interés en la mejora de procesos, la
              automatización y el análisis de datos. Me gusta comprender cómo
              funciona una operación antes de desarrollar una solución
              tecnológica. A través de Galería Chocca, un sistema ERP y
              e-commerce para un negocio real de ropa, he trabajado en la
              digitalización de procesos comerciales como inventarios, precios,
              pedidos y facturación, buscando mejorar su organización,
              trazabilidad y visibilidad operativa.
            </p>
          </div>

          {/* TARJETAS */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            "
          >
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <AnimatedDiv key={card.title} direction="up" distance={12}>
                  <div
                    className="
                      group
                      relative
                      h-full
                      rounded-3xl
                      border border-[var(--border)]
                      bg-[var(--card)]
                      backdrop-blur-xl
                      p-8
                      overflow-hidden
                      transition-all duration-500
                      hover:-translate-y-2
                      hover:border-[var(--primary)]
                    "
                  >
                    {/* Glow al pasar el cursor */}
                    <div
                      className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity duration-500
                        bg-gradient-to-br
                        from-indigo-500/10
                        to-transparent
                        pointer-events-none
                      "
                    />

                    {/* Icono */}
                    <div
                      className="
                        relative
                        z-10
                        w-12 h-12
                        rounded-2xl
                        flex items-center justify-center
                        bg-indigo-500/10
                        border border-indigo-400/20
                        mb-6
                      "
                    >
                      <Icon
                        className="
                          w-6 h-6
                          text-[var(--primary)]
                        "
                      />
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10">
                      <h3
                        className="
                          text-xl
                          font-semibold
                          mb-4
                          text-[var(--foreground)]
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          leading-relaxed
                          text-sm md:text-base
                          text-[var(--muted)]
                        "
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </AnimatedDiv>
              );
            })}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default About;
