import styled from 'styled-components';

export const Home = styled.div`

  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  padding-bottom: 44px;
  max-width: 100%;

  .titulo {
    text-align: center;
    color: #119DFC;
    font-size: 98px;
    margin: 3rem;
    margin-bottom: 40px;
  }

  .referencia {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 22px;
    color: #1A2D7A;
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
    margin-right: 3rem;
    margin-left: 3rem;
    margin: 3rem;
    padding: 2rem;
    font-size: 2.5rem;
  }

  .texto {
    flex-grow: 1;
    font-size: 28px;
  }

  section {
    margin-bottom: 40px;
  }
`
