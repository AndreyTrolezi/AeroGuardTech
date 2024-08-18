import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  padding-bottom: 19px;
  max-width: 100%;
  
 .titulo {
    text-align: center;
    color: #119DFC;
    font-size: 98px;
    margin: 1.5rem;
    margin-bottom: 40px;
  }
 
  .Subtitulo{
    text-align: center;
    color: #1A2D7A;
    font-size: 40px;
  }

 .Preco{
    text-align: center;
    color: #119DFC;
    font-size: 30px;
    margin-bottom: 30px;
 }

  .imgs{
    display: flex;
    justify-content: center;
    aling-itens-center
  }

  .setaD {
    margin-left: 8rem;
    margin-top: 10rem;
  }

  .setaE {
    margin-top: 10rem;
    margin-right: 8rem;
  }

  .espaco1 {
    margin-left: 10rem;
  }

@media (max-width: 425px) {

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  max-width: 100%;
  padding-bottom: 50rem;
  overflow-x: hidden;

  main {
    text-align: center;
    padding: 40px 20px;

    h1 {
      color: #119DFC;
      font-size: 60px;
      margin-bottom: 40px;
    }
  }

  .setaD {
    margin-left: 6rem;
    margin-top: 5rem;
  }

  .setaE {
    margin-top: 5rem;
  }

  img {
    max-width: 100px;
  }

`
