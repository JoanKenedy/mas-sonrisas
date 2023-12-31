import React from "react";
import "../styles/casos.css";
import HeroCasos from "../components/HeroCasos";
import AllCasos from "../components/AllCasos";

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
    </div>
  );
};

export default Casos;
