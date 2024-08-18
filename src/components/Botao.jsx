import { useState } from "react";
import { BotaoContainer, PopupContainer } from "../styles/Botao.styles.js";
import tresPontos from "../assets/tres-pontos.png";

export function Botao() {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const togglePopup = () => {
    setMostrarPopup(!mostrarPopup);
  };

  return (
    <>
      <BotaoContainer onClick={togglePopup}>
        <img src={tresPontos} alt="Menu" />
      </BotaoContainer>
      {mostrarPopup && (
        <PopupContainer>
          <a href="/sobre">Sobre Nós</a>
          <a href="/mate">Materiais</a>
          <a href="/refs">Referências</a>
          <a href="/guia">Guia</a>
        </PopupContainer>
      )}
    </>
  );
}
