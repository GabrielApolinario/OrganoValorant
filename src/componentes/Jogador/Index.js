import './Jogador.css'
import {AiFillCloseCircle} from 'react-icons/ai'

const Jogador = ({nome, foto, agente, corDeFundo, aoDeletar}) =>{
    return (
        <div className='jogador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar}/>
            <div className='cabecalho' style={{backgroundColor:corDeFundo, opacity: 1}}>
                <img src={foto} alt='imagem do jogador'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{agente}</h5>                             
            </div>
        </div>
    )
}

export default Jogador