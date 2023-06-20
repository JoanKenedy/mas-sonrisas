import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Instalaciones from "../components/Instalaciones";
import Services from "../components/Services";

const Home = () => {
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
