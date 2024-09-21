import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Inicio() {
  return (
    <div>
      {/* Div fuera del Swiper */}
      <div className="extra-content">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, ]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="content">
              <h2>Slide 1</h2>
              <p>Descripción del Slide 1</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h2>Slide 2</h2>
              <p>Descripción del Slide 2</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h2>Slide 3</h2>
              <p>Descripción del Slide 3</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="content">
              <h2>Slide 4</h2>
              <p>Descripción del Slide 4</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper

          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '@1.00': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '@1.50': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>

      </div>
      <div className=' bg-'>

      </div>


    </div>
  );
}

export default Inicio;
