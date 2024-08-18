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
      max-width: 200px;
      max-height: 200px;
    }

    .tresPontos {
      display: none;
    }
  }

  .Titulo {
    font-size: 3rem;
    color: #0a0a78;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .Subtitulo {
    background-color: #1465BB;
    font-size: 2rem;
    color: #81C9FA;
    margin-top: 80px;
    margin-left: 44.5rem;
    margin-right: 44.5rem;
    border-radius: 5px;
  }

  .Subtitulo1 {
    background-color: #1465BB;
    font-size: 2rem;
    color: #81C9FA;
    margin-top: 7rem;
    margin-left: 44rem;
    margin-right: 44rem;
    border-radius: 5px;
  }

  .Descricao, .Descricao1 {
    font-size: 1.2rem;
    color: #000;
    margin-top: 20px;
    margin-left: 30rem;
    margin-right: 30rem;
  }

  .SaibaMais {
    margin-top: 70px;
    margin-bottom: 70px;
    font-size: 3rem;
    color: #1A2D7A;
  }

  .link1, .link2, .link3, .link4 {
    background-color: #1465BB;
    font-size: 2rem;
    color: #ffffff;
    margin-bottom: 10px;
    border-radius: 5px;
    padding-left: 5px;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    margin: 0 100px;
    min-width: 200px; 

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
  border: 8px solid #1A2D7A;
  padding: 50px;
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
  
  .Logo {
    font-size: 2rem;
    color: #0a0a78;
    margin-top: 5rem;
  
    img {
      max-width: 200px;
      max-height: 200px;
    }
  }

  .Titulo {
    font-size: 3rem;
    color: #0a0a78;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .Subtitulo {
    background-color: #1465BB;
    font-size: 2rem;
    color: #81C9FA;
    margin-top: 80px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    border-radius: 12px;
    padding: 6px;
  }

  .Subtitulo1 {
    background-color: #1465BB;
    font-size: 1.9rem;
    color: #81C9FA;
    margin-top: 10rem;
    margin-left: 0;
    margin-right: 0;
    border-radius: 12px;
    padding: 6px;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .Descricao, .Descricao1 {
    font-size: 1.5rem;
    color: #1A2D7A;
    margin-top: 20px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .SaibaMais {
    margin-top: 70px;
    margin-bottom: 50px;
    font-size: 3rem;
    color: #1A2D7A;
    display: none;
  }

  .link1, .link2, .link3, .link4 {
    background-color: #1465BB;
    font-size: 1.7rem;
    color: #ffffff;
    margin-bottom: 10px;
    border-radius: 5px;
    text-decoration: none;
    padding: 20px;
    text-align: center;
    margin: 0 100px;
    min-width: 150px; 
    display: none;

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
}
`