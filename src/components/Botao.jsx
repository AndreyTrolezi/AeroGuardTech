import Trespontos from "../assets/tres-pontos.png"
import { useState } from "react"
import { Bot } from "../styles/Botao.styles"

export function Botao() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  };

  return (
    <Bot>
      <div className={active ? 'icon iconActive' : 'icon'}>
        <button className="hamburger hamburgerIcon"><img src={Trespontos} alt="" /></button>
      </div>
      <div className={active ? 'menuOpen' : 'menu menuClose'}>
        <div className="list">
          <ul className="listItems">
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/mate">Materias</a></li>
            <li><a href="/refs">Referências</a></li>
            <li><a href="/guia">Guia</a></li>
          </ul>
        </div>
      </div>
    </Bot>
  )
}
