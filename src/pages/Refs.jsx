import Logo from "../assets/logo-escura.png"

import { Home } from "../styles/Refs.styles.js"

export function Refs() {
  return (
    <Home>
      <header className="header">
        <div className="inicio">
          <img src={Logo} alt="Logo" />
          <a className="bt1" href="/">Produto</a>
          <a className="bt2" href="/sobre">Sobre Nós</a>
          <a className="bt3" href="/guia">Guia</a>
          <a className="bt4" href="/mate">Materiais</a>
        </div>
      </header>
      <main>
        <h1 className="titulo">Referências Bibliográficas</h1>

        <section>
          <section className="referencia">
              <div className="numero">1</div>
              <div className="texto">Análise da eficácia de medida caseira e umidificador na melhora da umidade do ar.</div>
          </section>

          <section className="referencia">
              <div className="numero">2</div>
              <div className="texto">Utilização de prototipagem arduino para controlar a umidade em ambientes climatizados.</div>
          </section>

          <section className="referencia">
              <div className="numero">3</div>
              <div className="texto">Associação entre poluição do ar e fenótipos da asma em Salvador, Brasil, uma cidade com níveis de poluentes dentro dos limites recomendáveis.</div>
          </section>

          <section className="referencia">
              <div className="numero">4</div>
              <div className="texto">Poluição ambiental como fator de risco para o aumento de asma brônquica?</div>
          </section>
        </section>

      </main>
    </Home>
  )
}
