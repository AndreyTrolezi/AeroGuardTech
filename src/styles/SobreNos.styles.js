import styled from 'styled-components';

export const Home = styled.div`
  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  padding-bottom: 450px;
  flex-direction: row;

  .Titulo {
    text-align: center;
    color: #119DFC;
    font-size: 98px;
    margin: 1.5rem;
    margin-bottom: 40px;
  }

  section {
    margin-bottom: 40px;

    h3 {
      color: #1308aa;
      font-size: 26px;
      padding-bottom: 18px;
      margin-bottom: 50px;
    }

    h2 {
      color: #119dfc;
      font-size: 36px;
      margin-bottom: 5px;
    }

    p {
      font-size: 22px;
      margin: 5px 0;
      color: #1A2D7A;
    }
  }

  .imgs {
    display: flex;
    justify-content: center;
    margin-top: 250px;
    height: 4px;
    background: #1A2D7A;
  }

  .espaco1, .espaco2, .espaco3, .espaco4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }

  .tudo {
    height: 100px;
  }

  .foto1 {
    margin-top: -170px; 
    margin-right: 100px;
  }
  
  .foto2 {
    margin-top: -170px; 
    margin-right: 100px;
  }

  .foto3 {
    margin-top: -170px; 
    margin-right: 100px;
  }

  .foto4 {
    margin-top: -170px; 

  }

  .textos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 90px;
  }

  .textos1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 425px) {
    .Titulo {
      font-size: 48px; 
      margin: 1rem;
      margin-bottom: 20px;
    }

    section h3 {
      font-size: 18px; 
    }

    section img {
      width: 150px; 
      height: 150px;
    }

    section h2 {
      font-size: 24px; 
    }

    section p {
      font-size: 16px; 
    }

    .imgs {
      display: flex;
      justify-content: column;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }

    .espaco1, .espaco2, .espaco3, .espaco4 {
      margin: 50px ;
    }

    .tudo {
      height: 100px;
    }
  }
`
