import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  padding-bottom: 11.2rem;
  flex-direction: row;

  main {
    text-align: center;
    padding: 40px 20px;

    h1 {
      color: #119dfc;
      font-size: 60px;
      margin-bottom: 40px;
    }

    section {
      margin-bottom: 40px;

      h3 {
        color: #1308aa;
        font-size: 20px;
        margin-bottom: 5px;
      }

      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin-bottom: 15px;
      }

      h2 {
        color: #119dfc;
        font-size: 20px;
        margin-bottom: 5px;
      }

      p {
        font-size: 16px;
        margin: 5px 0;
      }
    }
  }

  .imgs {
    display: flex;
    justify-content: center;
    margin-top: 100px;
  }

  .espaco1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 90px;
    color: #1A2D7A;
  }

  .espaco2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 150px;
    color: #1A2D7A;
  }

  .espaco3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 150px;
    margin-right: 40px;
    color: #1A2D7A;
  }

  .espaco4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 100px;
    margin-right: 85px;
    color: #1A2D7A;
  }
`