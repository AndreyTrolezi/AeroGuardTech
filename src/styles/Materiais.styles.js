import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  max-width: 100%;
  padding-bottom: 20rem;

  main {
    text-align: center;
    padding: 40px 20px;

    h1 {
      color: #119DFC;
      font-size: 60px;
      margin-bottom: 40px;
    }
  }

  .imgs {
    display: flex;
    justify-content: center;
  }

  .espaco {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 9.5rem;
  }

  .setaD {
    margin-left: 6rem;
    margin-top: 5rem;
  }

  .setaE {
    margin-top: 5rem;
  }

  .espaco1 {
    margin-left: 10rem;
  }

  p {
    margin-left: 10rem;
    font-size: 25px;
    color: #1308AA;
    margin-bottom: 1rem;
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

  

  .espaco {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 9.5rem;
  }

  .setaD {
    margin-left: 6rem;
    margin-top: 5rem;
  }

  .setaE {
    margin-top: 5rem;
  }

  .espaco1 {
    margin-left: 10rem;
  }

  p {
    margin-left: 10rem;
    font-size: 25px;
    color: #1308AA;
    margin-top: 15rem;
    text-align: center;
  }

  img {
    max-width: 100px;
  }

  .espaco1 {
    margin-left: 90px;
  }

  .espaco {
    margin-right: 2rem;
  }

  .RoboCore {
    margin-left: 65px;
  }
}

`
