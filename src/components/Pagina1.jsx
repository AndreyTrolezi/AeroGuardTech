import Logo from "../assets/logo.png"

function Pagina1() {
  return (
    <div>
      <div>
        <div class="absolute top-0 left-0 w-full h-4 bg-Borda "></div>
        <div class="absolute top-0 left-0 w-4 h-full bg-Borda"></div>
        <div class="absolute top-0 right-0 w-4 h-full bg-Borda"></div>
        <div class="absolute bottom-0 left-0 w-16 h-4 bg-Borda max-w-4xl w-full"></div>
        <div class="absolute bottom-0 right-0 w-16 h-4 bg-Borda max-w-4xl w-full"></div>
      </div>

        <section>
          
          <div>
            <img src={Logo} alt="logo do site" class="flex mx-auto scale-50 mt-0"/>
            <h1 class="text-3xl text-Titulo flex items-center justify-center mt-2">AeroGuard Tech</h1>
          </div>

          <div>
            <h2 class="flex items-center justify-center text-3xl text-CorSubTitulo bg-SubTitulo ml-96 mr-96">
              Sobre o Produto
            </h2>
            <p class="flex items-center justify-center text-Letras text-center ml-96 mr-96 mt-5">
              Apresentamos nossa solução inovadora para problemas respiratórios, projetada para transformar a maneira como você cuida da sua saúde. Junte-se a nós nesta jornada de avanço tecnológico em prol de uma melhor qualidade de vida.
            </p>
          </div>

          <div> 
            <h2 class="flex items-center justify-center text-3xl text-CorSubTitulo bg-SubTitulo ml-96 mr-96">
              Publico Alvo
            </h2>
            <p class="flex items-center justify-center text-Letras text-center ml-96 mr-96">
              Nosso produto é feito especificamente para pessoas com problemas respiratórios, sejam elas crianças, adultos ou idosos. fizemos pensando em dar uma melhor qualidade de vida para todos.
            </p>
          </div>
          <div class="flex items-center justify-center px-5">
            <button>Sobre nós</button>

            <button>Materiais</button>

            <button>Referencias</button>
            
            <button>Guia</button>
          </div>
        </section>
    </div>
  )
}

export default Pagina1