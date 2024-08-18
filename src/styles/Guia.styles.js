import styled from 'styled-components';

export const Home = styled.div`
  background-color: #ffffff;
  border: 10px solid #1A2D7A;
  max-width: 100%;
  padding-bottom: 160px;

  .Titulo {
    font-size: 98px;
    text-align: center;
    color: #119DFC;
    margin-bottom: 20px;
    padding-bottom: 20px;
    margin-left: 30rem;
    margin-right: 30rem;
    margin-top: 1.5rem;
  }

  .sections {
    display: flex;
    justify-content: space-around;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      max-width: 300px;

      h3 {
        color: #119DFC;
        font-size: 37px;
        margin: 20px 0;
      }

      p {
        font-size: 18px;
        margin: 0;
        min-width: 200%;
        color: #1A2D7A;
      }

      .n2 {
        display: flex;
        margin-top: 20px;
        align-items: center;
      }

      .numero1, .numero3, .numero2 {
        color: #FFF;
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 20px;
        background-color: #005bb5;
        padding: 5px;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        border-radius: 15%;
      }

      .numero1 {
        margin-top: 180px;
      }

      .numero2 {
        margin-top: 232px;
      }

      .numero3 {
        margin-top: 130px;
      }
    }
  }

  @media (max-width: 425px) {
    padding-bottom: 150px;

    .Titulo {
      font-size: 48px;       
      margin-left: 1rem;     
      margin-right: 1rem;
      margin-top: 1rem;
    }

    .sections {
      flex-direction: column;
      align-items: center;

      section {
        max-width: 100%;
        margin-bottom: 40px;

        h3 {
          font-size: 24px;         
        }

        p {
          font-size: 16px;          
          min-width: auto;       
          padding: 0 1rem; 
        }

        .numero1, .numero3, .numero2 {
          display: none;      
        }

        .n1, .n2, .n3 {
          display: none;      
        }
      }
    }
  }
`;