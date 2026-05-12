import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

import AnimatedDiv from "./AnimatedDiv";
import { useDarkMode } from "../dark-mode/useDarkMode";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#proyectos" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contactos" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <AnimatedDiv preset="fade" className="w-full">
      <header
        className="
          fixed top-0 left-0 w-full z-50
          border-b border-[var(--border)]
          bg-[var(--card)]
          backdrop-blur-xl
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            h-16
            px-6 md:px-10
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <a
            href="#"
            className="
              flex items-center gap-3
              group
            "
          >
            <span
              className="
                hidden sm:block
                font-semibold tracking-tight
                text-[var(--foreground)]
              "
            >
              Abel Chocca
            </span>
          </a>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  px-4 py-2 rounded-xl
                  text-sm font-medium
                  text-[var(--muted)]
                  hover:text-[var(--primary)]
                  hover:bg-black/5 dark:hover:bg-white/5
                  transition-all duration-300
                "
              >
                {link.name}
              </a>
            ))}

            {/* TOGGLE */}
            <button
              onClick={toggleDarkMode}
              className="
                ml-3
                p-2.5 rounded-xl
                border border-[var(--border)]
                bg-[var(--card)]
                hover:bg-black/5 dark:hover:bg-white/10
                backdrop-blur-md
                transition-all duration-300
                hover:scale-105
              "
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-yellow-300" />
              ) : (
                <Moon className="w-4 h-4 text-[var(--foreground)]" />
              )}
            </button>
          </nav>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="
                p-2 rounded-xl
                border border-[var(--border)]
                bg-[var(--card)]
                hover:bg-black/5 dark:hover:bg-white/10
                backdrop-blur-md
                transition-all duration-300
              "
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-[var(--foreground)]" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-2 rounded-xl
                border border-[var(--border)]
                bg-[var(--card)]
                hover:bg-black/5 dark:hover:bg-white/10
                backdrop-blur-md
                transition-all duration-300
                text-[var(--foreground)]
              "
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden
                border-t border-[var(--border)]
                bg-[var(--card)]
                backdrop-blur-2xl
              "
            >
              <div className="flex flex-col px-6 py-6 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      px-4 py-3 rounded-xl
                      text-[var(--muted)]
                      hover:bg-black/5 dark:hover:bg-white/5
                      hover:text-[var(--primary)]
                      transition-all duration-300
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </AnimatedDiv>
  );
};

export default Header;
