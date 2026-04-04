import AnimatedDiv from './AnimatedDiv'
import { useState, useEffect } from 'react'

const About = () => {
  const [isDark, setIsDark] = useState(false)

  // Sincroniza con localStorage o tu contexto global
  useEffect(() => {
    const mode = localStorage.getItem('darkMode') === 'true'
    setIsDark(mode)

    // Aplica la clase 'dark' al html para tus variables CSS
    document.documentElement.classList.toggle('dark', mode)
  }, [])

  // Usar variables CSS
  const bgStyle = { backgroundColor: 'var(--bg-color)' }
  const textStyle = { color: 'var(--text-color)' }

  return (
    <AnimatedDiv>
      <div id='about' className='w-full flex flex-col justify-center items-center mt-10'>
        <h1 className='text-[24px] font-mono mt-20' style={textStyle}>
          Conoce un poco más de mí
        </h1>

        <div className='flex flex-wrap justify-center gap-6 p-4 mt-10 mb-10'>

          {/* Bloque 1 */}
          <div
            className='flex flex-col items-center p-6 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4 border border-gray-700'
            style={bgStyle}
          >
            <h2 className='text-lg font-semibold mb-2' style={textStyle}>
              Pasión por la tecnología
            </h2>
            <p className='text-center' style={textStyle}>
              Apasionado por la <strong>programación backend y frontend</strong>. Me gusta diseñar y estructurar soluciones a problemas complejos mediante la creación de <strong>Aplicaciones Web</strong>.
            </p>
          </div>

          {/* Bloque 2 */}
          <div
            className='flex flex-col items-center p-6 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4 border border-gray-700'
            style={bgStyle}
          >
            <h2 className='text-lg font-semibold mb-2' style={textStyle}>
              Tecnologías clave
            </h2>
            <p className='text-center' style={textStyle}>
              Actualmente trabajo con <strong>Python y JavaScript</strong>. Me considero más orientado a Python, pero siempre sigo aprendiendo y mejorando en ambos lenguajes.
            </p>
          </div>

          {/* Bloque 3 */}
          <div
            className='flex flex-col items-center p-6 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4 border border-gray-700'
            style={bgStyle}
          >
            <h2 className='text-lg font-semibold mb-2' style={textStyle}>
              Intereses en startups
            </h2>
            <p className='text-center' style={textStyle}>
              Me gusta colaborar en proyectos relacionados al <strong>negocio online y startups</strong>, buscando siempre innovación y aprendizaje constante.
            </p>
          </div>

        </div>
      </div>
    </AnimatedDiv>
  )
}

export default About