import React, { useState } from 'react'
import AnimatedDiv from './AnimatedDiv'

const Proyectos = () => {
    const [isHovered, setHovered] = useState<boolean>(false);

  return (
    <AnimatedDiv>
        <div id='proyectos' className='flex flex-col w-full min-h-screen text-center relative mt-20'>
            <h1 className='text-[28px] font-mono'>Proyectos</h1>
            <div 
            className='shadow-xl w-[350px] h-[250px] absolute top-[10%] left-[10%] flex items-center flex-col relative hover:opacity-85 transition duration-700 mt-10'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
                <img 
                    alt='Pizzeria proyecto'
                    src='./src/assets/image/PizzaFoto.webp'
                    className='w-full h-full m-4 rounded-lg opacity-85'
                />
                { isHovered && ( <div className='absolute bottom-0 top-[40%] flex flex-col text-center items-center'>
                    <h1 className='font-mono text-white font-bold text-xl'>Pizzeria Angelita 🍕</h1>
                    <p className='font-mono text-white'>FastApi, PostgreSQL, React, etc.</p>
                    <button className='bg-black/80 w-[100px] text-white m-2 cursor-pointer hover:scale-105 duration-1000 transition rounded-lg'><a target='_blank' href='https://pizzeria-frontend.up.railway.app/home'>Visitar</a></button>
                    </div> )
                }  
            </div>
        </div>
    </AnimatedDiv>
  )
}

export default Proyectos
