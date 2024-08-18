import Logo from "../assets/logo-escura.png"

import seta_dir from "../assets/seta-dir.png"
import seta_esq from "../assets/seta-esq.png"

import Arduino from "../assets/arduino.png"


import { Home } from "../styles/Materiais.styles"

import { Responsivo } from "../components/Responsivo"


export function Mate() {
  return (
    <Home>
      <Responsivo/>
      <main>
        <h1 class= "titulo">Materiais Utilizados</h1>
        <div>
          <h2 class= "Subtitulo">Arduino UNO</h2>
          <p class= "Preco">R$ 90,16 </p>
        </div>
        
        <div class="imgs">
      
          <section>
            <a><img class="setaE"src={ seta_esq } alt="Seta esquerda" /></a>
          </section>

          <section>
            <img class= "arduino" src={Arduino} alt="" />
          </section>

          <section>
            <a><img class="setaD"src={ seta_dir } alt="Seta direita" /></a>
          </section>
          
        </div>
      </main>
    </Home>
  );
}