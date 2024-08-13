import Logo from "../assets/logo.png"

import dir from "../assets/lado-direito.png"
import esq from "../assets/lado-esquerdo.png"
import bola from "../assets/bola-espiral.png"

import cerebro from "../assets/eng-cerebro.png"
import olho from "../assets/olho.png"
import eng from "../assets/eng-config.png"

export function Guia() {
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="" />
          <a href="/" >Produto</a> {/*precisa do msm nome q ta no path pro bglh aq funcionar, como la ta /teste, tem q colocar /teste aq pq senao da erro*/}
          <a href="/mate" >Materiais</a>
          <a href="/sobre" >Sobre Nós</a>
          <a href="/refs" >Referências</a>
        </div>
      </header>
      <div>
        <h1>Guia de Utilização</h1>
        <section>
          <img src={cerebro} alt="" />
          <h3>Funcionalidade</h3>
          <p>O nosso produto faz a verificação de temperatura do ambiente e umidade do ar, e após isso, ele dá um alerta ao usuário no aplicativo.</p>
        </section>
        <section>
          <img src={olho} alt="" />
          <h3>Controle Intuitivo</h3>
          <p>Receba alertas em tempo real no seu aplicativo quando as condições de temperatura ou umidade ultrapassarem os limites definidos. Visualize os dados detalhados das medições recentes e históricas. Ajuste facilmente os limites de alerta e as configurações do dispositivo através do aplicativo.</p>
        </section>
        <section>
          <img src={eng} alt="" />
          <h3>Configuração</h3>
          <p>Acesse as configurações no aplicativo para definir os limites desejados para temperatura e umidade. Estabeleça os valores mínimos e máximos aceitáveis para ambos os parâmetros. Isso permitirá que o dispositivo identifique condições fora dos limites e envie alertas correspondentes.</p>
        </section>
        <div>
          <img src={dir} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
          <img src={esq} alt="" />
        </div>
      </div>
    </div>
  )
}
