import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import {AbilitySlide, SkillSlide, InventorySlider, SpellSheetSlide} from "./CarouselComponents";
import "swiper/css";
import 'swiper/css/pagination';

export default function CarouselMain() {
  return (
    <Swiper 
    navigation={true}
     pagination={{
        clickable: true,
      }} 
      modules={[Pagination]} 
      spaceBetween={50}
      className="mySwiper">
      <SwiperSlide><SkillSlide /></SwiperSlide>
      <SwiperSlide><AbilitySlide /></SwiperSlide>
      <SwiperSlide><InventorySlider /></SwiperSlide>
      <SwiperSlide><SpellSheetSlide/></SwiperSlide>
    </Swiper>
  );
}


