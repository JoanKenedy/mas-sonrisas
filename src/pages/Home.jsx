import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Instalaciones from "../components/Instalaciones";
import Services from "../components/Services";
import RedesFlotantes from "../components/RedesFlotantes";
import Promociones from "../components/Promociones";

const Home = () => {
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
    <div>
      <Hero />
      <About />
      <Promociones />
      <Services />
      <RedesFlotantes />
      <Instalaciones />
    </div>
  );
};

export default Home;
