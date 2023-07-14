import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './BrandSlider.scss';


// import required modules
import { Autoplay } from 'swiper';

const BrandSlider = () => {
  return (
    <section id='brand-slider'>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
       <SwiperSlide> <img src="/01-jeep.png" alt="jeep" /></SwiperSlide>
       <SwiperSlide> <img src="/02-audi.png" alt="audi" /></SwiperSlide>
       <SwiperSlide> <img src="/03-maserati.png" alt="maserati" /></SwiperSlide>
       <SwiperSlide> <img src="/04-aston-martin.png" alt="aston-martin" /></SwiperSlide>
       <SwiperSlide> <img src="/05-mustang.webp" alt="mustang" /></SwiperSlide>
       <SwiperSlide> <img src="/06-jaguar.png" alt="jaguar" /></SwiperSlide>
       <SwiperSlide> <img src="/07-porsche.png" alt="porsche" /></SwiperSlide>
       <SwiperSlide> <img src="/08-mclaren.png" alt="mclaren" /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BrandSlider;
