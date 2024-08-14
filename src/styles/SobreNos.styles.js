import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  max-width: 100%;
  flex-direction: row;

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
  }

  .espaco {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 90px;
  }
`