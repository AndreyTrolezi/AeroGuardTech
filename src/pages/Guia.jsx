import cerebro from "../assets/eng-cerebro.png";
import olho from "../assets/olho.png";
import eng from "../assets/eng-config.png";
import { Home } from "../styles/Guia.styles";
import { Responsivo } from "../components/Responsivo";

export function Guia() {
  return (
    <Home>
      <Responsivo/>
      <div className="container">
        <h1>Guia de Utilização</h1>
        <div className="cards">
          <div className="card-container">
            <div className="card">
              <div className="card-front">
                <img src={cerebro} alt="Funcionalidade" />
                <h2>Funcionalidade</h2>
              </div>
              <div className="card-back">
                <h2>Funcionalidade</h2>
                <p>Nosso produto oferece funcionalidades avançadas para melhorar sua experiência.</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-front">
                <img src={olho} alt="Controle Intuitivo" />
                <h2>Controle Intuitivo</h2>
              </div>
              <div className="card-back">
                <h2>Controle Intuitivo</h2>
                <p>Controle com interface fácil e intuitiva para facilitar o uso.</p>
              </div>
            </div>
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-front">
                <img src={eng} alt="Configuração" />
                <h2>Configuração</h2>
              </div>
              <div className="card-back">
                <h2>Configuração</h2>
                <p>Ajuste as configurações de acordo com suas preferências.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}
