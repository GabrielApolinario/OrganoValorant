import './Jogador.css'

const Jogador = ({nome, funcao, foto, agente}) =>{
    return (
        <div className='jogador'>
            <div className='cabecalho'>
                <img src={foto} alt='imagem do jogador'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{agente}</h5>
                <h5>{funcao}</h5>                
            </div>
        </div>
    )
}

export default Jogador