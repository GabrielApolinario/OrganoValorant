import Jogador from '../Jogador/Index.js'
import './Funcao.css'
import { useState } from 'react'
import hexToRgba from 'hex-to-rgba'

const Funcao = (props) => {

const[cor, setCor] = useState(props.corSecundaria)

    return (
        (props.jogadores.length > 0) && 
        <section className="funcao" style={{ backgroundColor: hexToRgba(cor, 0.6)}}>
            <h3 style={{ borderColor: cor }}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map((jogador, indice) =>
                    <Jogador
                        corDeFundo={cor}
                        key={indice}
                        nome={jogador.nome}                        
                        foto={jogador.foto}
                        agente={jogador.agente} 
                        aoDeletar={props.aoDeletar}/>

                )
                }
                <input type='color' value={cor} onChange={evento => {setCor(evento.target.value)}}></input>
            </div>
        </section>
    )
}

export default Funcao