import React from 'react'
import AnimatedDiv from './AnimatedDiv'
import imageStyle from '../styles/imageSkill'
import divStyle from '../styles/divSkill'

const Skills = () => {
  return (
    <AnimatedDiv>
        <div id="skills" className='flex flex-col justify-center items-center'>
            <h1 className='font-mono text-2xl'>Skills</h1>
            <div className='flex flex-wrap gap-4 w-full justify-center min-h-screen m-5'>
                <div className={divStyle}>
                    <img 
                        alt='python'
                        className={imageStyle}
                        src='https://images.icon-icons.com/112/PNG/512/python_18894.png'
                    />
                    <h1 className='text-lg font-mono'>Python</h1>
                </div>
                <div className={divStyle}>
                    <img 
                        alt='postgresql'
                        className={imageStyle}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'
                    />
                    <h1 className='text-lg font-mono'>PostgreSQL</h1>
                </div>
                <div className={divStyle}>
                    <img 
                        alt='react'
                        className={imageStyle}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
                    />
                    <h1 className='text-lg font-mono'>React</h1>
                </div>
                <div className={divStyle}>
                    <img 
                        alt='tailwindcss'
                        className={imageStyle}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png'
                    />
                    <h1 className='text-lg font-mono'>Tailwindcss</h1>
                </div>
                <div className={divStyle}>
                    <img 
                        alt='docker'
                        className={imageStyle}
                        src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png'
                    />
                    <h1 className='text-lg font-mono'>Docker</h1>
                </div>
                <div className={divStyle}>
                    <img 
                        alt='github'
                        className={imageStyle}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png'
                    />
                    <h1 className='text-lg font-mono'>Github</h1>
                </div>
            </div>
        </div>
    </AnimatedDiv>
  )
}

export default Skills
