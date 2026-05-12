import { VscAzure } from "react-icons/vsc";
import AnimatedDiv from "./AnimatedDiv";

import {
  SiPython,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiDocker,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiNextdotjs,
  SiTypescript,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";

const skills = [
  {
    category: "Backend",
    items: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "FastAPI",
        icon: SiFastapi,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "NestJS",
        icon: SiNestjs,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },

  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
    ],
  },

  {
    category: "Cloud & Tools",
    items: [
      {
        name: "Azure",
        icon: VscAzure,
      },
      {
        name: "Docker",
        icon: SiDocker,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        w-full
        py-24 md:py-36
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedDiv stagger preset="fadeUp" distance={18}>
          {/* HEADER */}
          <div className="max-w-3xl mb-16">
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
              Tech Stack
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
              Technologies I use to build modern applications.
            </h2>

            <p
              className="
                mt-6
                text-base md:text-lg
                leading-relaxed
                text-[var(--muted)]
              "
            >
              Focused on backend engineering, scalable APIs and modern frontend
              experiences using current web technologies.
            </p>
          </div>

          {/* CATEGORIES */}
          <div className="space-y-14">
            {skills.map((group) => (
              <div key={group.category}>
                {/* CATEGORY */}
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-6
                    text-[var(--foreground)]
                  "
                >
                  {group.category}
                </h3>

                {/* GRID */}
                <div
                  className="
                    grid
                    grid-cols-2
                    sm:grid-cols-3
                    md:grid-cols-4
                    gap-5
                  "
                >
                  {group.items.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <AnimatedDiv
                        key={skill.name}
                        direction="up"
                        distance={10}
                      >
                        <div
                          className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border border-[var(--border)]
                            bg-[var(--card)]
                            backdrop-blur-xl
                            p-6
                            transition-all duration-500
                            hover:-translate-y-2
                            hover:border-[var(--primary)]
                          "
                        >
                          {/* Glow */}
                          <div
                            className="
                              absolute inset-0
                              opacity-0
                              group-hover:opacity-100
                              transition-opacity duration-500
                              bg-gradient-to-br
                              from-cyan-500/10
                              to-transparent
                            "
                          />

                          <div className="relative z-10">
                            {/* ICON */}
                            <div
                              className="
                                w-14 h-14
                                rounded-2xl
                                flex items-center justify-center
                                bg-cyan-500/10
                                border border-cyan-400/20
                                mb-5
                              "
                            >
                              <Icon
                                className="
                                  w-7 h-7
                                  text-cyan-400
                                "
                              />
                            </div>

                            {/* TEXT */}
                            <h4
                              className="
                                text-base
                                font-medium
                                text-[var(--foreground)]
                              "
                            >
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                      </AnimatedDiv>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Skills;
