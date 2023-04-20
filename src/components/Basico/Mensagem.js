//estrutura basica de um componente
import './Mensagem.css'
// export const <- possibilita exporta o componente diretamente
const Mensagem = (props) => {
    return (
    <div className='Container' 
    style={
        {"backgroundColor": props.color}
    }>
        <h1 className='mensagemTitulo' 
        style={
        {"color": props.colorT}
    }
    >{props.titulo}</h1>
        <h2 className='mensagemSub'>{props.sub}</h2>
    </div>
    )
}

export default Mensagem