import './Rodape.css'
import Instagram from './imagens/instagram_icon.png'
import Twitter from './imagens/twitter_icon.png'
import WhatsApp from './imagens/whatsapp_icon.png'

const Rodape = (props)=>{

    return (
        <div className='rodape_container'>
            <div className='rodape_body'>
            <span>{props.children}</span>
            <a href='https://www.instagram.com/luis_theml/'><img src={Instagram} alt='Instagram'></img></a>
            <a href='https://twitter.com/Theml2'><img src={Twitter} alt='Twitter'></img></a>
            <a href='https://wa.me/5532991208843'><img src={WhatsApp} alt='WhatsApp'></img></a>
            </div>
        </div>
    )
}

export default Rodape