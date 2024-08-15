import styled from 'styled-components';

export const Home = styled.div`
  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  max-width: 100%;
  
  .header {
    background-color: #1A2D7A;
    padding: 9.5px;
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

  .titulo {
    text-align: center;
    color: #119DFC;
    font-size: 60px;
    margin-bottom: 40px;
  }

  .referencia {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 28px;
  }

  .numero {
    background-color: #1465BB;
    color: #ffffff;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    font-weight: bold;
    margin-right: 20px;
    margin-left: 3rem;
  }

  .texto {
    flex-grow: 1;
    font-size: 28px;
  }

  section {
    margin-bottom: 40px;
  }
`
