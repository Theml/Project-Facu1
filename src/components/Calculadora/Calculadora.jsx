import './Calculadora.css'
import { useEffect, useState } from 'react'

const Calculadora = () =>{
    const [calc, setCalc] = useState({"valor1": 0, "valor2": 0})

    const [result, setResult] = useState(0)

    // useEffect(()=>{
    //     console.log("renderizado , funciona igual o Update() do unity");
    // })

    // useEffect(()=>{
    //     console.log("component criado");
    // },[])

    //useEffect <- para proxima aula
    useEffect(()=>{
        setResult( parseInt(calc.valor1) + parseInt(calc.valor2) )
    },[calc])

    return (

        <div className='Calculadora_container'>
            <input type="number" onChange={(e)=>{setCalc( {...calc,"valor1":e.target.value} )}} value={calc.valor1}/>
            <input type="number" onChange={(e)=>{setCalc( {...calc,"valor2":e.target.value} )}} value={calc.valor2}/>
            {/* <button >+</button> */}
            <span>=</span>
            <span>{result}</span>
        </div>

    )
}

export default Calculadora