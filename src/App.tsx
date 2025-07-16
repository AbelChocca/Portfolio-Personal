import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col gap-4 w-full min-h-screen'>
        <Header />
        <Home />
        <About />
      </div>
    </>
  )
}

export default App
