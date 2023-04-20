import { useState } from 'react'
import './Contador.css'

const Contador = (props) =>{

    // sempre que quiser que a tela mude se mexe no estado 'useState'
    const [contador, setContador] = useState(props.value? parseInt(props.value) : 0)

    const increaseValue = (evt)=> {
        evt.target.dataset.op === '+'?
        setContador(contador + 1):
        console.log(contador, evt.target.dataset.op)
    }

    const decreaseValue = (evt)=> {
        evt.target.dataset.op === '-'?
        setContador(contador - 1):
        console.log(contador, evt.target.dataset.op)
    }

    return(
        <div className='contador_container'>
            <h1>{contador}</h1>
            <div className='contador_body'>
            <button onClick={increaseValue} data-op="+" >+1</button>
            <button onClick={decreaseValue} data-op="-">-1</button>
            </div>
        </div>
    )
}

export default Contador