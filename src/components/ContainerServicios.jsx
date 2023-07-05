import React, { useState } from "react";
import "../styles/servicios.css";
import servicio1 from "../assets/estetica.png";
import servicio2 from "../assets/invasiva.png";
import servicio3 from "../assets/ortognatica.png";
import servicio4 from "../assets/protesis.png";
import servicio5 from "../assets/biomimetica.png";
import servicio6 from "../assets/ortodoncia.png";
import servicio7 from "../assets/implantologia.png";
import servicio8 from "../assets/periodoncia.png";
import servicio9 from "../assets/endodoncia.png";

const ContainerServicios = () => {
  const servicios = [
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
      title: "Prótesis Bucal",
      imgServicio: servicio4,
      texto:
        "Las prótesis dentales representan una solución apropiada para aquellas personas que necesitan recuperar el correcto funcionamiento de la boca, ya que se trata de dispositivos diseñados especialmente para reemplazar los dientes perdidos y favorecer la oclusión dental.Ejemplos: Rehabilitaciones totales de boca fija y removible, Coronas, Coronas sobre implantes, Incrustaciones y Rehabilitación Post Endodontica",
    },
    {
      id: 5,
      title: "Biomimética",
      imgServicio: servicio5,
      texto:
        "La odontología biomimética, es una  práctica que busca restaurar dientes dañados, rotos, y cariados a su fuerza, función y estética originales. Los tratamientos dentales  biomiméticos logran todo esto con un enfoque conservador, fuerte y atractivo. Biomimético, básicamente significa imitar la biología, en este caso, la biología de los dientes. Bajo estrictos protocolos y materiales de la más alta calidad.",
    },
    {
      id: 6,
      title: "Ortodoncía",
      imgServicio: servicio6,
      texto:
        "La ortodoncia corrige los defectos de la posición dental para mantener una boca perfecta y sana. En Mas sonrisas, somos especialistas en ortodoncia y realizamos diferentes tipos de tratamientos para adaptarnos a tus necesidades.",
    },
    {
      id: 7,
      title: "Implantología",
      imgServicio: servicio7,
      texto:
        "La implantología dental es la disciplina encargada del reemplazo de las piezas dentales perdidas mediante la colocación quirúrgica de un aditamento intraóseo (implante dental) y un aditamento protésico (corona, puente o prótesis), tanto en el maxilar como en la mandíbula.",
    },
    {
      id: 8,
      title: "Periodoncia",
      imgServicio: servicio8,
      texto:
        "La periodoncia es el área de la Odontología que se encarga del estudio, prevención y tratamiento de aquellas patologías que afectan a los tejidos que protegen, rodean y sujetan los dientes: encía, hueso alveolar, ligamento periodontal y cemento radicular.",
    },
    {
      id: 9,
      title: "Endodoncía",
      imgServicio: servicio9,
      texto:
        "La endodoncia es un procedimiento que tiene como finalidad preservar las piezas dentales dañadas, evitando así su pérdida. Para ello, se extrae la pulpa dental y la cavidad resultante, se rellena y sella con material inerte y biocompatible.",
    },
  ];
  const [selected, setSelected] = useState(null);
  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <div className="servicios">
      <h2>Todos nuestros servicios</h2>
      <div className="container-servicios">
        {servicios.map((servicio, index) => {
          return (
            <div
              className="item-todos-servicios"
              key={index}
              id="item-todos-servicios"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img src={servicio.imgServicio} alt="" />
              <div className="text-down" onClick={() => toggle(index)}>
                <h2>{servicio.title}</h2>

                <i class="fa-solid fa-plus"></i>
              </div>

              <div
                className={`text-show ${
                  selected === index ? "text-show visibilidad" : ""
                }`}
              >
                <p>{servicio.texto}</p>
                <a
                  href="https://api.whatsapp.com/send?phone=525635757265"
                  target="_blank"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContainerServicios;
