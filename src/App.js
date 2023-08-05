import Formulario from './componentes/Formulario/Formulario.js';
import Banner from './componentes/Banner/Banner.js';
import Funcao from './componentes/Funcao/';
import Footer from './componentes/Rodape/Index.js';
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

const [jogadores, setjogadores] = useState([])
  const aoNovoJogadorAdicionado = (jogador) => {
  //debugger
  //console.log(jogador)
  setjogadores([...jogadores, jogador])

}

  return (    
    <div className="App">      
      <Banner/>    
      <Formulario funcoes={listaFuncoes.map(itemFuncao => itemFuncao.nome)} aoJogadorCadastrado={novoJogador => aoNovoJogadorAdicionado(novoJogador)}/> 
      {listaFuncoes.map(itemFuncao => 
        <Funcao 
          key={itemFuncao.nome} 
          nome={itemFuncao.nome} 
          corPrimaria={itemFuncao.corPrimaria} 
          corSecundaria={itemFuncao.corSecundaria}
          jogadores={jogadores.filter(jogador => jogador.funcao == itemFuncao.nome)}/>)}
      <Footer/>
    </div>
  );
}

export default App;
