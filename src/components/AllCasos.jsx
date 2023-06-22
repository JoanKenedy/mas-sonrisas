import React from "react";
import "../styles/allcasos.css";
import Caso1 from "../assets/alejandra1.png";
import Caso2 from "../assets/alejandra2.png";
const AllCasos = () => {
  return (
    <div className="all-casos">
      <h2 className="title-all-casos">
        Por que nuestro trabajo, siempre habla bien de nosotros
      </h2>
      <div className="container-all-casos">
        <div className="item-all-casos">
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Antes</h2>
            <img src={Caso1} alt="" />
          </div>
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Descripción</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              saepe facere? Saepe deserunt beatae ratione accusamus dolorem
              maiores dolore cum facere odio voluptas rem qui maxime, repellat
              repellendus. Dicta, atque.
            </p>
          </div>
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Después</h2>
            <img src={Caso2} alt="" />
          </div>
        </div>
        <div className="item-all-casos">
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Antes</h2>
            <img src={Caso1} alt="" />
          </div>
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Descripción</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              saepe facere? Saepe deserunt beatae ratione accusamus dolorem
              maiores dolore cum facere odio voluptas rem qui maxime, repellat
              repellendus. Dicta, atque.
            </p>
          </div>
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Después</h2>
            <img src={Caso2} alt="" />
          </div>
        </div>
        <div className="item-all-casos">
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Antes</h2>
            <img src={Caso1} alt="" />
          </div>
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Descripción</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              saepe facere? Saepe deserunt beatae ratione accusamus dolorem
              maiores dolore cum facere odio voluptas rem qui maxime, repellat
              repellendus. Dicta, atque.
            </p>
          </div>
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Después</h2>
            <img src={Caso2} alt="" />
          </div>
        </div>
        <div className="item-all-casos">
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Antes</h2>
            <img src={Caso1} alt="" />
          </div>
          <div className="sub-item-all-casos">
            <h2 className="sub-title">Descripción</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              saepe facere? Saepe deserunt beatae ratione accusamus dolorem
              maiores dolore cum facere odio voluptas rem qui maxime, repellat
              repellendus. Dicta, atque.
            </p>
          </div>
          <div className="sub-item-all-casos">
            <h2>Después</h2>
            <img src={Caso2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCasos;
