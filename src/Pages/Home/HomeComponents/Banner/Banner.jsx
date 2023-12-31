import image from '../../../../assets/home-9.jpg';
import image2 from '../../../../assets/home-5-2.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import FirstSlide from './FirstSlide';
export default function Banner() {
  return (
    <div>
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <FirstSlide image={image}></FirstSlide>
        </SwiperSlide>
        <SwiperSlide>
            <FirstSlide image={image2}></FirstSlide>
        </SwiperSlide>
            
      </Swiper>
    </div>
  )
}
