import styled from 'styled-components';

export const Home = styled.div`
  background-color: #ffffff;
  border: 8px solid #1A2D7A;
  padding: 60px;
  text-align: center;
  max-width: 100%;

  .Logo {
    font-size: 2rem;
    color: #0a0a78;
    
    img {
      max-width: 251px;
      max-height: 279px;
    }
  }

  .Titulo {
    font-size: 114px;
    color: #0a0a78;
    margin-bottom: 20px;
    padding-bottom: 20px;
    margin: 0 30rem;
  }

  .Subtitulo, .Subtitulo1 {
    background-color: #1465BB;
    font-size: 45px;
    color: #81C9FA;
    margin-top: 80px;
    margin: 7rem 42rem;
    border-radius: 10px;
  }

  .Descricao, .Descricao1 {
    font-size: 30px;
    color: #1A2D7A;
    margin-top: 20px;
    margin: 0 30rem;
  }

  .SaibaMais {
    margin: 70px 0;
    font-size: 114px;
    color: #1A2D7A;
  }

  .link1, .link2, .link3, .link4 {
    background-color: #1465BB;
    font-size: 3rem;
    color: #ffffff;
    margin-bottom: 10px;
    border-radius: 10px;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    margin: 0 220px;
    min-width: 300px;

    &:hover {
      background-color: #005bb5;
    }
  }

  .coluna {
    display: flex;
    flex-direction: column;
  }

  .espaco {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 70px;
  }

  @media (max-width: 425px) {
    background-color: #ffffff;
    border: 10px solid #1A2D7A;
    max-width: 100%;
    padding: 0px;

    .Logo {
      margin-top: 3rem;
      
      img {
        max-width: 200px;
        max-height: 200px;
      }
    }

    .Titulo {
      font-size: 50px;
      text-align: center;
      margin: 20px;
    }

    .Subtitulo, .Subtitulo1 {
      font-size: 2rem;
      margin: 10rem 1rem 0;
      border-radius: 12px;
      padding: 8px;
    }

    .Descricao, .Descricao1 {
      font-size: 1.5rem;
      margin: 20px 1.5rem;
    }

    .SaibaMais, .link1, .link2, .link3, .link4 {
      display: none;
    }
  }
`;
