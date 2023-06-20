import React from "react";
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
      title: "Prótesis Bucal",
      imgServicio: servicio4,
      texto:
        "Las prótesis dentales representan una solución apropiada para aquellas personas que necesitan recuperar el correcto funcionamiento de la boca, ya que se trata de dispositivos diseñados especialmente para reemplazar los dientes perdidos y favorecer la oclusión dental.",
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
  return (
    <div className="servicios">
      <h2>Todos nuestros servicios</h2>
      <div className="container-servicios">
        {servicios.map((servicio, index) => {
          return (
            <div className="item-todos-servicios" key={index}>
              <img src={servicio.imgServicio} alt="" />
              <h2>{servicio.title}</h2>
              <p>{servicio.texto}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContainerServicios;
