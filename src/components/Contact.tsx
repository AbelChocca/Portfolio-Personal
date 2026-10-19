import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import AnimatedDiv from "./AnimatedDiv";

const contacts = [
  {
    title: "Correo electrónico",
    value: "abel.chocca.dev@gmail.com",
    href: "mailto:abel.chocca.dev@gmail.com",
    icon: Mail,
  },
  {
    title: "Teléfono",
    value: "+51 933 130 343",
    href: "tel:+51933130343",
    icon: Phone,
  },
];

const socials = [
  {
    title: "GitHub",
    value: "github.com/AbelChocca",
    href: "https://github.com/AbelChocca",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/abel-chocca",
    href: "https://www.linkedin.com/in/abel-chocca/",
    icon: FaLinkedin,
  },
];

const Contact = () => {
  return (
    <section
      id="contactos"
      className="relative w-full py-24 md:py-36 overflow-hidden"
    >
      {/* Glow decorativo */}
      <div
        className="
          absolute
          left-[-120px]
          top-[20%]
          w-[320px] h-[320px]
          rounded-full
          bg-violet-500/10
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
              Contacto
            </p>

            <h2
              className="
                text-4xl md:text-5xl
                font-bold
                tracking-tight
                leading-tight
                text-[var(--foreground)]
              "
            >
              Abierto a nuevas oportunidades para aprender y aportar.
            </h2>

            <p
              className="
                mt-6
                text-base md:text-lg
                leading-relaxed
                text-[var(--muted)]
                max-w-2xl
              "
            >
              Actualmente busco oportunidades de prácticas preprofesionales
              donde pueda aplicar mis conocimientos en ingeniería de software,
              automatización y análisis de datos para contribuir a la mejora de
              procesos y operaciones de negocio. También estoy abierto a
              colaboraciones y proyectos tecnológicos. Puedes contactarme a
              través de cualquiera de estos medios.
            </p>
          </div>

          {/* CANALES DE CONTACTO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.title}
                  href={contact.href}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    backdrop-blur-xl
                    p-8
                    hover:border-[var(--primary)]
                    transition-colors duration-300
                  "
                >
                  {/* Glow hover */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-500
                      bg-gradient-to-br
                      from-violet-500/10
                      to-transparent
                      pointer-events-none
                    "
                  />

                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icono */}
                    <div
                      className="
                        w-12 h-12
                        shrink-0
                        rounded-2xl
                        flex items-center justify-center
                        bg-violet-500/10
                        border border-violet-400/20
                      "
                    >
                      <Icon
                        className="
                          w-6 h-6
                          text-[var(--primary)]
                        "
                      />
                    </div>

                    {/* Información */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--muted)] mb-2">
                        {contact.title}
                      </p>

                      <h3
                        className="
                          text-base md:text-lg
                          font-semibold
                          text-[var(--foreground)]
                          break-words
                        "
                      >
                        {contact.value}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className="
                        w-5 h-5
                        shrink-0
                        text-[var(--muted)]
                        group-hover:text-[var(--primary)]
                        transition-colors
                      "
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* REDES PROFESIONALES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.title}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    backdrop-blur-xl
                    p-8
                    hover:border-[var(--primary)]
                    transition-colors duration-300
                  "
                >
                  {/* Glow hover */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-500
                      bg-gradient-to-br
                      from-indigo-500/10
                      to-transparent
                      pointer-events-none
                    "
                  />

                  <div className="relative z-10 flex items-start gap-5">
                    {/* Icono */}
                    <div
                      className="
                        w-12 h-12
                        shrink-0
                        rounded-2xl
                        flex items-center justify-center
                        bg-indigo-500/10
                        border border-indigo-400/20
                      "
                    >
                      <Icon
                        className="
                          w-6 h-6
                          text-[var(--primary)]
                        "
                      />
                    </div>

                    {/* Información */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[var(--muted)] mb-2">
                        {social.title}
                      </p>

                      <h3
                        className="
                          text-base md:text-lg
                          font-semibold
                          text-[var(--foreground)]
                          break-words
                        "
                      >
                        {social.value}
                      </h3>
                    </div>

                    <ArrowUpRight
                      className="
                        w-5 h-5
                        shrink-0
                        text-[var(--muted)]
                        group-hover:text-[var(--primary)]
                        transition-colors
                      "
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Contact;
