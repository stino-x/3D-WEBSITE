// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import Canvas from './canvas/index';
import Customizer from './pages/Customizer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='head-text'>ThreeJS</h1>
      <main className='app transition-all ease-in'>
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </div>
  )
}

export default App
