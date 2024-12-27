import './App.css'
import ImcCalc from './components/ImcCalc'
import { useState } from 'react'
import {date} from "./data/data"
import ImcTable from './components/ImcTable'

function App() {

const[imc,setImc] = useState("")
const[info,setInfo] = useState("")
const[infoClass, setInfoClass] = useState("")

  const calcImc = (e,height,weight) =>{
      e.preventDefault();

      console.log(height,weight)
      if(!weight || !height) return;
      
      const weightFloat = +weight.replace(",",".");
      const heightFloat = +height.replace(",",".");

      const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
      console.log("weightFloat",weightFloat)
    console.log("resultado",imcResult)
  }

  return (
    <div className='conteiner'>
      <h1>teste</h1>
     {!imc ? <ImcCalc calcImc={calcImc}/>:<ImcTable/>}
    </div>
  )
}

export default App
