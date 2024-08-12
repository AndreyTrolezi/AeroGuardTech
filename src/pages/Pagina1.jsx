import Logo from "../assets/logo.png"

export function Pagina1() {
  return (

    <div>
      <header>
        <div >
         <img src={Logo} alt="" />
        </div>
        <h1>AeroGuard Tech</h1>
      </header>
      <main>
        <section>
          <h2 >Sobre o Produto</h2>
          <p>Apresentamos nossa solução inovadora para problemas respiratórios, projetada para transformar a maneira como você cuida da sua saúde. Junte-se a nós nesta jornada de avanço tecnológico em prol de uma melhor qualidade de vida.</p>
        </section>
        <section>
          <h2 >Público alvo</h2>
          <p >Nosso produto é feito especificamente para pessoas com problemas respiratórios, sejam elas crianças, adultos ou idosos. Fizemos pensando em dar uma melhor qualidade de vida para todos.</p>
        </section>
        <div>
          <a href="/teste" >Sobre nós</a> {/*precisa do msm nome q ta no path pro bglh aq funcionar, como la ta /teste, tem q colocar /teste aq pq senao da erro*/}
          <a href="" >Materiais</a>
          <a href="" >Referências</a>
          <a href="" >Guia</a>
        </div>
      </main>
    </div>
  );
}