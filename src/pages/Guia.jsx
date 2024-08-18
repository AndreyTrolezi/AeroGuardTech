import cerebro from "../assets/eng-cerebro.png";
import olho from "../assets/olho.png";
import eng from "../assets/eng-config.png";
import { Home } from "../styles/Guia.styles";
import { Responsivo } from "../components/Responsivo";

export function Guia() {
  return (
    <Home>
      <Responsivo/>
        <main>
          <h1 className="titulo">Guia de Utilização</h1>
          <div className="sections">

            <section>
              <h3 className="funcao">Funcionalidade</h3>
              <p>O nosso produto faz a verificação de temperatura do ambiente e umidade do ar, e após isso, ele dá um alerta ao usuário no aplicativo.</p>
              <div className="numero1">1</div>
              <img class="n1" src={cerebro} alt="Funcionalidade" />
            </section>

            <section class="controle">
              <div className="numero2">2</div>
              <img class="n2" src={olho} alt="Controle Intuitivo" />
              <h3>Controle Intuitivo</h3>
              <p>Receba alertas em tempo real no seu aplicativo quando as condições de temperatura ou umidade ultrapassarem os limites definidos. Visualize os dados detalhados das medições recentes e históricas. Ajuste facilmente os limites de alerta e as configurações do dispositivo através do aplicativo.</p>
            </section>

            <section>
              <h3>Configuração</h3>
              <p>Acesse as configurações no aplicativo para definir os limites desejados para temperatura e umidade. Estabeleça os valores mínimos e máximos aceitáveis para ambos os parâmetros. Isso permitirá que o dispositivo identifique condições fora dos limites e envie alertas correspondentes.</p>
              <div className="numero3">3</div>
              <img class="n3" src={eng} alt="Configuração" />
            </section>

          </div>
        </main>
    </Home>
  );
}