import Logo from "../assets/logo-escura.png"

export function Refs() {
  return (
    <div>
      <header class="header">
        <div className="inicio">
          <img src={Logo} alt="Logo" />
          <a class="bt1"href="/">Produto</a>
          <a class="bt2"href="/sobre">Sobre Nós</a>
          <a class="bt3"href="/guia">Guia</a>
          <a class="bt4"href="/mate">Materiais</a>
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
    </div>
  )
}
