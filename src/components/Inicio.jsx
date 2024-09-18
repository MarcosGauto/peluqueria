// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from "../../public/img/slider1.jpg"
import slider2 from "../../public/img/slider2.jpg"

import "../components/css/slider.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Inicio() {
  return (
    <div className='relative flex justify-center bg-black max-h-[500px]' >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={80}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

      >
        <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};


export default Inicio;