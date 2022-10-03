import styled from "styled-components";
export default function Botao(props) {
  return (
    <>
      <Vermelho onClick={() => {
        props.riscaPalavra ("vermelho");
        props.contagemQuizz();
      }
      }>
        Não lembrei
      </Vermelho>


      <Laranja onClick={() => {
        props.riscaPalavra ("laranja");
        props.contagemQuizz();
      }
      }>
        Quase não lembrei
      </Laranja>


      <Verde onClick={() => {
        props.riscaPalavra ("verde");
        props.contagemQuizz();
      }
      }>
        Zap!
      </Verde>
    </>
  )
}


const Vermelho = styled.button`
  @media (max-width: 614px) {
    width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #FF3030;
  border-radius: 5px;
  border: 1px solid #FF3030;
  padding:5px;
  }`;

const Laranja = styled.button`
@media (max-width: 614px) {
  width: 90px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
color: #FFFFFF;
background: #FF922E;
border-radius: 5px;
border: 1px solid #FF922E;
padding:5px;
}`;

const Verde = styled.button`
  @media (max-width: 614px) {
    width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: #2FBE34;;
  border-radius: 5px;
  border: 1px solid #2FBE34;;
  padding:5px;
  }`;