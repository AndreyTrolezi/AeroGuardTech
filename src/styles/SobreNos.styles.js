import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  padding-bottom: 57px;
  flex-direction: row;

    .Titulo{
      text-align: center;
      color: #119DFC;
      font-size: 98px;
      margin: 1.5rem;
      margin-bottom: 40px
    }


    section {
      margin-bottom: 40px;

      h3 {
        color: #1308aa;
        font-size: 26px;
        margin-bottom: 5px;
      }

      img {
        width: 218px;
        height: 218px;
        object-fit: cover;
        margin-bottom: 15px;
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