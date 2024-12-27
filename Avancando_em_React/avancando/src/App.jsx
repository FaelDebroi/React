import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2- imagem em assets 
import hacker from "./assets/hacker.webp"

// 3- useState
import Data from './Components/Data'

// 4 - renderizacao de lista
import Listerender from './Components/Listerender'

// 7- demder comdicional 
import Conditionalrender from './Components/Conditionalrender'

// 8- props
import ShowUserName from './Components/ShowUserName'

// 9- desenstruturando props
import CarDetails from './Components/CarDetails'

//  11- renderizacao de lista com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km:2000},
  {id: 2, brand: "kia", color: "Branco", km:9999},
  {id: 3, brand: "Fit", color: "Azul", km:100000}
];

// 12- Fragmentos
import Fragment from './Components/Fragment'

//  13- importe children
import Conteiner from './Components/Conteiner'

// 14 - funcao em prop 
import Executefunction from './Components/Executefunction'

//  15 - state lift
import Messagem from './Components/Messagem'
import ChangeMessagem from './Components/ChangeMessagem'


function App() {
  // const [count, setCount] = useState(0)


  // 14- funcao em prop 
  function showMessage(){
    console.log("Evento de componente pai")
  }

  //  15 - state lift
  const [message, setMessage] = useState("");
  const hendleMessage = (msg) =>{
  setMessage(msg);
}

  return (
      <div className='App' style={{paddingBottom: "500px"}}>
        <h1>Avancando em react</h1>
        {/*1 - imagem em public*/}
        <img src="/leaoFoto.jpg" alt="alguma imagem" />
        {/* essa img esta no arquivo public */}
        {/* 2- imagem em assets */}
        <img src={hacker} alt="" />
        
        {/* 3 - userState */}
        <Data/>

        {/* 4 - renderizacao de lista */}
        <Listerender/>

        {/* 7- demder comdicional */}
        <Conditionalrender/>

        {/* 8- props e passando parametros*/}
        <ShowUserName name="Debroi" /> 

        {/* 9- desenstruturando props/ passando varios parametros*/}
        <CarDetails brand={"VW"} km={887} color={"azul"}/>

        {/* 10- reaproveitamento de componentes */}
        <CarDetails brand={"Fiat"} km={14000} color={"amarelo"}/>
        <CarDetails brand={"corola"} km={99999} color={"cinza"}/>

        {/* 11- renderizacao de lista com componente */}
        {cars.map((car)=>(
          <CarDetails 
          key = {car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}/>
        ))}

        {/* 12 - fragmentos */}
        <Fragment/>

        {/* 13 - Children */}
        <Conteiner>
          <p>teste</p>
          </Conteiner>

        {/* 14 - funcao em prop */}
        <Executefunction myFunction={showMessage}/>
        
        {/* 15 - state lift */}
        <Messagem msg={message}/>
        <ChangeMessagem hendleMessage={hendleMessage} />

      </div>
  );
}

export default App
