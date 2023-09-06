import React from "react";
import "../styles/casos.css";
import HeroCasos from "../components/HeroCasos";
import AllCasos from "../components/AllCasos";
import RedesFlotantes from "../components/RedesFlotantes";
import Slider from "../components/Slider";

const Casos = () => {
  let desplazamiento = document.documentElement.scrollTop;
  let abajo = 700;
  const regresaArriba = () => {
    if (desplazamiento >= abajo) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  window.addEventListener("scroll", regresaArriba());
  return (
    <div className="casos">
      <HeroCasos />
      <AllCasos />
      <div className="container-slider">
        <div className="slider-final">
          <Slider />
          <div
            className="item-casos2"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h3>Pacientes que confían en nosotros</h3>
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
      <RedesFlotantes />
    </div>
  );
};

export default Casos;
