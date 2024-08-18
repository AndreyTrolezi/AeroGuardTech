import styled from "styled-components";

// Estilização do botão de menu
export const BotaoContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    margin-left: 17.7rem;//aq bob é onde manda a imagem dos tres pontos para o lado, pro popup sumir tem q clicar nele dnv, oq eu achei zoado mas foi o melhor q eu pude fazer
    width: 20px;
    height: 40px;
  }
`;

// Estilização do pop-up do menu
export const PopupContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 4.5rem;
  background-color: #ffffff;
  border: 2px solid #1a2d7a;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;

  a {
    color: #1465bb;
    text-decoration: none;
    margin: 5px 0;
    font-size: 3rem;
    

    &:hover {
      color: #005bb5;
    }
  }
`;
