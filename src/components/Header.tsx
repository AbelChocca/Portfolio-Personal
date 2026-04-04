import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import AnimatedDiv from './AnimatedDiv'
import buttonHeader from '../styles/buttonHeader'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../dark-mode/DarkModeContext'
import Logo from '/assets/image/logo.png'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contacto', href: '#contactos' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useDarkMode()

  // Clases dinámicas según modo
  const bgHeader = darkMode ? 'bg-gray-900' : 'bg-white'
  const menuBg = darkMode ? 'bg-gray-800' : 'bg-white'
  const linkColor = darkMode ? 'text-white' : 'text-black'

  return (
    <AnimatedDiv>
      <header className={`w-full fixed top-0 left-0 z-50 shadow-md ${bgHeader}`}>
        <div className="flex items-center justify-between h-20 px-6 md:px-20 font-mono">
          
          {/* Logo */}
          <img
            className="w-22 h-22"
            src={Logo}
            alt="Logo"
          />

          {/* Links de navegación desktop */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${buttonHeader} ${linkColor} hover:text-indigo-600 transition-colors`}
              >
                {link.name}
              </a>
            ))}

            {/* Toggle Dark Mode Desktop */}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 p-2 rounded-full transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-300 text-black'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Botón hamburguesa móvil */}
          <div className="md:hidden flex items-center gap-2">
            {/* Toggle Dark Mode Mobile */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-gray-300 text-black'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
              className={`md:hidden flex flex-col items-center w-full shadow-lg py-4 ${menuBg}`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`${buttonHeader} ${linkColor} hover:text-indigo-600 transition-colors`}
                  onClick={() => setIsOpen(false)} // Cierra menú al hacer click
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </AnimatedDiv>
  )
}

export default Header