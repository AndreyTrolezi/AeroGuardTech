import Logo from "../assets/logo-escura.png";
import { Cabeca } from "../styles/Header.styles"

export function Header() {
  return (
    <Cabeca>
      <div className="inicio">
        <img src={Logo} alt="Logo" />
        <a className="bt1" href="/">Produto</a>
        <a className="bt2" href="/sobre">Sobre Nós</a>
        <a className="bt3" href="/mate">Materiais</a>
        <a className="bt4" href="/refs">Referências</a>
        <a className="bt5"href="/guia">Guia</a>
      </div>  
    </Cabeca>  
  )
}
