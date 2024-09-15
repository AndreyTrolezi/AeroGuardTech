import React, { useState } from 'react';
import seta_dir from "../assets/seta-dir.png";
import seta_esq from "../assets/seta-esq.png";

import Arduino from "../assets/arduino.jpeg";
import Qualidade from "../assets/sensor-de-ar.jpeg";
import Umidade from "../assets/sensor-umidade.jpeg";
import Bluetooth from "../assets/bluetooth.jpeg";
import Bateria from "../assets/bateria.jpeg";
import LCD from "../assets/lcd.jpeg";

import { Home } from "../styles/Materiais.styles";
import { Responsivo } from "../components/Responsivo";

export function Mate() {
  // Gerencie o estado do slider
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [Arduino, Qualidade, Umidade, Bluetooth, Bateria, LCD];

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <Home>
      <Responsivo />
      <main>
        <h1 className="titulo">Materiais Utilizados</h1>
        <div className="container-slider">
          <button id="prev-button" onClick={prevSlide}>
            <img src={seta_esq} alt="prev-button" />
          </button>
          <div className="container-images">
            {slides.map((slide, index) => (
              <img
                key={index}
                className={`slider ${index === currentSlide ? 'on' : ''}`}
                src={slide}
                alt={`slide-${index}`}
              />
            ))}
          </div>
          <button id="next-button" onClick={nextSlide}>
            <img src={seta_dir} alt="next-button" />
          </button>
        </div>
      </main>
    </Home>
  );
}
