import React, { useRef, useState } from "react";
import "../styles/hero.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, EffectFade } from "swiper";
import Slider1 from "../assets/sonrisa.jpg";
import Slider2 from "../assets/sonrisa2.jpg";
import Slider3 from "../assets/sonrisa3.jpg";
import Slider4 from "../assets/sonrisa4.jpg";

const Hero = () => {
  return (
    <div className="slider">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slider3} className="img-slider" />
          <img src={Slider1} alt="" className="img-movil" />
          <div className="container-text">
            <div className="text-slider">
              <p>¡Más sonrisas, pacientes más felices!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider4} className="img-slider" />
          <img src={Slider2} alt="" className="img-movil" />
          <div className="container-text">
            <div className="text-slider">
              <p>
                ¡Trabajos en excelencia a un nivel poco visto en el mercado. !
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
