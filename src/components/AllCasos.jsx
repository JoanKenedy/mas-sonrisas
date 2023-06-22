import React from "react";
import "../styles/allcasos.css";
import Caso1 from "../assets/alejandra1.png";
import Caso2 from "../assets/alejandra2.png";
import Caso3 from "../assets/hansel1.png";
import Caso4 from "../assets/hansel2.png";
import Caso5 from "../assets/male1.png";
import Caso6 from "../assets/male2.png";
import Caso7 from "../assets/sofia1.png";
import Caso8 from "../assets/sofia2.png";
const AllCasos = () => {
  return (
    <div className="all-casos">
      <h2 className="title-all-casos">
        Por que nuestro trabajo, siempre habla bien de nosotros
      </h2>
      <div className="container-all-casos">
        <div className="item-all-casos">
          <div
            className="sub-item-all-casos"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Antes</h2>
            <img src={Caso1} alt="" />
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Tratamiento</h2>
            <h3>Carillas</h3>
            <p>
              Las carillas son tratamientos completamente estéticos, esto quiere
              decir que nadie te los tiene que notar. Las carillas tienen que
              asemejarse a lo más natural de tus dientes,así obtendrás una
              sonrisa hermosa .
            </p>
            <p>
              Acércate a verdaderos expertos. No existen resultados en
              excelencias en carillas de un día, 8 años de experiencia nos
              respaldan, nuestros tratamientos son de alta calidad y
              extraordinaria apariencia estética.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525635757265
                "
              target="_blank"
            >
              Contacto
            </a>
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Después</h2>
            <img src={Caso2} alt="" />
          </div>
        </div>
        <div className="item-all-casos">
          <div
            className="sub-item-all-casos"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Antes</h2>
            <img src={Caso3} alt="" />
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Tratamiento</h2>
            <h3>Carillas y Coronas cerámicas </h3>

            <p>
              En definitiva, si los dientes están sanos pero se busca mejorar la
              estética, las carillas dentales podrían ser la mejor opción al ser
              una técnica menos invasiva. En cambio, si se busca mejorar la
              sonrisa pero los dientes necesitan ser reforzados, a menudo debido
              a daños como grietas o problemas estructurales por caries dental,
              entonces las coronas podrían ser la mejor opción.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525635757265
                "
              target="_blank"
            >
              Contacto
            </a>
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Después</h2>
            <img src={Caso4} alt="" />
          </div>
        </div>
        <div className="item-all-casos">
          <div
            className="sub-item-all-casos"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Antes</h2>
            <img src={Caso5} alt="" />
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Tratamiento</h2>
            <h3> Rehabilitación con prótesis totales removibles</h3>
            <p>
              La rehabilitación no solo nos regresa la funcionalidad de nuestro
              sistema masticatorio, nos regresa confianza, salud, estética ,
              fonética , y por supuesto la libertad de sonreír.
            </p>
            <p>
              No sólo rehabilitamos dientes. También mejoramos la calidad de
              vida de nuestros pacientes. Sientete seguro , vuelve a sonreir.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525635757265
                "
              target="_blank"
            >
              Contacto
            </a>
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Después</h2>
            <img src={Caso6} alt="" />
          </div>
        </div>
        <div className="item-all-casos">
          <div
            className="sub-item-all-casos"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Antes</h2>
            <img src={Caso7} alt="" />
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="sub-title">Tratamiento</h2>
            <h3>Ortodoncia y Blanqueamiento</h3>
            <p>
              Corregimos dientes en mal posisición y mejoramos la mordida
              gracias a los brackets, posteriormente para darles una mejor
              apariencia , hicimos un blanqueamiento. Nuestra experiencia y
              nuestro trabajo es nuestra mejor carta de presentacion.
            </p>
            <p>
              No sólo hacemos ortodoncia , también ayudamos a que la calidad de
              vida de nuestros pacientes mejore .Con nosotros recupera tu
              seguridad y vuelve a sonreir .
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=525635757265
                "
              target="_blank"
            >
              Contacto
            </a>
          </div>
          <div
            className="sub-item-all-casos"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2>Después</h2>
            <img src={Caso8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCasos;
