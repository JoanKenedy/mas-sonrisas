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
        "Un candidato para la estétetica restauradora debe visitar a su dentista general, quien formulará un plan de tratamiento para lograr el resultado deseado. En más sonrisas y nuestro enfoque dinámico e innovador en el manejo de la estética dental nos diferencea de los demas.",
    },
    {
      id: 2,
      title: "Odontología General",
      imgServicio: servicio2,
      texto:
        "La Odontología General es la especialidad que se centra en el diagnóstico, tratamiento y prevención de los problemas primarios que tienen que ver con la salud bucodental. Incluye no sólo a los problemas que afectan a los dientes, sino también a las encías, el tejido periodontal y la articulación temporomandibular.",
    },
    {
      id: 3,
      title: "Cirugía Maxilofacial",
      imgServicio: servicio3,
      texto:
        "La cirugía maxilofacial es la especialidad médico-quirúrgica que se centra en el estudio, diagnóstico, tratamiento y rehabilitación de las enfermedades congénitas o adquiridas de la cavidad oral, el esqueleto facial y las estructuras cervicales relacionadas. El cirujano maxilofacial cuenta con amplios conocimientos en cirugía oral y maxilofacial que le permiten realizar extracciones complicadas, injertos óseos e implantes dentales, entre muchos otros tratamientos.",
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
      <Link to="/servicios">Todos los servicios</Link>
    </div>
  );
};

export default Services;
