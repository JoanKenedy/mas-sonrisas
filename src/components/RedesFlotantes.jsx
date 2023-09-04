import React from "react";
import "../styles/redesflotantes.css";
import tel from "../assets/llamada.png"
import whats from "../assets/whatsapp.png"
import { useEffect, useState, useCallback } from "react";

const RedesFlotantes = () => {
  //Script para comprobar la altura del scroll
  const animado = document.getElementById("animado");
  const [y,
    setY] = useState(document.scrollingElement.scrollHeight); 
  const [scrollDirection,
    setScrollDirection] = useState("you have not scrolled yet");

  const handleNavigation = useCallback((e) => { //te regresa la llamada

    if (y > window.scrollY) { //verifica la altura del documento para definir si sube o baja
      setScrollDirection("Scrolling Up");
      console.log("scrolling up");
      if (y < 100 || y == 0) { //Detectamos cuando estamos más arriba de 100px del top de la pantalla  
      setScrollDirection("Scrolling TOp"); //este if se colocó dentro de la detección de subir para detectar cuando estemos 
      console.log("scrolling up"); //más arriba de 100px y desaparecer
      animado.style.opacity = 0; //desaparece el botón
      }
    } else if (y < window.scrollY) { //detecta cuando bajamos el scroll
      setScrollDirection("Scrolling Down");
      console.log("scrolling down");
      animado.style.opacity = 1; //aparece el botón
    }
    setY(window.scrollY)
  }, [y]);

  useEffect(() => { //Necesario para utilizar el window add event

    window.addEventListener("scroll", handleNavigation); 

    return () => {
      window.removeEventListener("scroll", handleNavigation); //
    };
  }, [handleNavigation]); //cada vez que hagas scroll va a llamar a la función para detectAR EL CAMBIO DEL SCROLL
  //Script para comprobar la altura del scroll
  return (
    <div>
      <div className="container-fixed animado" id="animado">
        <div className="tel-fixed tel">
        <a href="tel:5635757265" target="_blank" rel="noopener noreferrer">
          <img src={tel} alt="" />
        </a>
        </div>
        <div className="tel-fixed whats">
          <a href="https://api.whatsapp.com/send?phone=525635757265" target="_blank" rel="noopener noreferrer">
            <img src={whats} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RedesFlotantes;
