import Logo from "../assets/logo-escura.png"

import eletrogate from "../assets/eletrogate.png"
import robocore from "../assets/robocore.png"

import seta_dir from "../assets/seta-dir.png"
import seta_esq from "../assets/seta-esq.png"

import { Home } from "../styles/Materiais.styles"


export function Mate() {
  return (
    <Home>
      <header class="header">
        <div className="inicio">
          <img src={Logo} alt="Logo" />
          <a class="bt1"href="/">Produto</a>
          <a class="bt2"href="/sobre">Sobre Nós</a>
          <a class="bt3"href="/refs">Referências</a>
          <a class="bt4"href="/guia">Guia</a>
        </div>
      </header>
      <main>
        <h1>Materiais Utilizados</h1>
        <div class="imgs">
          <section>
            <a><img class="setaE"src={ seta_esq } alt="Seta esquerda" /></a>
          </section>
          <section>
            <p>Eletrogate</p>
            <img class="espaco" src={ eletrogate } alt="eletrogate" />
          </section>
          <section>
            <p>RoboCore</p>
            <img class="espaco1"src={ robocore } alt="robocore" />
          </section>
          <section>
            <a><img class="setaD"src={ seta_dir } alt="Seta direita" /></a>
          </section>
        </div>
      </main>
    </Home>
  );
}