import styled from "styled-components"
const ContainerPerguntaFechada = styled.div`
    @media (max-width: 614px) {
        width: 80%;
        height: 35px;
        background-color: #FFFFFF;
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        text-decoration: ${(props) => props.cor ? "line-through " : "normal"};
        font-size: 16px;
        line-height: 19px;
        color: ${(props) =>
        props.cor === "vermelho" ? "#FF3030" :
            props.cor === "laranja" ? "#FF922E" :
                props.cor === "verde" ? "#2FBE34" : "#333333"}
        
    }
}
`
export default ContainerPerguntaFechada