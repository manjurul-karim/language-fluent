import React from "react";
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import bangla from "../../../assets/slider/Bangla-ds.jpg";
import arabic from "../../../assets/slider/arabic.png";
import chinese from "../../../assets/slider/chinese.jpg";
import dutch from "../../../assets/slider/dutch.jpeg";
import english from "../../../assets/slider/english.jpg";
import french from "../../../assets/slider/french.png";
import germany from "../../../assets/slider/germany.png";
import hindi from "../../../assets/slider/Hindi.png";
import italian from "../../../assets/slider/italian.png";
import japanese from "../../../assets/slider/japanese.png";
import korean from "../../../assets/slider/korean.jpeg";
import russian from "../../../assets/slider/ruassia.png";
import spanish from "../../../assets/slider/spanish.png";

const Slider = () => {
  return (
    <div>
      <div className="mt-12 text-center">
        <h3 className="text-4xl font-semibold">
          Learn a language for real life
        </h3>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bangla}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={arabic}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={english}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={french}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={germany}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={hindi}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={italian}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={japanese}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={korean}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dutch}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={russian}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={spanish}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={chinese}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
