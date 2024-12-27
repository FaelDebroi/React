import { useState } from "react"

const Listerender = () => {
    const[list] = useState(["Mathues", "Pedro","Josias"]);
    const[users, setUser] = useState([
        {id: 1, name: "matheus", age:31},
        {id: 2, name: "Pedro", age:20},
        {id: 3, name: "Rafael", age:19}
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);
        setUser((prevUser) => 
        prevUser.filter((user) => randomNumber !== user.id)
        );
    };



  return (
    <div>
        {/* 4- rebder sem key */}
     <ul>
        {list.map((item) =>(
            <li>{item}</li>
        ))}
     </ul>

       {/* 5- render com key */}
    <ul>
        {users.map((user)=>(
          <li key = {user.id}>{user.name} - {user.age} anos</li>
             ))} 
    </ul>

    {/* 6- Previus state  */}
    <button onClick={deleteRandom}>Delete random user</button>

    </div>
  )
}

export default Listerender
