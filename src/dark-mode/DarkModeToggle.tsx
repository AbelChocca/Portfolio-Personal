import { useDarkMode } from './DarkModeContext'

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode()
  return (
    <button className="dark-toggle-button" onClick={toggleDarkMode}>
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

export default DarkModeToggle