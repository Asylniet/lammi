"use client"
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { EffectCreative, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-creative";
import Button from '@/components/button';
import { ArrowCircle } from './svg/arrowCircle.svg';

interface ISlide {
  name: string,
  position: string,
  experience: string,
}

export const Staff = () => {
  const [isFirst, setIsFirst] = React.useState(true);
  const [isLast, setIsLast] = React.useState(false);
  const slides: ISlide[] = [
    {
      name: 'Алексей Смирнов',
      position: 'Мастер маникюра',
      experience: '3 года',
    },
    {
      name: 'Елена Петрова',
      position: 'Стилист',
      experience: '5 лет',
    },
    {
      name: 'Дмитрий Иванов',
      position: 'Барбер',
      experience: '2 года',
    },
    {
      name: 'Ольга Сидорова',
      position: 'Косметолог',
      experience: '4 года',
    },
    {
      name: 'Айгуль Жумагалиева',
      position: 'Мастер по бровям',
      experience: '3 года',
    },
    {
      name: 'Нурлан Ибраимов',
      position: 'Массажист',
      experience: '1 год',
    },
    {
      name: 'Асель Калиева',
      position: 'Мастер по наращиванию ресниц',
      experience: '2 года',
    },
    {
      name: 'Бауыржан Мухамеджанов',
      position: 'Парикмахер',
      experience: '5 лет',
    },
  ];

  return (
    <section className="wrapper py-10 relative">
      <Swiper
        modules={[EffectCreative, Navigation]}
        navigation={{
          nextEl: '#swiper-next',
          prevEl: '#swiper-prev',
        }}
        mousewheel
        grabCursor
        centeredSlides
        slidesPerView={1.4}
        effect={"creative"}
        creativeEffect={{
          limitProgress: 3,
          prev: {
            translate: ["-91.7%", 0, -500],
          },
          next: {
            translate: ["91.7%", 0, -500],
          },
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.6,
          },
          690: {
            slidesPerView: 1.8,
          },
          720: {
            slidesPerView: 1.9,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsFirst(isBeginning);
          setIsLast(isEnd);
        }}
        className="swiper-staff w-full xl:w-10/12 max-w-5xl"
      >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className='backdrop-blur-2xl overflow-visible'>
          {({ isActive }): React.ReactNode => (
            <div className={`${isActive ? "" : "blur-sm opacity-50"} aspect-[1.6] rounded-3xl border-primary border-2 bg-primary/25 flex flex-col items-center justify-center pb-10 md:pb-12 transition-all`}>
              <div className="text-center my-auto">
                <h1 className="text-3xl xs:text-4xl xl:text-[2.8rem] font-black text-center">{slide.name}</h1>
                <h2 className="text-2xl xs:text-3xl font-medium text-center">{slide.position}</h2>
              </div>
              <h3 className="text-2xl xs:text-3xl text-center mb-3">Стаж работы: {slide.experience}</h3>
            </div>
          )}
        </SwiperSlide>
      ))}
      </Swiper>
      <div className='w-full xl:w-10/12 max-w-5xl absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex justify-center'>
        <Button className='w-11/12 xs:w-4/5 sm:w-3/5 md:w-[55%]'>
          Записаться на прием
        </Button>
      </div>
      <div id='swiper-next' className={`${isLast ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 right-0 z-10 w-20`}>
        <ArrowCircle />
      </div>
      <div id='swiper-prev' className={`${isFirst ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 left-0 rotate-180 w-20 z-10`}>
        <ArrowCircle />
      </div>
    </section>
  )
}

