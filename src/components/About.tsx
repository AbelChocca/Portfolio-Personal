import { BrainCircuit, Code2, Rocket } from "lucide-react";

import AnimatedDiv from "./AnimatedDiv";

const cards = [
  {
    title: "Building Digital Products",
    description:
      "I enjoy designing scalable backend architectures and modern web applications focused on performance, clean structure and user experience.",
    icon: Code2,
  },
  {
    title: "Continuous Learning",
    description:
      "Currently focused on backend engineering with Python, FastAPI and cloud technologies, while continuously improving my frontend skills with React and modern UI systems.",
    icon: BrainCircuit,
  },
  {
    title: "Startup & Innovation Mindset",
    description:
      "Interested in startups, SaaS products and online business ideas where technology can solve real-world problems and create scalable solutions.",
    icon: Rocket,
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
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedDiv stagger preset="fadeUp" distance={18}>
          {/* HEADER */}
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
              About Me
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
              Passionate about building modern software experiences.
            </h2>

            <p
              className="
                mt-6
                text-base md:text-lg
                leading-relaxed
                text-[var(--muted)]
              "
            >
              I enjoy combining backend engineering, frontend development and
              cloud technologies to create scalable applications and digital
              products with real impact.
            </p>
          </div>

          {/* CARDS */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-6
            "
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <AnimatedDiv key={index} direction="up" distance={12}>
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
                    {/* Glow hover */}
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
                      "
                    />

                    {/* Icon */}
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

                    {/* Content */}
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
