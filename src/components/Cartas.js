import Carta from "./Carta";
const array=[
    {
        pergunta: "O que é JSX?",
        resposta: "Uma extensão de linguagem do JavaScript"
    },
    {
        pergunta: "O React é __",
        resposta: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        pergunta: "Componentes devem iniciar com __",
        resposta: "letra maiúscula"
    },
    {
        pergunta: "Podemos colocar __ dentro do JSX ",
        resposta: "expressões"
    },
    {
        pergunta: "O ReactDOM nos ajuda __ ",
        resposta: "interagindo com a DOM para colocar componentes React na mesma"
    }
]
export default function Cartas(props) {
    return (
        <>   
            {array.map((item, indice) => <Carta contagemQuizz={props.contagemQuizz} pergunta={item.pergunta} numero={indice} key={indice} resposta={item.resposta} /> )}
        </>
    )
}