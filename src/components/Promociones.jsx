import React, { useState } from "react";
import "../styles/promociones.css";
import promocion1 from "../assets/ortodoncia-cuadrado-sonrisas.jpg";
import promocion2 from "../assets/limpieza-cuadrado-sonrisas.jpg";
import promocion3 from "../assets/carillas-cuadrado-sonrisas.jpg";

const Promociones = () => {
  return (
    <div>
      <h2>Promociones</h2>
      <div className="container-promos">
        <img src={promocion1} alt="" />
        <img src={promocion2} alt="" />
        <img src={promocion3} alt="" />
      </div>
    </div>
  );
};

export default Promociones;