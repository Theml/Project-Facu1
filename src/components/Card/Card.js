import './Card.css'
import { useState } from 'react'

import cardImg from './imagens/cardImg.png'
import arrowUp from './imagens/arrowUp.png'
import arrowDown from './imagens/arrowDown.png'


const Card = (props)=>{

    const defCssCor = {
        "border-color": props.cor,
    }

    const [open, setOpen] = useState(props.open === "true")

    const openClose = ()=>{
        setOpen( open ? false : true)
        
    }

    // const upClick = ()=>{
    //     document.querySelector(".card_body").style.display="none"
    //     document.querySelector(".card_head > img:nth-child(4)").style.display="block"
    //     document.querySelector(".card_head > img:nth-child(3)").style.display="none"
    // }
    // const downClick = ()=>{
    //     document.querySelector(".card_head > img:nth-child(3)").style.display="block"
    //     document.querySelector(".card_head > img:nth-child(4)").style.display="none"
    //     document.querySelector(".card_body").style.display="block"
    // }

    return (
        <div className='Card-Container' style={defCssCor}>

            <div className='card_head'
             style={{"background-color": props.cor}}>
                <img src={cardImg} alt='error' />
                <span>{props.titulo}</span>
                <img src={open?arrowUp:arrowDown} alt='arrowUp' onClick={openClose}/>
            </div>

            <div className={"card_body "+(open?"show":"showOff")}>
                <span>{props.children}</span>
            </div>

           
        </div>
    )
}



export default Card