import Cartas from "./Cartas";


export default function Conteudo(props) {
    return (
        <>
            <Cartas contagemQuizz={props.contagemQuizz} />         
        </>
    )
}