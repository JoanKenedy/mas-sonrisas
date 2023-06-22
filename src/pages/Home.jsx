import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Instalaciones from "../components/Instalaciones";
import Services from "../components/Services";

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
      <Services />
      <Instalaciones />
    </div>
  );
};

export default Home;
