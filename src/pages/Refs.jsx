import Logo from "../assets/logo.png"

import dir from "../assets/lado-direito.png"
import esq from "../assets/lado-esquerdo.png"
import bola from "../assets/bola-espiral.png"

export function Refs() {
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="" />
          <a href="/" >Produto</a> {/*precisa do msm nome q ta no path pro bglh aq funcionar, como la ta /teste, tem q colocar /teste aq pq senao da erro*/}
          <a href="/mate" >Materiais</a>
          <a href="/sobre" >Sobre Nós</a>
          <a href="/guia" >Guia</a>
        </div>
      </header>
      <div>
        <h1>Referências Bibliográficas</h1>
        <section>
            <h3>Análise da eficácia de medida caseira e umidificador na melhora da umidade do ar.</h3>
        </section>

        <section>
            <h3>Utilização de prototipagem arduino para controlar a umidade em ambientes climatizados.</h3>
        </section>

        <section>
            <h3>Associação entre poluição do ar e fenótipos da asma em salvador, brasil, uma cidade com níves de poluetes dentro dos limites recomendáveis.</h3>
        </section>

        <section>
            <h3>Poluição ambiental como factor de risco para o aumento de asma brônquica?</h3>
        </section>
      </div>
      <div>
        <img src={dir} alt="" />
        <img src={bola} alt="" />
        <img src={bola} alt="" />
        <img src={bola} alt="" />
        <img src={bola} alt="" />
        <img src={esq} alt="" />
      </div>
    </div>
  )
}
