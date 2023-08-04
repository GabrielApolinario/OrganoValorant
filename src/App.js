import Formulario from './componentes/Formulario/Formulario';
import Banner from './componentes/Banner/Banner';
import Time from './componentes/Funcao'
import { useState } from 'react';

function App() {
  
const listaFuncoes = [
  {
    nome: 'Controlador',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9'
  },
  {
    nome: 'Iniciador',
    corPrimaria: '#db6ebf',
    corSecundaria: '#fae9f5'
  },
  {
    nome: 'Duelista',
    corPrimaria: '#82cffa',
    corSecundaria: '#e8f8ff'
  },
  {
    nome: 'Sentinela',
    corPrimaria: '#e06b69',
    corSecundaria: '#fde7e8' 
  }
  
  
]

const [colaboradores, setColaboradores] = useState([])
const aoNovoColaboradorAdicionado = (colaborador) => {
  console.log(colaborador)
  setColaboradores(colaborador)
}

  return (    
    <div className="App">      
      <Banner/>    
      <Formulario funcoes={listaFuncoes.map(itemFuncao => itemFuncao.nome)} aoColaboradorCadastrado={novoColaborador => aoNovoColaboradorAdicionado(novoColaborador)}/> 
      {listaFuncoes.map(itemFuncao => <Time key={itemFuncao.nome} nome={itemFuncao.nome} corPrimaria={itemFuncao.corPrimaria} corSecundaria={itemFuncao.corSecundaria}/>)}  
      {/* (setColaboradores([...colaboradores, novoColaborador]))}/> */}
    </div>
  );
}

export default App;
