import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 2- importando componente
import FirstComponet from './components/FirstComponent';

// 4- templete expression
import Templete from './components/Templete';

// 5 - hierarquia
import Mycomponent from './components/Mycomponent';

//6- eventos
import Events from "./components/events"

function App() {
  // 3- comentado
  return(
    <div className='App'>
      <h1>Fudamentos do React</h1>
      <FirstComponet/>
      <Templete/>
      <Mycomponent/>
      <Events/>
    </div>
  )
}

export default App;
