import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

// Tipo del contexto
interface DarkModeContextType {
  darkMode: boolean
  toggleDarkMode: () => void
}

// Contexto
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)

// Provider
export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false)

  // Opcional: guardar preferencia en localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode) setDarkMode(savedMode === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    // También podemos cambiar clase en body para Tailwind dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

// Hook para usar el contexto
export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) throw new Error('useDarkMode must be used within DarkModeProvider')
  return context
}