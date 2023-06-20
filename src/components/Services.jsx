import React from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";
import servicio1 from "../assets/estetica.png";
import servicio2 from "../assets/invasiva.png";
import servicio3 from "../assets/ortognatica.png";
import servicio4 from "../assets/protesis.png";
import servicio5 from "../assets/biomimetica.png";
import servicio6 from "../assets/ortodoncia.png";
import servicio7 from "../assets/implantologia.png";
import servicio8 from "../assets/periodoncia.png";
import servicio9 from "../assets/endodoncia.png";

const Services = () => {
  return (
    <div className="services">
      <h2>Servicios</h2>
      <div className="container-services">
        <div className="item-services">
          <img src={servicio1} alt="" />
          <h2>Estética Restauradora</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio2} alt="" />
          <h2>Odontología General</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio3} alt="" />
          <h2>Cirugía Maxilofacial</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio4} alt="" />
          <h2>Prótesis Bucal</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio5} alt="" />
          <h2>Biomimética</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio6} alt="" />
          <h2>Ortodoncía</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio7} alt="" />
          <h2>Implantología</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio8} alt="" />
          <h2>Periodoncia</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
        <div className="item-services">
          <img src={servicio9} alt="" />
          <h2>Endodoncía</h2>

          <Link to="/servicios">Conocer más</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
