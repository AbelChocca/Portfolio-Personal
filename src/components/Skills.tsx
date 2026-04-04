import AnimatedDiv from './AnimatedDiv'
import { motion } from 'framer-motion'

const skillsData = [
  { name: 'Python', icon: 'https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white' },
  { name: 'PostgreSQL', icon: 'https://img.shields.io/badge/-PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white' },
  { name: 'React', icon: 'https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black' },
  { name: 'Tailwind CSS', icon: 'https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white' },
  { name: 'Docker', icon: 'https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white' },
  { name: 'GitHub', icon: 'https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white' },
  { name: 'FastAPI', icon: 'https://img.shields.io/badge/-FastAPI-009688?style=flat&logo=fastapi&logoColor=white' },
  { name: 'SQLAlchemy', icon: 'https://img.shields.io/badge/-SQLAlchemy-000000?style=flat&logo=sqlalchemy&logoColor=white' },
  { name: 'Redis', icon: 'https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=redis&logoColor=white' },
  { name: 'Next.js', icon: 'https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=white' },
  { name: 'Pydantic', icon: 'https://img.shields.io/badge/-Pydantic-009688?style=flat&logo=python&logoColor=white' },
]

const Skills = () => {
  return (
    <AnimatedDiv>
      <div id="skills" className="flex flex-col justify-center items-center mt-10">
        <h1 className="font-mono text-2xl mb-6">Skills</h1>

        <div className="w-full overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' }}
          >
            {skillsData.concat(skillsData).map((skill, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-auto h-12 md:h-16"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedDiv>
  )
}

export default Skills