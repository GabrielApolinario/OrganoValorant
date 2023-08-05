import Formulario from './componentes/Formulario/Formulario.js';
import Banner from './componentes/Banner/Banner.js';
import Funcao from './componentes/Funcao/';
import Footer from './componentes/Rodape/Index.js';
import { useState, useEffect } from 'react';

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

useEffect(() =>{
  sessionStorage.setItem("cards", JSON.stringify(jogadores))
  
  // var cards = sessionStorage.getItem("cards")
  // if(cards != null){
  //   var a = JSON.stringify(cards);
  //   var b = JSON.parse(a);
  //   setjogadores([b])
  // }
  //var a = JSON.stringify(cards);
  //var sessionJogadores = JSON.parse(a);
  //console.log(sessionJogadores);
  //sessionStorage.setItem("cards", jogadores)
  //setjogadores([sessionJogadores])
}, [jogadores])

  const aoNovoJogadorAdicionado = (jogador) => {
  //debugger
  setjogadores([...jogadores, jogador])
  //sessionStorage.setItem("cards", JSON.stringify(jogadores))
  //console.log(jogadores)
  //var a = JSON.parse(sessionStorage.getItem("cards"))

}

  return (    
    <div className="App">      
      <Banner/>    
      <Formulario funcoes={listaFuncoes.map(itemFuncao => itemFuncao.nome)} aoJogadorCadastrado={novoJogador => aoNovoJogadorAdicionado(novoJogador)}/> 
      {listaFuncoes.map(itemFuncao => 
        jogadores != null && <Funcao 
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
