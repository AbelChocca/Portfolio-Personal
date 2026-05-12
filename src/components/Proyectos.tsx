import { motion } from "framer-motion";
import { ArrowUpRight, LinkIcon } from "lucide-react";

import AnimatedDiv from "./AnimatedDiv";

import GaleriaChocca from "/assets/image/jeans_bgoo.jpg";

const projects = [
  {
    id: "chocca",
    title: "Chocca Catalogue",
    category: "E-commerce Catalogue",
    description:
      "Modern digital catalogue for a clothing store with category filtering, responsive UI and optimized browsing experience.",
    image: GaleriaChocca,
    demo: "https://chocca.com.pe/",
    repo: "https://github.com/AbelChocca/gallery-chocca-backend",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Redis",
      "React",
      "TypeScript",
      "Tailwind",
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
      {/* Glow background */}
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
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedDiv stagger preset="fadeUp" distance={18}>
          {/* HEADER */}
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
              Featured Projects
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
              Selected projects I've been building recently.
            </h2>

            <p
              className="
                mt-6
                text-base md:text-lg
                leading-relaxed
                text-[var(--muted)]
              "
            >
              A collection of projects focused on frontend experiences, backend
              systems and scalable web applications.
            </p>
          </div>

          {/* PROJECTS */}
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
                  {/* IMAGE */}
                  <div
                    className="
                      relative
                      overflow-hidden
                    "
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Overlay */}
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-black/10
                        to-transparent
                      "
                    />

                    {/* Floating badge */}
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

                  {/* CONTENT */}
                  <div
                    className="
                      flex flex-col
                      justify-between
                      p-8 md:p-12
                    "
                  >
                    <div>
                      <h3
                        className="
                          text-3xl
                          md:text-4xl
                          font-bold
                          tracking-tight
                          text-[var(--foreground)]
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-6
                          text-base md:text-lg
                          leading-relaxed
                          text-[var(--muted)]
                        "
                      >
                        {project.description}
                      </p>

                      {/* TECH */}
                      <div
                        className="
                          flex flex-wrap
                          gap-3
                          mt-8
                        "
                      >
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

                    {/* BUTTONS */}
                    <div className="flex items-center gap-4 mt-10">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
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
                        Live Demo
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
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
                        GitHub
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
