import { motion } from "framer-motion";
import { ArrowUpRight, LinkIcon, CheckCircle2 } from "lucide-react";

import AnimatedDiv from "./AnimatedDiv";

import GaleriaChocca from "/assets/image/jeans_bgoo.jpg";

const projects = [
  {
    id: "chocca",
    title: "Galería Chocca",
    category: "ERP + E-commerce | Retail",
    description:
      "Sistema de gestión comercial y comercio electrónico desarrollado para un negocio real de ropa. El proyecto busca centralizar información, digitalizar procesos operativos y facilitar el control de las actividades del negocio.",

    problem:
      "La gestión de una operación comercial requiere coordinar inventarios, productos, precios y pedidos. Cuando esta información se maneja mediante procesos separados o manuales, resulta más difícil mantener su consistencia y realizar un seguimiento eficiente.",

    solution:
      "Desarrollé una plataforma que conecta el catálogo digital con herramientas de gestión interna, integrando información comercial y automatizando reglas de negocio mediante Python, SQL y servicios backend.",

    improvements: [
      "Centralización de información de productos e inventarios.",
      "Trazabilidad de movimientos para facilitar el control de existencias.",
      "Automatización de reglas de precios, descuentos y promociones.",
      "Organización de información comercial para facilitar el seguimiento operativo.",
    ],

    impact:
      "La solución proporciona una base digital para gestionar información comercial de forma centralizada, reducir la dependencia de tareas manuales y facilitar futuras mejoras basadas en indicadores operativos.",

    image: GaleriaChocca,
    demo: "https://chocca.com.pe/",
    repo: "https://github.com/AbelChocca/gallery-chocca-backend",

    technologies: [
      "Python",
      "SQL",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Redis",
      "React",
      "TypeScript",
      "Azure",
    ],
  },
];

const Proyectos = () => {
  return (
    <section
      id="proyectos"
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
          left-[-150px]
          bottom-[-120px]
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
                uppercase
                tracking-wide
                text-sm
                font-medium
                mb-4
              "
            >
              Proyectos destacados
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
              Tecnología aplicada a problemas reales.
            </h2>

            <p
              className="
                mt-6
                text-base md:text-lg
                leading-relaxed
                text-[var(--muted)]
              "
            >
              Proyectos donde aplico ingeniería de software para digitalizar
              procesos, automatizar tareas y desarrollar soluciones que aporten
              valor a las operaciones de un negocio.
            </p>
          </div>

          {/* PROYECTOS */}
          <div className="grid grid-cols-1 gap-10">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-[var(--border)]
                  bg-[var(--card)]
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    min-h-[520px]
                  "
                >
                  {/* IMAGEN */}
                  <div className="relative overflow-hidden min-h-[300px] lg:min-h-full">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Categoría */}
                    <div
                      className="
                        absolute
                        top-6 left-6
                        px-4 py-2
                        rounded-full
                        border border-white/10
                        bg-black/30
                        backdrop-blur-md
                        text-sm
                        text-white
                      "
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* CONTENIDO */}
                  <div
                    className="
                      flex flex-col
                      justify-between
                      p-8 md:p-12
                    "
                  >
                    <div>
                      {/* Nombre del proyecto */}
                      <h3
                        className="
                          text-3xl md:text-4xl
                          font-bold
                          tracking-tight
                          text-[var(--foreground)]
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          text-base md:text-lg
                          leading-relaxed
                          text-[var(--muted)]
                        "
                      >
                        {project.description}
                      </p>

                      {/* PROBLEMA */}
                      <div className="mt-8">
                        <h4
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide
                            text-[var(--primary)]
                            mb-3
                          "
                        >
                          Problema identificado
                        </h4>

                        <p
                          className="
                            text-sm md:text-base
                            leading-relaxed
                            text-[var(--muted)]
                          "
                        >
                          {project.problem}
                        </p>
                      </div>

                      {/* SOLUCIÓN */}
                      <div className="mt-7">
                        <h4
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide
                            text-[var(--primary)]
                            mb-3
                          "
                        >
                          Solución desarrollada
                        </h4>

                        <p
                          className="
                            text-sm md:text-base
                            leading-relaxed
                            text-[var(--muted)]
                          "
                        >
                          {project.solution}
                        </p>
                      </div>

                      {/* MEJORAS */}
                      <div className="mt-8">
                        <h4
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-wide
                            text-[var(--primary)]
                            mb-5
                          "
                        >
                          Aportes a la mejora de procesos
                        </h4>

                        <ul className="space-y-3">
                          {project.improvements.map((improvement) => (
                            <li
                              key={improvement}
                              className="
                                  flex items-start gap-3
                                  text-sm md:text-base
                                  leading-relaxed
                                  text-[var(--muted)]
                                "
                            >
                              <CheckCircle2
                                className="
                                    w-5 h-5
                                    shrink-0
                                    mt-0.5
                                    text-[var(--primary)]
                                  "
                              />

                              <span>{improvement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* IMPACTO */}
                      <div
                        className="
                          mt-8
                          rounded-2xl
                          border border-[var(--border)]
                          bg-black/5 dark:bg-white/5
                          p-5
                        "
                      >
                        <h4
                          className="
                            font-semibold
                            text-[var(--foreground)]
                            mb-2
                          "
                        >
                          Valor para el negocio
                        </h4>

                        <p
                          className="
                            text-sm md:text-base
                            leading-relaxed
                            text-[var(--muted)]
                          "
                        >
                          {project.impact}
                        </p>
                      </div>

                      {/* TECNOLOGÍAS */}
                      <div className="mt-8">
                        <h4
                          className="
                            text-sm
                            font-semibold
                            text-[var(--foreground)]
                            mb-4
                          "
                        >
                          Tecnologías utilizadas
                        </h4>

                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="
                                px-4 py-2
                                rounded-full
                                text-sm
                                border border-[var(--border)]
                                bg-black/5 dark:bg-white/5
                                text-[var(--foreground)]
                              "
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* BOTONES */}
                    <div className="flex flex-wrap items-center gap-4 mt-10">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-6 py-3
                          rounded-xl
                          bg-[var(--primary)]
                          hover:opacity-90
                          text-white
                          font-medium
                          transition-all duration-300
                          hover:scale-[1.03]
                          shadow-lg shadow-indigo-500/20
                        "
                      >
                        Ver sitio web
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2
                          px-6 py-3
                          rounded-xl
                          border border-[var(--border)]
                          bg-black/5 dark:bg-white/5
                          hover:bg-black/10 dark:hover:bg-white/10
                          text-[var(--foreground)]
                          backdrop-blur-md
                          transition-all duration-300
                        "
                      >
                        Ver código
                        <LinkIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Proyectos;
