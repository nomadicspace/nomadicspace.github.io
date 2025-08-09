'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarouselComponent() {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
    >
      <SwiperSlide>
        <Image
          src="/img/portofolio-01.jpg"
          alt="Gambar 1"
          className="img-fluid"
          width={932}
          height={523}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/img/carousel-2.jpg"
          alt="Gambar 2"
          className="img-fluid"
          width={932}
          height={523}
        />
      </SwiperSlide>
    </Swiper>
  );
}
