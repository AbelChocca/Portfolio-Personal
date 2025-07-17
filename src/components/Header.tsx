import React from 'react'
import AnimatedDiv from './AnimatedDiv'
import buttonHeader from '../styles/buttonHeader'

const Header = () => {
  return (
    <AnimatedDiv>
        <div className='w-full h-20 flex bg-white space-x-10 md:space-x-50 items-center font-mono fixed inset-0 z-50'>
            <img 
            className='w-22 h-22'
            src='/src/assets/image/Logo.png' 
            alt='Logo'/>
            <div className='flex gap-4 justify-between items-center'>
                <a href='#about' className={buttonHeader}><p>About</p></a>
                <a href='#proyectos' className={buttonHeader}><p>Proyectos</p></a>
                <a href='#skills' className={buttonHeader}><p>Skills</p></a>
                <a href='#' className={buttonHeader}><p>Contacto</p></a>
            </div>
        </div>
    </AnimatedDiv>
  )
}

export default Header
