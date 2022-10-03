import ContainerPerguntaFechada from "../estilos/ContainerPerguntaFechada"
import Inicial from '../assets/img/seta_play.png'
import Errado from '../assets/img/icone_erro.png'
import Certo from '../assets/img/icone_certo.png'
import Quase from '../assets/img/icone_quase.png'
export default function PerguntaFechada(props){
    function lidaComClique(){
        props.cliclou()
    }
    return (
        <ContainerPerguntaFechada cor={props.cor} onClick={lidaComClique}>
            <p>Pergunta {props.numero + 1}</p>
            <img  src={
                props.cor === false ? Inicial :
                 props.cor === "vermelho" ? Errado :
                  props.cor === "laranja" ? Quase :
                   Certo } 
                   alt="AbrirPergunta"/>
        </ContainerPerguntaFechada>
    )
}