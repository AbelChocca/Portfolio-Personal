import React, { useState } from "react";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { ArrowUpRight, Mail } from "lucide-react";

import AnimatedDiv from "./AnimatedDiv";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const mailtoLink = `mailto:abelchocca1010@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contactos"
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
          left-[-120px]
          top-[20%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-violet-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedDiv stagger preset="fadeUp" distance={18}>
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-16
              items-start
            "
          >
            {/* LEFT SIDE */}
            <div>
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
                Contact
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
                Let's build something amazing together.
              </h2>

              <p
                className="
                  mt-6
                  text-base md:text-lg
                  leading-relaxed
                  text-[var(--muted)]
                  max-w-xl
                "
              >
                Interested in collaborating, discussing projects or building
                digital products? Feel free to reach out through social media or
                send me a direct message.
              </p>

              {/* SOCIALS */}
              <div className="flex items-center gap-4 mt-10">
                <motion.a
                  href="https://www.linkedin.com/in/abel-chocca/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    w-14 h-14
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    backdrop-blur-xl
                    flex items-center justify-center
                    hover:border-[var(--primary)]
                    transition-all duration-300
                  "
                >
                  <FaLinkedin
                    className="
                      text-2xl
                      text-[var(--foreground)]
                      group-hover:text-[var(--primary)]
                      transition-colors
                    "
                  />
                </motion.a>

                <motion.a
                  href="https://github.com/AbelChocca"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    w-14 h-14
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    backdrop-blur-xl
                    flex items-center justify-center
                    hover:border-[var(--primary)]
                    transition-all duration-300
                  "
                >
                  <FaGithub
                    className="
                      text-2xl
                      text-[var(--foreground)]
                      group-hover:text-[var(--primary)]
                      transition-colors
                    "
                  />
                </motion.a>

                <motion.button
                  onClick={handleSubmit}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    group
                    w-14 h-14
                    rounded-2xl
                    border border-[var(--border)]
                    bg-[var(--card)]
                    backdrop-blur-xl
                    flex items-center justify-center
                    hover:border-[var(--primary)]
                    transition-all duration-300
                  "
                >
                  <Mail
                    className="
                      w-6 h-6
                      text-[var(--foreground)]
                      group-hover:text-[var(--primary)]
                      transition-colors
                    "
                  />
                </motion.button>
              </div>
            </div>

            {/* FORM */}
            <motion.form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border border-[var(--border)]
                bg-[var(--card)]
                backdrop-blur-2xl
                p-8 md:p-10
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br
                  from-violet-500/10
                  to-transparent
                "
              />

              <div className="relative z-10">
                <div className="mb-6">
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-[var(--foreground)]
                    "
                  >
                    Send a message
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[var(--muted)]
                    "
                  >
                    I'll try to respond as soon as possible.
                  </p>
                </div>

                <div className="grid gap-5">
                  {/* NAME */}
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                      w-full
                      rounded-2xl
                      border border-[var(--border)]
                      bg-black/5 dark:bg-white/5
                      px-5 py-4
                      text-[var(--foreground)]
                      placeholder:text-[var(--muted)]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-violet-500/40
                      transition-all duration-300
                    "
                  />

                  {/* MESSAGE */}
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="
                      w-full
                      rounded-2xl
                      border border-[var(--border)]
                      bg-black/5 dark:bg-white/5
                      px-5 py-4
                      text-[var(--foreground)]
                      placeholder:text-[var(--muted)]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-violet-500/40
                      resize-none
                      transition-all duration-300
                    "
                  />

                  {/* BUTTON */}
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-[var(--primary)]
                      hover:opacity-90
                      px-6 py-4
                      font-medium
                      text-white
                      transition-all duration-300
                      shadow-lg shadow-violet-500/20
                    "
                  >
                    Send Message
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Contact;
