import Logo from "../assets/logo-escura.png";
import { Cabeca, NavLink } from "../styles/Header.styles";

export function Header() {
  return (
    <Cabeca>
      <img src={Logo} alt="Logo" />
      <div className="inicio">
        
        <NavLink href="/">Produto</NavLink>
        <NavLink href="/sobre">Sobre Nós</NavLink>
        <NavLink href="/mate1">Materiais</NavLink>
        <NavLink href="/refs">Referências</NavLink>
        <NavLink href="/guia">Guia</NavLink>
      </div>
    </Cabeca>
  );
}
