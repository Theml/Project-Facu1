import './Mailbox.css'
import { useEffect, useState } from 'react'

const Mailbox = () => {


    // Condições e-mail valido possui @ , e-mail invalido sem @ 'joazinho@teste.com' -> valido ; 'joazinho.teste.com' invalido
    const[mail,setMail] = useState("")

    const [validate, setValidate] = useState(false)

    useEffect(()=> {
        setValidate(mail.includes("@"))
    },[mail])

    return(
        <div className='mail_container'>
            <div className="mail_body">
                <span>Escreva seu e-mail</span>
                <form>
                    <input type="email" value={mail} onChange={(e) => {setMail(e.target.value)}}/>
                    
                    {!validate && mail !== "" && <span> e-mail inválido </span> }
                    {/* mail = False ==> e-mail invalido */}

                    {validate && <button type='submit'> Enviar </button>}
                    {/* mail = True ==> enviar */}

                </form>                
            </div>
        </div>
    )

}

export default Mailbox