import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  max-width: 100%;
  
    
  .header {
    background-color: #1A2D7A;
    padding: 9,5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #1A2D7A;

    .inicio {
      display: flex;
      align-items: center;
      gap: 20px;

      img {
        font-size: 2rem;
        color: #0a0a78;
        max-width: 120px;
        max-height: 120px;
    }

      .bt1, .bt2, .bt3, .bt4 {
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
      }
    }
  }

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
`
