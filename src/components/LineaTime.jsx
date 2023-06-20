import React from "react";
import "../styles/line-time.css";

const LineaTime = () => {
  return (
    <div class="about-line" id="nosotros">
      <h3>Historia de Más sonrisas</h3>
      <div class="timeline">
        <div
          class="container left-container"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="text-box">
            <div class="photo">
              <h4>Mi nombre es: Liliana Samahara Aldana Acosta</h4>
            </div>

            <article>
              Soy Cirujana Dentista egresada de la UNAM, desde el año 2007 a la
              fecha, también soy especialista en ortodoncia y ortopedia maxilar
              desde el 2009. Hize 2 diplomados en implantología oral y un
              diplomado en rehabilitación protésica sobre implantes.{" "}
            </article>
          </div>
        </div>
        <div
          class="container right-container"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div class="text-box">
            <div class="photo">
              <h4>Preocupada por el miedo que representa ir al dentista</h4>
            </div>

            <article>
              {" "}
              Tome un curso de aromaterapia, musicoterapia para que tu consulta
              sea más relájante, además de ser Acupunturista todo enfocado a la
              odontología.{" "}
            </article>
          </div>
        </div>
        <div
          class="container left-container"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="text-box">
            <div class="photo">
              <h4>En mi consultorio tengo colegas colaboradores</h4>
            </div>
            <article>
              {" "}
              Que cuentan también con excelente preparación en la rama
              odontológica. Mi misión es: “Dar un servicio de calidad a mis
              pacientes como si fueran mi familia”.{" "}
            </article>
          </div>
        </div>
        <div
          class="container right-container"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div class="text-box">
            <div class="photo">
              <h4>
                Mi compromiso es brindar calidad y seguridad en sus tratamientos
                dentales por eso estoy en constante preparación, tengo:
              </h4>
            </div>
            <article>
              <ul>
                <li> Diplomado Implantología oral básica (Ciore)</li>
                <li> Diplomado Implantología oral avanzada (Ciore) </li>
                <li>
                  {" "}
                  Diplomado Rehabilitación protésica sobre implantes (Ciore)
                </li>
                <li>
                  {" "}
                  Curso en Acupuntura y medicina tradicional china (Ming Men)
                </li>
                <li>
                  Cursos : Manejo de tejidos blandos, Elevación del seno maxilar
                  , Ortoimplantes , Microimplantes para sobredentaduras, Resinas
                  inyectadas.{" "}
                </li>
              </ul>{" "}
            </article>
          </div>
        </div>
        <div
          class="container left-container"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="text-box">
            <div class="photo">
              <h4>Y tengo certificaciones que me avalan:</h4>
            </div>
            <article>
              <ul>
                <li>
                  Certificación como cirujano Dentista por Universidad de
                  Morelos
                </li>
                <li>
                  Certificación en ortodoncia y ortopedia maxilar por Colegio de
                  Especialistas en Ortodoncia de México AC.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineaTime;
