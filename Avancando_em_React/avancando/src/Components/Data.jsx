import {useState} from 'react';

const Data = () => {

    let someData = 10;

const [anotherNumber,setanotherNumber] = useState(15);

  return (
    <div>
        <div>
         <p>Valor some: {someData}</p>
        <button onClick={()=> (someData + 15)}>Mudar Variavel</button>
         </div>

        { <div> 
        <p>valor: {anotherNumber}</p>
        <button onClick={()=>setanotherNumber(20)}> mudar state</button>
        </div>  
        }
    </div>
  )
}

export default Data
