import Pai from "../estilos/Pai";
import PerguntaEResposta from "../estilos/PerguntaEResposta";
import Botao from './Botao'

export default function Resposta(props) {
    function lidaComClique() {
        props.cliclou()
    }
    return (
        <>
            <PerguntaEResposta onClick={lidaComClique}>
                {props.resposta}
                <Pai>
                    <Botao riscaPalavra={props.riscaPalavra} contagemQuizz={props.contagemQuizz} />
                </Pai>
            </PerguntaEResposta>

        </>
    )
}