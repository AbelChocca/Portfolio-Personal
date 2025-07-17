import React from 'react'
import AnimatedDiv from './AnimatedDiv'

const About = () => {
  return (
    <AnimatedDiv>
        <div id='about' className='w-full flex flex-col justify-center items-center mt-10 '>
            <h1 className=' text-[24px] font-mono mt-20'>Conoce un poco más de mí</h1>
            <div className='flex flex-wrap justify-center gap-6 p-4 mt-10 mb-10'>
    <div className='flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4'>
        <div className='text-4xl justify-items-center mb-2'>
            <img 
            className='w-1/2'
            alt='WebDevIcon' 
            src='https://www.svgrepo.com/show/1699/web-development.svg' />
        </div>
        <p className='text-center text-gray-700'>Apasionado por la tecnología <strong>backend y frontend</strong>. Me gusta diseñar y estructurar resoluciones a problemas complejos mediante la creación de <strong>Aplicaciones Web</strong>.</p>
    </div>

    {/* Bloque 2: Tecnologías Clave */}
    <div className='flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4'>
        {/* Icono (ej: <FaPython /> y <FaJs />) */}
        <div className='text-4xl w-full h-30 mb-2 relative'>
            <img 
                alt='Python'
                src='https://images.icon-icons.com/112/PNG/512/python_18894.png'
                className='w-30 absolute left-0'
            />
            <img 
                alt='Javascript'
                src='https://img.icons8.com/color/512/javascript.png'
                className='w-30 absolute right-0'
            />
        </div>
        <p className='text-center text-gray-700'>Actualmente trabajo con: <strong>Python y Javasript</strong>. Me considero más de la parte de Python que de Javascript, pero eso no quita que <strong>siga aprendiendo constantemente de los dos</strong>.</p>
    </div>
    <div className='flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md w-full md:w-1/3 lg:w-1/4'>
        <div className='text-4xl text-purple-600 mb-2'>
            <img 
                alt='Startup'
                src='https://cdn-icons-png.flaticon.com/512/1067/1067574.png'
                className='w-30'
            />
        </div>
        <p className='text-center text-gray-700'>Me gusta colaborar en proyectos relacionados al <strong>negocio online y startups</strong>.</p>
    </div>
</div>
        </div>
    </AnimatedDiv>
  )
}

export default About
