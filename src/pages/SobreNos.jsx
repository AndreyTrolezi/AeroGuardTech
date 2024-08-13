import Logo from "../assets/logo.png"

import dir from "../assets/lado-direito.png"
import esq from "../assets/lado-esquerdo.png"
import bola from "../assets/bola-espiral.png"

import edu from "../assets/eduzitler.png"
import bob from "../assets/bobzao.png"
import trolezi from "../assets/tornolezi.png"
import steve from "../assets/stevenark.png"

export function SobreNos() {
  return (
    <div>
      <header>
        <div>
          <img src={Logo} alt="" />
          <a href="/" >Produto</a> {/*precisa do msm nome q ta no path pro bglh aq funcionar, como la ta /teste, tem q colocar /teste aq pq senao da erro*/}
          <a href="/mate" >Materiais</a>
          <a href="/refs" >Referências</a>
          <a href="/guia" >Guia</a>
        </div>
      </header>
      <main>
        <h1>Sobre Nós</h1>
        <section>
          <h3>Eduardo Chaves</h3>
          <img src={edu} alt="" />
          <h2>Função</h2>
          <p>Desenvolvedor Web</p>
          <p>Desenvolvedor de Robotica</p>
        </section>
        <section>
          <h3>Gabriel Silva</h3>
          <img src={bob} alt="" />
          <h2>Função</h2>
          <p>Desenvolvedor Web</p>
          <p>Desenvolvedor de Games</p>
        </section>
        
        <section>
          <h3>Andrey Trolezi</h3>
          <img src={trolezi} alt="" />
          <h2>Função</h2>
          <p>Desenvolvedor de Games</p>
          <p>Desenvolvedor de Robotica</p>
        </section>
        <section>
          <h3>Vinicius Alves</h3>
          <img src={steve} alt="" />
          <h2>Função</h2>
          <p>Desenvolvedor de Games</p>
          <p>Desenvolvedor de Robotica</p>
        </section>
        
        <div>
          <img src={dir} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
          <img src={bola} alt="" />
          <img src={esq} alt="" />
        </div>

      </main>
    </div>
  )
}
