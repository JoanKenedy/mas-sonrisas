import React, { useState } from "react";
import Galery1 from "../assets/c-5.png";
import Galery2 from "../assets/c-2.png";
import Galery3 from "../assets/c-12.png";
import Galery4 from "../assets/c-13.png";
import Galery5 from "../assets/c-1.png";
import Galery6 from "../assets/c-6.png";
import Galery7 from "../assets/c-7.png";
import Galery8 from "../assets/c-8.png";
import Galery9 from "../assets/c-9.png";
import Galery10 from "../assets/c-10.png";
import Galery11 from "../assets/c-11.png";
import Galery12 from "../assets/c-12.png";

import "../styles/instalaciones.css";

const Gallery = () => {
  const galery = [
    {
      id: 1,
      imgSrc: Galery1,
    },
    {
      id: 2,
      imgSrc: Galery2,
    },
    {
      id: 3,
      imgSrc: Galery3,
    },
    {
      id: 4,
      imgSrc: Galery4,
    },
    {
      id: 5,
      imgSrc: Galery5,
    },
    {
      id: 6,
      imgSrc: Galery6,
    },
    {
      id: 7,
      imgSrc: Galery7,
    },
    {
      id: 8,
      imgSrc: Galery8,
    },
    {
      id: 9,
      imgSrc: Galery9,
    },
    {
      id: 10,
      imgSrc: Galery10,
    },
    {
      id: 11,
      imgSrc: Galery11,
    },
    {
      id: 12,
      imgSrc: Galery12,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className={model ? "model open" : " model"}>
        <i className="fa-solid fa-x" onClick={() => setModel(false)}></i>
        <img src={tempimgSrc} alt="" />
      </div>
      <div className="container-gallery">
        {galery.map((item, index) => {
          return (
            <div
              className="item-gallery"
              key={index}
              onClick={() => getImg(item.imgSrc)}
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
