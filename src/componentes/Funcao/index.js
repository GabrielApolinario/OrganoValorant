import Jogador from '../Jogador/Index.js'
import './Funcao.css'

const Funcao = (props) => {

    return (
        (props.jogadores.length > 0) && <section className="funcao" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className='jogadores'>
                {props.jogadores.map((jogador, indice) =>
                    <Jogador
                        corDeFundo={props.corPrimaria}
                        key={indice}
                        nome={jogador.nome}                        
                        foto={jogador.foto}
                        agente={jogador.agente} 
                        aoDeletar={props.aoDeletar}/>

                )
                }
            </div>
        </section>
    )
}

export default Funcao