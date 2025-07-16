import React from 'react'
import AnimatedDiv from './AnimatedDiv'

const Home = () => {
  return (
    <AnimatedDiv>
        <div className='w-full h-screen flex '>
            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[60px] md:text-[100px] ml-20 font-serif font-bold'>Abel</h1>
                <h1 className='text-[60px] md:text-[100px] ml-25 font-serif font-bold'>Chocca</h1>
                <p className='text-[14px] font-serif ml-25 md:ml-50 font-bold'>Fullstack Developer Jr.</p>
            </div>
        </div>
    </AnimatedDiv>
  )
}

export default Home
