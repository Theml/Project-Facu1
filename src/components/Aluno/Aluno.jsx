import './Aluno.css'

const Aluno = ({nome, disciplina, nota}) => {
    const aprovado = (nota >= 6) 

    return(
        <p className='Aluno_p'>
         O Aluno  <span className='Aluno_bold'>{nome}</span> foi  
         <span className={'Aluno_bold' +(aprovado?"blue":"red")}>{aprovado? " Aprovado ":" Reprovado "}</span>
         na disciplina <span className='Aluno_bold'>{disciplina}</span>
        </p>
    )
}

export default Aluno