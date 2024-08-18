import styled from 'styled-components';

// Estilização do cabeçalho
export const Cabeca = styled.header` 
  background-color: #1A2D7A;
  padding: 9.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 10px solid #1A2D7A;
  padding-left: 12rem;
  z-index: 1000;

  .inicio {
    display: flex;
    align-items: center;
    gap: 20px;

    img {
      max-width: 120px;
      max-height: 120px;
    }
  }

  @media (max-width: 425px) {
    display: none; 
  }
`;

// Estilização dos links de navegação
export const NavLink = styled.a`
  background-color: #1465bb;
  color: #ffff;
  text-decoration: none;
  font-size: 28px;
  margin-right: 4.5rem;
  padding: 15px;
  border-radius: 10px;
  padding-left: 40px;
  padding-right: 40px;

  &:hover {
    background-color: #005bb5;
  }
`;
