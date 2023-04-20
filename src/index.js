import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Mensagem from './components/Basico/Mensagem';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Contador from './components/Contador/Contador';
import Rodape from './components/Rodape/Rodape';
import Rolagem from './components/Rolagem/Rolagem';
import Scrollable from './components/Scrollable/Scrollable';
import Aluno from './components/Aluno/Aluno';
import Aleatorio from './components/Aleatorio/Aleatorio';
import Calculadora from './components/Calculadora/Calculadora';
import Mailbox from './components/Mailbox/Mailbox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mensagem titulo="React 2023" sub="Bem vindo" color="red"/>
    
    <Cards>

      <Card titulo="Exercicio - Formulário">
        <Calculadora/>
      </Card>

      <Card titulo="Exercicio - Aluno">
        <Aluno nome="Zezin" disciplina="React" nota={8}/>
      </Card>

      <Card titulo="Exercicio - Aleatorio" cor="#f34" open="true">
        <Aleatorio min={1} max={20} />
      </Card>

    <Card titulo="1 Exemplo"  mensagem="Teste" open="true">
      <h1>Teste</h1>
      <Contador value=""/>
      <Scrollable move="true"/>
    </Card>

    <Card titulo="2 Exemplo" open="false">
      <Contador value=""/>
      <Rolagem/>
    </Card>

    <Card titulo="Mailbox" open="true" >
      <Mailbox/>
    </Card>

    </Cards>
     {/* para a atividade que tem no canvas*/}

    <Rodape>
      <h2>Logo</h2>
    </Rodape>
  </React.StrictMode>
);
