import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/Index'
import Botao from '../Botao/Index'
import { useState } from 'react'

const Formulario = (props) => {
    const[nome, setNome] = useState('')
    const[funcao, setFuncao] = useState('')
    const[agente, setAgente] = useState('')
    const[foto, setFoto] = useState('')

    const agentes = [
        'Astra',
        'Breach',
        'Brimstone',
        'Chamber',
        'Cypher',
        'Deadlock',
        'Fade',
        'Gekko',
        'Harbor',
        'Jett',
        'Kay/o',
        'Killjoy',
        'Neon',
        'Omen',
        'Phoenix', 
        'Raze',
        'Reyna',
        'Sage',
        'Skye',
        'Sova',
        'Viper',
        'Yoru',
    ]

    const fotosAgentes = [
        ['Astra','https://static.wikia.nocookie.net/valorant/images/4/4a/VALORANT_Astra_Card_Small.png'],
        ['Breach','https://static.wikia.nocookie.net/valorant/images/9/97/VALORANT_Breach_Card_Small.png'],
        ['Brimstone','https://static.wikia.nocookie.net/valorant/images/7/78/VALORANT_Brimstone_Card_Small.png'],
        ['Chamber','https://static.wikia.nocookie.net/valorant/images/e/e0/VALORANT_Chamber_Card_Small.png'],
        ['Cypher','https://static.wikia.nocookie.net/valorant/images/9/95/VALORANT_Cypher_Card_Small.png'],
        ['Deadlock','https://static.wikia.nocookie.net/valorant/images/4/4f/VALORANT_Deadlock_Card_Small.png'],
        ['Fade','https://static.wikia.nocookie.net/valorant/images/0/03/VALORANT_Fade_Card_Small.png'],
        ['Gekko','https://static.wikia.nocookie.net/valorant/images/d/d1/VALORANT_Gekko_Card_Small.png'],
        ['Harbor','https://static.wikia.nocookie.net/valorant/images/4/49/VALORANT_Harbor_Card_Small.png'],
        ['Jett','https://static.wikia.nocookie.net/valorant/images/4/41/VALORANT_Jett_Card_Small.png'],
        ['Kay/o','https://static.wikia.nocookie.net/valorant/images/6/6f/VALORANT_KAYO_Card_Small.png'],
        ['Killjoy','https://static.wikia.nocookie.net/valorant/images/7/73/VALORANT_Killjoy_Card_Small.pn'],
        ['Neon','https://static.wikia.nocookie.net/valorant/images/4/44/VALORANT_Neon_Card_Small.png'],
        ['Omen','https://static.wikia.nocookie.net/valorant/images/d/d7/VALORANT_Omen_Card_Small.png'],
        ['Phoenix', 'https://static.wikia.nocookie.net/valorant/images/0/03/VALORANT_Phoenix_Card_Small.png'], 
        ['Raze', 'https://static.wikia.nocookie.net/valorant/images/0/09/VALORANT_Raze_Card_Small.png'],
        ['Reyna', 'https://static.wikia.nocookie.net/valorant/images/9/9b/VALORANT_Reyna_Card_Small.png'],
        ['Sage', 'https://static.wikia.nocookie.net/valorant/images/f/fe/VALORANT_Sage_Card_Small.png'],
        ['Skye', 'https://static.wikia.nocookie.net/valorant/images/9/99/VALORANT_Skye_Card_Small.png'],
        ['Sova', 'https://static.wikia.nocookie.net/valorant/images/5/57/VALORANT_Sova_Card_Small.png'],
        ['Viper','https://static.wikia.nocookie.net/valorant/images/3/3f/VALORANT_Viper_Card_Small.png' ],
        ['Yoru', 'https://static.wikia.nocookie.net/valorant/images/a/a1/VALORANT_Yoru_Card_Small.png']
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        //console.log('Form foi submetido')
        //console.log("Valores => ", nome, funcao, agente, foto)
        props.aoJogadorCadastrado({
            nome: nome,
            funcao: funcao,
            foto: foto,
            agente: agente
        })

        setNome('')
        setFuncao('')
        setAgente('')
        setFoto('')
    }

    function aoTrocarAgente(nomeAgente){
        setAgente(nomeAgente)
        var agente = fotosAgentes.find(ag => ag[0] == nomeAgente)
        setFoto(agente[1])
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha o Formulário para criar o seu card</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome.."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                {/* <CampoTexto 
                    obrigatorio={false}
                    label="Foto" 
                    placeholder="Escolha uma imagem..."
                    valor={foto}
                    aoAlterado={valor => setFoto(valor)}
                 /> */}
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Agente Favorito"
                    itens={agentes}
                    valor={agente}
                    aoAlterado={valor => aoTrocarAgente(valor)}
                  />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Função Favorita"
                    itens={props.funcoes}
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                  />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario 