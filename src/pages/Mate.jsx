import Logo from "../assets/logo-escura.png"

import eletrogate from "../assets/eletrogate.png"
import robocore from "../assets/robocore.png"

import seta_dir from "../assets/seta-dir.png"
import seta_esq from "../assets/seta-esq.png"

import { Home } from "../styles/Materiais.styles"

import { Responsivo } from "../components/Responsivo"


export function Mate() {
  return (
    <Home>
      <Responsivo/>
      <main>
        <h1>Materiais Utilizados</h1>
        <div class="imgs">
      
          <section>
            <button><img class="setaE"src={ seta_esq } alt="Seta esquerda" /></button>
          </section>

          <section>
            <p>Eletrogate</p>
            <img class="espaco" src={ eletrogate } alt="eletrogate" />
          </section>

          <section>
            <p class="RoboCore">RoboCore</p>
            <img class="espaco1"src={ robocore } alt="robocore" />
          </section>

          <section>
            <button><img class="setaD"src={ seta_dir } alt="Seta direita" /></button>
          </section>
          
        </div>
      </main>
    </Home>
  );
}