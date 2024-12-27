import "./Myform.css";

import { useState } from "react";

const Myform = ({userName,UserEmail}) => {
    
    // 3- gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(UserEmail);

    const [bio,setBio] = useState();

    const [role, SetRole] = useState("");


    const handleName =(e)=>{
        setName(e.target.value)
    }

    // 5- envio de for
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(name,email,bio,role);

        // 7- limpar forms
        setName("");
        setEmail("");
        setBio("");
        SetRole("");
    }


    console.log(name)
    console.log(email)


    return (
    <div>
        {/* 5- envio de formulario */}
        <form onSubmit={handleSubmit}>
        {/* 1- criacao de form */}
      
            <div>
                <label htmlFor="name">Nome:</label>
                {/* alterando por funcao */}
                <input 
                type="text" 
                name="name" 
                placeholder="Digite seu nome" 
                onChange={handleName}/>
            {/* 6 - controlled input */}
            value ={name || ""}
            </div>

                {/* 2 - label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* alterando diretamente- simplificando */}
                    <input 
                    type="text" 
                    name="email" 
                    placeholder="Digite o seu e-mail" 
                    onChange={(e)=>setEmail(e.target.value)}
                    // 6- controlled input
                    value={email || ""}
                    />
                </label>

                {/*  8- texterea */}
                <label >
                    <span>Bio:</span>
                    <textarea 
                    name="Bio" 
                    placeholder="Descriçao do usuario" 
                    onChange={(e)=>setBio(e.target.value)}
                    value={bio}>  
                    </textarea>
                </label>
                {/* 9 - select */}
                <label>
                    <span>Funcao no sistema</span>
                    <select name="role" onChange={(e)=> SetRole(e.target.value)}
                        value={role}>
                        <option value="user">Usuario</option>
                        <option value="Editor">Editor</option>
                        <option value="Admin">Admin</option>
                    </select>
                </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Myform
