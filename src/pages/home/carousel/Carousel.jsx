import './Carousel.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import LazyLoad from 'react-lazy-load';
import { Autoplay, Navigation } from 'swiper';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LazyLoad threshold={0.90}>
            <img
              src="https://image.adsoftheworld.com/u3b7uxnjm7pm0azkq9d2utkt2rlj"
              alt="car-image-by-alexandercho"
            />
          </LazyLoad>
        </SwiperSlide>

        <SwiperSlide>
          <LazyLoad>
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/179937170661853.6462323b21bd9.jpg"
              alt="car-image-by-alexandercho"
            />
          </LazyLoad>
        </SwiperSlide>

        <SwiperSlide>
          <LazyLoad>
            <img
              src="https://cdn.myportfolio.com/afd63615b9a9590546acea6eac067ea3/06afedae28744d71ab7de98e_rw_1920.jpg?h=e79921e43fd27b14c8444952d6b03d78"
              alt="car-image-by-alexandercho"
            />
          </LazyLoad>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
