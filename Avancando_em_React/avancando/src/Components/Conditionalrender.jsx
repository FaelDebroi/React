import React from 'react'

const Conditionalrender = () => {
    const x = true;

    const name = "Rafael"

  return (
    <div>

        {/* 7- render condicional */}
        <h3>Isso sera exibido?</h3>
        {x && <p>se x for verdade </p>}

        {/* 8- else */}

        {name === "Rafael"?(// condicao
        <div>
            <p>sou Rafael</p>
        </div>
        ):(//else
            <div><p>
                nome nao encontrado</p></div>

        )}

    </div>
  )
}

export default Conditionalrender
