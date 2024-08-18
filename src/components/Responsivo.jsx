import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Botao } from "./Botao";

// Componente responsável por alternar entre o Header e o Botão baseado no tamanho da tela
export function Responsivo() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 425);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 425);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Não exibe o Header ou Botao na Pagina1
  if (location.pathname === "/") {
    return null;
  }

  return <>{isDesktop ? <Header /> : <Botao />}</>;
}
