import Carta from "./Carta";
const array=[
    {
        pergunta: "Quem é o maior campeão da copa do mundo?",
        resposta: "Brasil, com 5 titulos."
    },
    {
        pergunta: " __ ficou conhecida como o terror dos goleiros em 2010",
        resposta: "Jabulani"
    },
    {
        pergunta: "__ é o jogador mais jovem a ganhar a copa do mundo",
        resposta: "Pelé"
    },
    {
        pergunta: "Aonde foi disputada a primeira copa do mundo?",
        resposta: "Uruguai"
    },
    {
        pergunta: " Onde foi a primeira copa fora do eixo America-Europa?",
        resposta: "Japão-Coreia, em 2002"
    }
]
export default function Cartas(props) {
    return (
        <>   
            {array.map((item, indice) => <Carta contagemQuizz={props.contagemQuizz} pergunta={item.pergunta} numero={indice} key={indice} resposta={item.resposta} /> )}
        </>
    )
}