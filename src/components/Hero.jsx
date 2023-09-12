import React, { useRef, useState } from "react";
import "../styles/hero.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import Slider1 from "../assets/doctor.jpg";
import Slider2 from "../assets/doctora.jpg";
import Slider3 from "../assets/portada.jpg";
import Slider4 from "../assets/sonrisa4.jpg";

const Hero = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider3} className="img-slider" />
          <img src={Slider1} alt="" className="img-movil" />
          <div
            className="container-text"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="text-slider">
              <p>¡Más sonrisas, pacientes más felices!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider4} className="img-slider" />
          <img src={Slider2} alt="" className="img-movil" />
          <div
            className="container-text"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="4500"
          >
            <div className="text-slider">
              <p>
                ¡Trabajos en excelencia a un nivel poco visto en el mercado!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
