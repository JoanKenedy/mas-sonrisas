import React, { useState } from "react";
import ContainerServicios from "../components/ContainerServicios";
import HeroServicios from "../components/HeroServicios";
import "../styles/hero-servicios.css";
import RedesFlotantes from "../components/RedesFlotantes";

const Servicios = () => {
  let desplazamiento = document.documentElement.scrollTop;
  let abajo = 1000;
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
    <div id="topServicios">
      <HeroServicios />
      <ContainerServicios />
      <RedesFlotantes />
    </div>
  );
};

export default Servicios;
