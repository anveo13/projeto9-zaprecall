import styled from "styled-components"
const PerguntaEResposta = styled.div`
    @media (max-width: 614px) {
    width: 80%;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    & > img {
    width: 30px;
    height: 20px;
    margin-left: auto;
        
    }
}
  `
  export default PerguntaEResposta