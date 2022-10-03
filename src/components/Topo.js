import Logo from '../estilos/Logo'
import zap from '../assets/img/logo.png'
export default function Topo() {
    return (
        <Logo>
            <img src={zap} alt="zap"/>
            <h1>
              ZapRecall
            </h1>
        </Logo>
    )
}