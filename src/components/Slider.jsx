import React from "react";
import "../styles/slider.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//videos
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video3.mp4";
import video4 from "../assets/video/video4.mp4";
import video5 from "../assets/video/video5.mp4";
import video6 from "../assets/video/video6.mp4";
import video7 from "../assets/video/video7.mp4";
import video8 from "../assets/video/video8.mp4";
import video9 from "../assets/video/video9.mp4";


const Slider = () => {
  return (
    <div className="slider">
      <div className="slider-item">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><video src={video1} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video2} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video3} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video4} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video5} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video6} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video7} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video8} autoPlay muted loop></video></SwiperSlide>
          <SwiperSlide><video src={video9} autoPlay muted loop></video></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;