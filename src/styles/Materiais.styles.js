import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  padding-bottom: 170px;
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

  @media (max-width: 425px) {

    background-color: #ffffff;
    border: 10px solid #1A2D7A;
    max-width: 100%;
    padding-bottom: 14.6rem;
    overflow-x: hidden;

    main {
      margin-top: 5rem;
    }

    .titulo {
      color: #119DFC;
      font-size: 70px;
      padding-botton: 15rem;
    }

    .imgs {
      display: flex;
      justify-content: center;
      margin-bottom: 0px;
    }

    .setaD {
      margin-left: 0px;
      margin-top: 25rem;
      margin-right: 21rem;

      width: 10rem;
    }

    .setaE {
      margin-left: 21rem;
      margin-top: 25rem;
      margin-right: 0px;

      width: 10rem;
    }

    .arduino {
      max-width: 200px;
      margin-top: 15px;
    }
  }
`
