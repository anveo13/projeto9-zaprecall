import { useState } from "react"
import Body from "../estilos/Body"
import Conteudo from "./Conteudo"
import Rodape from "./Rodape"
import Topo from "./Topo"

export default function Principal() {
    const [contador, setContador] = useState(0)
    function contagemQuizz() {
    const perguntasConcluidas = contador + 1
    setContador(perguntasConcluidas) 
    
    }
    return (
        <>
            <Body>
                <Topo/>
                <Conteudo contagemQuizz={contagemQuizz} />
                <Rodape contador={contador}/>
            </Body>

        </>
        )
}