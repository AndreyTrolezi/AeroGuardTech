import Logo from "../assets/logo-escura.png"

import edu from "../assets/eduzitler.png"
import bob from "../assets/bobzao.png"
import trolezi from "../assets/tornolezi.png"
import steve from "../assets/stevenark.png"

import { Home } from "../styles/SobreNos.styles"

export function SobreNos() {
  return (
    <Home>
      <header class="header">
        <div className="inicio">
          <img src={Logo} alt="Logo" />
          <a class="bt1"href="/">Produto</a>
          <a class="bt2"href="/mate">Materiais</a>
          <a class="bt3"href="/refs">Referências</a>
          <a class="bt4"href="/guia">Guia</a>
        </div>
      </header>
      <main>
        <h1>Sobre Nós</h1>
        <section class="imgs">
          <section class="espaco1">
            <h3>Eduardo Chaves</h3>
            <img src={edu} alt="Eduardo Chaves" />
            <h2>Função</h2>
            <p>Desenvolvedor Web</p>
            <p>Desenvolvedor de Robótica</p>
          </section>
          <section class="espaco2">
            <h3>Gabriel Silva</h3>
            <img src={bob} alt="Gabriel Silva" />
            <h2>Função</h2>
            <p>Desenvolvedor Web</p>
            <p>Desenvolvedor de Games</p>
          </section>
          <section class="espaco3">
            <h3>Andrey Trolezi</h3>
            <img src={trolezi} alt="Andrey Trolezi" />
            <h2>Função</h2>
            <p>Desenvolvedor de Games</p>
            <p>Desenvolvedor de Robótica</p>
          </section>
          <section class="espaco4">
            <h3>Vinicius Alves</h3>
            <img src={steve} alt="Vinicius Alves" />
            <h2>Função</h2>
            <p>Desenvolvedor de Games</p>
            <p>Desenvolvedor de Robótica</p>
          </section>
        </section>
      </main>
    </Home>
  );
}
