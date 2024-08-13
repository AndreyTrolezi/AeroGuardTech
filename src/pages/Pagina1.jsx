import logo from "../assets/logo.png"
import { Home } from "../styles/pagina1.styles"//EDUZÃO TA PRA GAME

export function Pagina1() {
  return (
    <Home>
      <header>
        <div class="Logo">
          <img src={logo} alt="" />
        </div>
        <h1 class="Title">AeroGuard Tech</h1>
      </header>
      <main>
        <section>
          <h2 class="Subtitle">Sobre o Produto</h2>
          <p>Apresentamos nossa solução inovadora para problemas respiratórios, projetada para transformar a maneira como você cuida da sua saúde. Junte-se a nós nesta jornada de avanço tecnológico em prol de uma melhor qualidade de vida.</p>
        </section>
        <section>
          <h2 class="Subtitle">Público alvo</h2>
          <p >Nosso produto é feito especificamente para pessoas com problemas respiratórios, sejam elas crianças, adultos ou idosos. Fizemos pensando em dar uma melhor qualidade de vida para todos.</p>
        </section>
        <div>
          <a href="/sobre" >Sobre nós</a> {/*precisa do msm nome q ta no path pro bglh aq funcionar, como la ta /teste, tem q colocar /teste aq pq senao da erro*/}
          <a href="/mate" >Materiais</a>
          <a href="/refs" >Referências</a>
          <a href="/guia" >Guia</a>
        </div>
      </main>
    </Home>
  );
}