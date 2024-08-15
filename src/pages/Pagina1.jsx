import logo from "../assets/logo.png"
import tresPontos from "../assets/tres-pontos.png"

import { Home } from "../styles/pagina1.styles"

export function Pagina1() {
  return (
    <Home>
      <header>
        <div class="Logo">
          <img src={logo} alt="" />
          <img class="tresPontos"src={tresPontos} alt="" />
        </div>
        <h1 class="Titulo">AeroGuard Tech</h1>
      </header>
      <main>
        <section class="info">
          <h2 class="Subtitulo1">Sobre o Produto</h2>
          <p class="Descricao1">Apresentamos nossa solução inovadora para problemas respiratórios, projetada para transformar a maneira como você cuida da sua saúde. Junte-se a nós nesta jornada de avanço tecnológico em prol de uma melhor qualidade de vida.</p>
        </section>
        <section>
          <h2 class="Subtitulo">Público alvo</h2>
          <p class="Descricao">Nosso produto é feito especificamente para pessoas com problemas respiratórios, sejam elas crianças, adultos ou idosos. Fizemos pensando em dar uma melhor qualidade de vida para todos.</p>
        </section>
        <h2 class="SaibaMais">Saiba Mais</h2>{/*tem isso aq pra editar bob, ele é um h2 q fica encima das ancoras q levam pra outras paginas*/}
        <div class="coluna">
          <div class="espaco">
            <a class="link1" href="/sobre" >Sobre nós</a> {/*precisa do msm nome q ta no path pro bglh aq funcionar, como la ta /teste, tem q colocar /teste aq pq senao da erro*/}
            <a class="link2"href="/mate" >Materiais</a>
          </div>
          <div class="espaco">
            <a class="link3"href="/refs" >Referências</a>
            <a class="link4"href="/guia" >Guia</a>
          </div>
        </div>
      </main>
    </Home>
  );
}