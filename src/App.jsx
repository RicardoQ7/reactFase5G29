import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>FASE 5: REALIZAR EL DESPLIEGUE DEL SITIO WEB</h1>
      <div className="card">
        <h2> INTEGRANTES: </h2>

        <h4> YESLY YOSNARY ANGARITA </h4>
        <h4> CARLOS DAIRO HERRAN </h4>
        <h4> WILLIAM RICARDO QUICENO </h4>

        <h3> GRUPO: 301122_29 </h3><br />

        <h6>ENLACE DEL PROYECTO FASE 5</h6>

        <a href="inicio.html"> Click aqui para ir al proyecto </a>
      </div>

      <a href="https://www.unad.edu.co/"> Click aqui para ir a la pagina de la universidad </a>
      
    </>
  )
}

export default App
