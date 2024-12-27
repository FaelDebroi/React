import React from 'react'

const Templete = () => {
  const name = "Debroi"
    const data = {
    age: 31,
    job: "programador"
  }
    return (
    <div>
      <p> a soma é{2+2}</p>
      <h3>Bem vindo {name}</h3>
      <h2>Sua idade é {data.age} anos e vc é um {data.job}</h2>
    </div>
  )
}

export default Templete
