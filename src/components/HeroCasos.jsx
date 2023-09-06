import React from "react";
import "../styles/casos.css";
import "../styles/slider.css";
import video9 from  "../assets/video/video10.mp4"

const HeroCasos = () => {
  return (
    <div>
      <div className="hero-casos">
        <div className="container-casos">
          <div className="item-casos" data-aos="fade-up" data-aos-duration="1000">
            <div className="slider slider1">
            <div className="slider-item">
              <video src={video9} autoPlay controls></video>
            </div>
            </div>
          </div>
          <div
            className="item-casos"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h3>Casos de éxito</h3>
            <p>La prueba de nuestro éxito , es nuestro excelente trabajo.</p>
            <a
              href="https://api.whatsapp.com/send?phone=525635757265"
              target="_blank"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCasos;
