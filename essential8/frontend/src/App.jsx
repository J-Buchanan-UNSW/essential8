import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="hero">
        </div>
        <div>
          <h1>Essential 8</h1>
          <p>
            Making your technolgoy safer
          </p>
        </div>
    </>
  )
}

export default App
