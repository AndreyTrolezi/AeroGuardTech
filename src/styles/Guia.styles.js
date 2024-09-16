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

  .card h2 {
    font-size: 2rem;
  }
  
  .container {
    text-align: center;
    padding: 20px;
  }
  
  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
  
  .cards {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
  
  .card-container {
    perspective: 1000px; /* Para criar o efeito de profundidade */
  }
  
  .card {
    width: 400px;
    height: 550px;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  
  .card:hover {
    transform: rotateY(180deg);
  }
  
  .card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Oculta o lado que está por trás */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: white;
    text-align: center;
  }
  
  .card-front {
    background: linear-gradient(to bottom, #1e5799, #207cca);
  }
  
  .card-back {
    background: linear-gradient(to bottom, #207cca, #1e5799);
    transform: rotateY(180deg); /* Gira o verso para que ele comece escondido */
  }

  @media (max-width: 425px) {
    padding-bottom: 150px;

  .container {
    overflow-x: hidden;
    overflow-y: hidden;
  }
  
  .card h2 {
    font-size: 1rem;
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 150px;
    height: 200px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .card-front, .card-back {
    padding: 10px;
    font-size: 0.9rem;
  }

  .card .icon {
    font-size: 2.5rem;
  }
}
`