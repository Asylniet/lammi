"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Navigation } from "swiper/modules";
import Button from '@/components/button';
import { ArrowCircle } from '../svg/arrowCircle.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-creative";
import { useModalStore } from '@/store/modal';
import { CustomSpecialist } from '@/api/appointment';

interface IStaff {
  specialists: CustomSpecialist[],
}

export const Staff: React.FC<IStaff> = ({ specialists }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const openModal = useModalStore(state => state.openModal);
  const handleOnClick = () => {
    openModal('appointment');
  }
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
        onSlideChange={({ activeIndex }) => {
          setActiveIndex(activeIndex)
        }}
        className="swiper-staff w-full xl:w-10/12 max-w-5xl"
      >
      {specialists.map((slide, index) => {
        const experience = 1 + Math.floor(slide.name.length % 4);
        return (
          <SwiperSlide key={index} className='backdrop-blur-2xl overflow-visible'>
            {({ isActive }): React.ReactNode => (
              <div className={`${isActive ? "" : "blur-sm opacity-50"} aspect-[1.6] rounded-3xl border-primary border-2 bg-primary/25 flex flex-col items-center justify-center pb-10 md:pb-12 transition-all`}>
                <div className="text-center my-auto">
                  <h1 className="text-3xl xs:text-4xl xl:text-[2.8rem] font-black text-center">{slide.name}</h1>
                  <h2 className="text-2xl xs:text-3xl font-medium text-center">{slide.position}</h2>
                </div>
                <h3 className="text-2xl xs:text-3xl text-center mb-3">Стаж работы: {experience} год{experience > 1 ? "а" : ""}</h3>
              </div>
            )}
          </SwiperSlide>
        )
      })}
      </Swiper>
      <div className='w-full xl:w-10/12 max-w-5xl absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex justify-center'>
        <Button className='w-11/12 xs:w-4/5 sm:w-3/5 md:w-[55%]' onClick={handleOnClick}>
          Записаться на прием
        </Button>
      </div>
      <div id='swiper-next' className={`${activeIndex === specialists.length - 1 ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 right-0 z-10 w-20`}>
        <ArrowCircle />
      </div>
      <div id='swiper-prev' className={`${activeIndex === 0 ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 left-0 rotate-180 w-20 z-10`}>
        <ArrowCircle />
      </div>
    </section>
  )
}

