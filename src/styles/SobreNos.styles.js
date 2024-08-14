import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #003366;
  min-height: 100vh;

  .inicio {
    width: 100%;
    background-color: #003366;
    padding: 10px 0;

    .inicio {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;

      img {
        height: 50px;
      }

      a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 1.2em;
        font-weight: bold;
        background-color: #0b5fa4;
        border-radius: 8px;
        transition: background-color 0.3s;

        &:hover {
          background-color: #0073e6;
        }
      }
    }
  }

  main {
    text-align: center;
    padding: 50px 20px;
    background-color: white;
    width: 80%;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: -30px;

    h1 {
      margin-bottom: 40px;
      color: #0099ff;
      font-size: 2.5em;
    }

    section {
      margin: 20px 0;
      text-align: center;
      display: inline-block;
      width: 22%;
      vertical-align: top;

      h3 {
        color: #003366;
        margin-bottom: 10px;
        font-size: 1.2em;
      }

      h2 {
        color: #0099ff;
        margin-top: 15px;
        font-size: 1.1em;
      }

      p {
        margin: 5px 0;
        font-size: 0.9em;
        color: #666666;
      }

      img {
        border-radius: 10px;
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-bottom: 15px;
        border: 2px solid #0099ff;
      }
    }

    .background-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 30px;

      .background-image {
        width: 10%;
        max-width: 150px;
      }

      .spiral-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .spiral {
          margin: 10px;
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
      }
    }
  }
`