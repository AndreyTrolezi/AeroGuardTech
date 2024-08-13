import Logo from "../assets/logo.png"

import dir from "../assets/lado-direito.png"
import esq from "../assets/lado-esquerdo.png"
import bola from "../assets/bola-espiral.png"

import eletrogate from "../assets/eletrogate.png"
import robocore from "../assets/robocore.png"

import seta_dir from "../assets/seta-dir.png"
import seta_esq from "../assets/seta-esq.png"

export function Mate() {
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="" />
          <a href="/" >Produto</a> {/*precisa do msm nome q ta no path pro bglh aq funcionar, como la ta /teste, tem q colocar /teste aq pq senao da erro*/}
          <a href="/sobre" >Sobre Nós</a>
          <a href="/refs" >Referências</a>
          <a href="/guia" >Guia</a>
        </div>
      </header>
      <main>
        <section>
          <p>Eletrogate</p>
          <img src={ eletrogate } alt="eletrogate" />
        </section>
        <section>
          <p>RoboCore</p>
          <img src={ robocore } alt="robocore" />
        </section>
        <section>
          <img src={ dir } alt="direita" />
          <img src={ seta_dir } alt="Seta direita" />
          <img src={ bola } alt="Bola" />
          <img src={ bola } alt="Bola" />
        </section>
        <section>
          <img src={ esq } alt="direita" />
          <img src={ seta_esq } alt="Seta esquerda" />
          <img src={ bola } alt="Bola" />
          <img src={ bola } alt="Bola" />
        </section>
      </main>
    </div>
  );
}