import React from 'react'
import Partnyor from './Partnyor'

// bura shekiller gelecek
import partnyorShirket1 from '../assets/images/partnyorlar/Group 400.png'
import partnyorShirket2 from '../assets/images/partnyorlar/Group 401.png'
import partnyorShirket3 from '../assets/images/partnyorlar/Group 402.png'
import partnyorShirket4 from '../assets/images/partnyorlar/Group 403.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from 'swiper'

// Import Swiper styles
import "swiper/css";

const Partnyorlar = () => {
  return (
    <div>

    <Swiper

    autoplay
    slidesPerView={3}
    spaceBetween={30}
    modules={[Autoplay]}
      className="mySwiper"

      breakpoints={{
        327: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        }
      }}
  >
    <SwiperSlide><Partnyor shirketinShekli={partnyorShirket1} /></SwiperSlide>
    <SwiperSlide> <Partnyor shirketinShekli ={partnyorShirket2} /> </SwiperSlide>
    <SwiperSlide> <Partnyor shirketinShekli ={partnyorShirket3} /></SwiperSlide>
    <SwiperSlide><Partnyor shirketinShekli ={partnyorShirket4} /></SwiperSlide>

    <SwiperSlide><Partnyor shirketinShekli={partnyorShirket1} /></SwiperSlide>
    <SwiperSlide> <Partnyor shirketinShekli ={partnyorShirket2} /> </SwiperSlide>
    <SwiperSlide> <Partnyor shirketinShekli ={partnyorShirket3} /></SwiperSlide>
    <SwiperSlide><Partnyor shirketinShekli ={partnyorShirket4} /></SwiperSlide>
 
  </Swiper>

    
   
   
  
    </div>
  )
}

export default Partnyorlar