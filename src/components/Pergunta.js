import PerguntaEResposta from "../estilos/PerguntaEResposta";
import MostraResposta from "../assets/img/seta_virar.png"

export default function Pergunta(props){
    function lidaComClique(){
        props.cliclou()
    }
    return (
        <PerguntaEResposta onClick={lidaComClique}>
            {props.pergunta}
            <img src={MostraResposta} alt="MostraResposta"/>
        </PerguntaEResposta>
    )
}