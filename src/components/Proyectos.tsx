import { useState } from 'react'
import AnimatedDiv from './AnimatedDiv'

import GaleriaChocca from '../assets/image/jeans_bgoo.jpg'

const Proyectos = () => {
  const [isHovered, setHovered] = useState<boolean>(false)
  const [showInfo, setShowInfo] = useState<boolean>(false) // tap en mobile

  const bgStyle = { backgroundColor: 'var(--bg-color)' }
  const textStyle = { color: 'var(--text-color)' }

  const handleClick = () => {
    setShowInfo(!showInfo)
  }

  return (
    <AnimatedDiv>
      <div id='proyectos' className='flex flex-col w-full text-center relative mt-10 mb-10'>
        <h1 className='text-[28px] font-mono mb-6' style={textStyle}>Proyectos</h1>

        <div 
          className='shadow-xl w-[350px] h-[250px] flex items-center flex-col relative transition duration-700 mx-auto cursor-pointer'
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClick} // tap en mobile
          style={bgStyle}
        >
          <img 
            alt='Chocca Catalogue'
            src={GaleriaChocca}
            className='w-full h-full m-4 rounded-lg opacity-85'
          />

          {(isHovered || showInfo) && (
            <div className='absolute bottom-0 top-[40%] flex flex-col text-center items-center px-2'>
              <h1 className='font-mono font-bold text-xl text-white'>Chocca Catalogue 👕</h1>
              <p className='font-mono text-white text-sm mb-2'>
                Catálogo web para tienda de ropa. Filtrado por categoría, color, tamaño y título.
              </p>
              <div className='flex gap-2'>
                <button className='bg-black/80 w-[80px] text-white cursor-pointer hover:scale-105 duration-300 transition rounded-lg py-1'>
                  <a target='_blank' href='https://galeria-chocca-frontend.vercel.app/'>Demo</a>
                </button>
                <button className='bg-black/80 w-[80px] text-white cursor-pointer hover:scale-105 duration-300 transition rounded-lg py-1'>
                  <a target='_blank' href='https://github.com/AbelChocca/Galeria-Chocca-Readme'>GitHub</a>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedDiv>
  )
}

export default Proyectos