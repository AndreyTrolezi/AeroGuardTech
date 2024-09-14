import Logo from "../assets/logo-escura.png"

import edu from "../assets/eduzitler.png"
import bob from "../assets/bobzao.png"
import trolezi from "../assets/tornolezi.png"
import steve from "../assets/stevenark.png"

import { Home } from "../styles/SobreNos.styles"
import { Responsivo } from "../components/Responsivo"

export function SobreNos() {
  return (
    <Home>
      <Responsivo/>
      <main>
        <h1 class="Titulo">Sobre Nós</h1>
        <section class="imgs">

          <section class="espaco1">
            <h3>Eduardo Chaves</h3>
            <section class="tudo">
              <div class="linha"></div>
              <div class="fotos"></div>
                <div class="foto1">
                  <img src={edu} alt="Eduardo Chaves" />
                </div>
            </section>
            <div class="textos">
              <h2>Função</h2>
              <p>Desenvolvedor de Games</p>
              <p>Desenvolvedor de Robótica</p>
            </div>
          </section>

          <section class="espaco2">
            <h3>Gabriel Silva</h3>
            <section class="tudo">
                <div class="foto2">
                  <img src={bob} alt="Gabriel Silva" />
                </div>
            </section>
            <div class="textos">
              <h2>Função</h2>
              <p>Desenvolvedor de Games</p>
              <p>Desenvolvedor de Robótica</p>
            </div>
          </section>

          <section class="espaco3">
            <h3>Andrey Trolezi</h3>
            <section class="tudo">
              <div class="linha"></div>
              <div class="fotos"></div>
                <div class="foto">
                  <img class="foto3"src={trolezi} alt="Andrey Trolezi" />
                </div>
            </section>
            <div class="textos">
              <h2>Função</h2>
              <p>Desenvolvedor de Games</p>
              <p>Desenvolvedor de Robótica</p>
            </div>
          </section>

          <section class="espaco4">
            <h3>Vinicius Alves</h3>
            <section class="tudo">
              <div class="linha"></div>
              <div class="fotos"></div>
                <div class="foto4">
                  <img src={steve} alt="Vinícius Alves" />
                </div>
            </section>
            <div class="textos">
              <h2>Função</h2>
              <p>Desenvolvedor de Games</p>
              <p>Desenvolvedor de Robótica</p>
            </div>
          </section>
          
        </section>
      </main>
    </Home>
  );
}
