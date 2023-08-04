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

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
        //console.log("Valores => ", nome, funcao, agente, foto)
        props.aoColaboradorCadastrado({
            nome,
            funcao,
            foto,
            agente
        })        
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
                <CampoTexto 
                    obrigatorio={false}
                    label="Foto" 
                    placeholder="Escolha uma imagem..."
                    valor={foto}
                    aoAlterado={valor => setFoto(valor)}
                 />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Agente Favorito"
                    itens={agentes}
                    valor={agente}
                    aoAlterado={valor => setAgente(valor)}
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