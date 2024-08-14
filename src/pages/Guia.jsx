import Logo from "../assets/logo-escura.png"

import cerebro from "../assets/eng-cerebro.png"
import olho from "../assets/olho.png"
import eng from "../assets/eng-config.png"

export function Guia() {
  return (
    <div>
      <header class="header">
        <div className="inicio">
          <img src={Logo} alt="Logo" />
          <a class="bt1"href="/">Produto</a>
          <a class="bt2"href="/sobre">Sobre Nós</a>
          <a class="bt3"href="/mate">Materiais</a>
          <a class="bt4"href="/refs">Referências</a>
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
      </div>
    </div>
  )
}
