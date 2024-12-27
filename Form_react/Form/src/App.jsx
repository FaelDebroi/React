import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Myform from './components/Myform'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <h1>Form em React </h1>
      <Myform userName="Mathues" UserEmail="rafaeldebroi@gmail.com"/>

   </div>
  )
}

export default App
