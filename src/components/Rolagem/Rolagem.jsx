import './Rolagem.css'
import { useState } from 'react'

const Rolagem = ()=> {

    const [move, setMove] = useState(0)

    const Right = ()=> {
        if ( move < 175){
            setMove ( move + 10)
        }
        // decrementar setMove - 10 e por um até chegar a 0
    }
    const Left = () =>{
        if(move > 0 ){
            setMove (move - 10)
        }
    }

    return(
        <div className="Rolagem_container">
            <button onClick={Left}>-</button>
            <div>
                <div className='Rolagem_content' style={{"left":move+"px"}}></div>
            </div>
            <button onClick={Right}>+</button>
        </div>
    )

}

export default Rolagem