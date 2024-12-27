import React from "react";

const Events = () =>{

const teste = ()=>{
    console.log("testando aqui");
};
//metodos
const renderSomething = (x) =>{
    if(x){
        return <h1>Renderizando isso!</h1>;
    }else{
        return <h1>Renderizando outra coisa!</h1>
    }
}
//principal
    return(
        <div>
            <div>
                <button onClick={() => console.log("testando um evento") }>Click Aqui</button>
                <button onClick={teste}>Click Aqui</button>
            </div>

            {/* 8 - funcao com render*/}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}

export default Events;