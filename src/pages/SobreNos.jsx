import Logo from "../assets/logo.png"

import edu from "../assets/eduzitler.png"
import bob from "../assets/bobzao.png"
import trolezi from "../assets/tornolezi.png"
import steve from "../assets/stevenark.png"

import { Home } from "../styles/Pagina1.styles"

export function SobreNos() {
  return (
    <Home>
      <header class>
        <div className="inicio">
          <img src={Logo} alt="Logo" />
          <a href="/">Produto</a>
          <a href="/mate">Materiais</a>
          <a href="/refs">Referências</a>
          <a href="/guia">Guia</a>
        </div>
      </header>
      <main>
        <h1>Sobre Nós</h1>
        <section>
          <h3>Eduardo Chaves</h3>
          <img src={edu} alt="Eduardo Chaves" />
          <h2>Função</h2>
          <p>Desenvolvedor Web</p>
          <p>Desenvolvedor de Robótica</p>
        </section>
        <section>
          <h3>Gabriel Silva</h3>
          <img src={bob} alt="Gabriel Silva" />
          <h2>Função</h2>
          <p>Desenvolvedor Web</p>
          <p>Desenvolvedor de Games</p>
        </section>
        <section>
          <h3>Andrey Trolezi</h3>
          <img src={trolezi} alt="Andrey Trolezi" />
          <h2>Função</h2>
          <p>Desenvolvedor de Games</p>
          <p>Desenvolvedor de Robótica</p>
        </section>
        <section>
          <h3>Vinicius Alves</h3>
          <img src={steve} alt="Vinicius Alves" />
          <h2>Função</h2>
          <p>Desenvolvedor de Games</p>
          <p>Desenvolvedor de Robótica</p>
        </section>
      </main>
    </Home>
  );
}
