import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent'

// 6- Css modules
import Title from './components/Title'





function App() {
  const [count, setCount] = useState(0)
  // 4- css inline dinamico
  const n = 15;

  // 5- classes dinamicas 
   const redTitle = true;



  return (
   <div>
    {/* 1- Css Global */}
    <h1>Css no React</h1>

    {/* 2- CSS de componente */}
    <MyComponent/>
    <p>Pegou o css do componente</p>

    {/* 3 - inline style */}
    <p style={{color: "red",padding: "25px"}}>Este elemento tem estilos inline</p>

    {/* 4 - inline Style dinamico */}
    <h2 style={ n > 10?{color: "purple"}:{color: "magenta"}}>
      Css dinamico
    </h2>

    <h2 style={ n > 20?{color: "purple"}:{color: "magenta"}}>
      Css dinamico 2
    </h2>

    {/* 5- classes dinamicas */}
    <h2 className={redTitle? "red_title":"title"}>este titulo vai ter uma classe</h2>
    
    {/* 6- Css modules */}
    <Title/>

   </div>
  )
}

export default App
