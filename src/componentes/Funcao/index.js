import Jogador from '../Jogador/Index.js'
import './Funcao.css'

const Funcao = (props) => {

    return (
        (props.jogadores.length > 0) && <section className="funcao" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className='jogadores'>
                {props.jogadores.map(jogador =>
                    <Jogador
                        corDeFundo={props.corPrimaria}
                        key={jogador.nome}
                        nome={jogador.nome}
                        funcao={jogador.funcao}
                        foto={jogador.foto}
                        agente={jogador.agente} />

                )
                }
            </div>
        </section>
    )
}

export default Funcao