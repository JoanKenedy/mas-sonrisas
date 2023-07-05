import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/services.css";
import servicio1 from "../assets/estetica.png";
import servicio2 from "../assets/invasiva.png";
import servicio3 from "../assets/ortognatica.png";

import servicio5 from "../assets/biomimetica.png";

const Services = () => {
  const homeServices = [
    {
      id: 1,
      title: "Estética Restauradora",
      imgServicio: servicio1,
      texto:
        "Es la rama de la odontología que trabaja en el área de la restauración dental. Especialidad más utilizada en la práctica odontológica. Su atención se centra en la restauración de los dientes,que es una medida importante para la salud del individuo, siempre pensando en la aceptación del tratamiento, ya que entre menos se vea una restauración, mejor aceptada será para el paciente. Comprende tratamientos como: Resinas estéticas, Blanqueamientos, Carillas de resina, Carillas de cerámica y Coronas ",
    },
    {
      id: 2,
      title: "Odontología General",
      imgServicio: servicio2,
      texto:
        "La odontología general es la encargada de solucionar los problemas más comunes que aparecen en el día a día en su boca. Este campo esta encargado a realizar un filtro donde abarcan prevención, diagnostico , y tratamientos de mantenimiento como: Limpiezas, Aplicación de Fluor, Mantenimiento de restauraciones previas y Resinas",
    },
    {
      id: 3,
      title: "Cirugía Maxilofacial",
      imgServicio: servicio3,
      texto:
        "La Cirugía Oral y Maxilofacial es una especialidad de la Odontología que ofrece a nuestros pacientes alternativas de tratamiento médico y quirúrgico a diferentes problemas de salud, entre los que se encuentran: Cirugía de terceros molares, Cirugía gingivales, Regeneraciones óseas e Implantes Dentales",
    },
    {
      id: 4,
      title: "Biomimética",
      imgServicio: servicio5,
      texto:
        "La odontología biomimética, es una  práctica que busca restaurar dientes dañados, rotos, y cariados a su fuerza, función y estética originales. Los tratamientos dentales  biomiméticos logran todo esto con un enfoque conservador, fuerte y atractivo. Biomimético, básicamente significa imitar la biología, en este caso, la biología de los dientes. Bajo estrictos protocolos y materiales de la más alta calidad.",
    },
  ];

  const [isModal, setIsModal] = useState(false);
  const handleModal = (e) => {
    setIsModal(true);
    let event = e.target.id;
    openModal(event);
  };
  const openModal = (event) => {
    let modalContainer = document.getElementById("modalContainer");
    modalContainer.innerHTML = "";
    homeServices
      .filter((item) => item.id == event)
      .map((item) => {
        modalContainer.innerHTML += `
       <img src=${item.imgServicio} alt="" />
       <h2>${item.title} </h2>
       <p>${item.texto} </p>
       <a
            href="https://api.whatsapp.com/send?phone=525635757265"
            target="_blank"
            id="btnAncla"
            
          >
          
            Contacto
          </a>
      
       `;
      });
  };

  return (
    <div className="services">
      <h2>Servicios</h2>
      <div className="container-services">
        <div
          className="item-services"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={servicio1} alt="" />
          <h2>Estética Restauradora</h2>

          <button
            className="btn-conocer-mas"
            id="1"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Conocer más
          </button>
        </div>
        <div
          className="item-services"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={servicio2} alt="" />
          <h2>Odontología General</h2>

          <button
            className="btn-conocer-mas"
            id="2"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Conocer más
          </button>
        </div>
        <div
          className="item-services"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={servicio3} alt="" />
          <h2>Cirugía Maxilofacial</h2>
          <button
            className="btn-conocer-mas"
            id="3"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Conocer más
          </button>
        </div>

        <div
          className="item-services"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={servicio5} alt="" />
          <h2>Biomimética</h2>

          <button
            className="btn-conocer-mas"
            id="4"
            onClick={(e) => handleModal(e, !isModal)}
          >
            Conocer más
          </button>
        </div>
      </div>
      <div
        className={`modal-services-home ${
          isModal ? "modal-services-home openModal" : ""
        }`}
      >
        <i class="fa-solid fa-x" onClick={() => setIsModal(false)}></i>
        <div className="container-modal-services" id="modalContainer"></div>
      </div>
      <Link to="/servicios" id="btn-modal">
        Todos los servicios
      </Link>
    </div>
  );
};

export default Services;
