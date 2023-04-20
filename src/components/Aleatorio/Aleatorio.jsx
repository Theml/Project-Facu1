import { useState } from "react"

const Aleatorio = ({min, max}) => {


    const [Random, setRandom] = useState(((Math.random() * (max-min)) + min).toFixed(0))
    
    const Randomize = ()=> {
        setRandom(((Math.random() * (max-min)) + min).toFixed(0))
    }

    return(
        <>
            <h2>Valor Aleatório</h2>
            <p>Valor Minímo: {min} </p>
            <p>Valor Máximo: {max} </p>

            <button onClick={Randomize}>Gerar</button>

            <p>Valor Aleatório: {Random} </p>
        </>
        
    )
}

export default Aleatorio