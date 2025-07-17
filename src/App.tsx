import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col gap-4 w-full min-h-screen'>
        <Header />
        <Home />
        <About />
        <Proyectos />
        <Skills />
      </div>
    </>
  )
}

export default App
