import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className='flex flex-col gap-4 w-full min-h-screen'>
        <Header />
        <Home />
        <About />
        <Proyectos />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App
