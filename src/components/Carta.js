import PerguntaFechada from './PerguntaFechada'
import Pergunta from './Pergunta'
import Resposta from './Resposta'
import { useState } from 'react'


export default function Carta(props) {
    const [cor, setCor] = useState(false)
    function riscaPalavra(novaCor){
        setCor(novaCor)
    } 
    const [estado, setEstado] = useState("inicial")
    let componente 

    if (estado === "inicial") {
        componente = <PerguntaFechada cor={cor} numero={props.numero} cliclou={lidaInicial} />
    } else if (estado === "pergunta") {
        componente = <Pergunta pergunta={props.pergunta} cliclou={lidaPergunta} />
    } else if (estado === "resposta") {
        componente =  <Resposta riscaPalavra={riscaPalavra} contagemQuizz={props.contagemQuizz} resposta={props.resposta} cliclou={lidaResposta}/>
    }
       
    function lidaInicial(){
        setEstado("pergunta")  
       
    }

    function lidaPergunta(){
        setEstado("resposta")
    }
    
    function lidaResposta(){
        setEstado("inicial")
        
    }
    return (
        <>
            {componente}
        </>
    )
}