import './Scrollable.css'
import leftArrow from './imagens/arrow_left.png'
import rightArrow from './imagens/arrow_right.png'
import { useState } from 'react'



const Scrollable = (props)=>{

    const [move, setMove] = useState(0)

    const Right = ()=> {
        if ( move <= 180){
            setMove ( move + 5)
        }
        // decrementar setMove - 10 e por um até chegar a 0
    }
    const Left = () =>{
        if(move > 0 ){
            setMove (move - 5)
        }
    }

    return(
        <div className='scrollable_container'>
            <button onClick={Left}><img src={leftArrow} alt='seta_esquerda'/></button>
            <div className='scrollable_body'>
                <div className='scrollable_move' style={{'left':move}} ></div>
            </div>
            <button onClick={Right}><img src={rightArrow} alt='seta_direita'/></button>
        </div>
    )
}

export default Scrollable