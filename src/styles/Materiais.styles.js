import styled from 'styled-components';

export const Home = styled.div`

background-color: #ffffff;
  border: 10px solid #1A2D7A;
  padding-bottom: 170px;
  max-width: 100%;
  
  .titulo {
    text-align: center;
    color: #119DFC;
    font-size: 98px;
    margin: 1.5rem;
    margin-bottom: 40px;
    margin-top: 50px; /* Aumentei a margem superior para descer o título */
  }

.container-slider {
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.container-images {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px; /* Aumentei o tamanho para 800px */
}

.slider {
  opacity: 0;
  transition: opacity .2s;
  position: absolute;
  width: 100%;
  max-width: 900px; /* Ajustei o tamanho máximo da imagem */
}

.on {
  opacity: 1;
}

#prev-button, #next-button {
  width: 60px; /* Aumentei a largura das setas */
  height: 60px; /* Aumentei a altura das setas */
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#prev-button img, #next-button img {
  width: 120px; /* Aumentei o tamanho das imagens das setas */
  height: 110px;
}

#prev-button img {
  margin-left: -80px; /* Ajustei a margem */
}


  @media (max-width: 425px) {

    background-color: #ffffff;
    border: 10px solid #1A2D7A;
    max-width: 100%;
    padding-bottom: 14.6rem;
    overflow-x: hidden;

    main {
      margin-top: 5rem;
    }

    .titulo {
      color: #119DFC;
      font-size: 70px;
      padding-botton: 15rem;
    }

    .container-images {
    width: 250px;
    height: 150px;
  }

  .titulo {
    font-size: 1.5rem;
  }

  #prev-button img, 
  #next-button img {
    width: 25px;
    height: 25px;
  }

  #prev-button img {
    margin-left: 30px;
  }

  .slider {
    position: absolute;
    width: 100%;
    min-width: 300px; /* Ajustei o tamanho máximo da imagem */
}
}
`