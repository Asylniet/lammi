"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Navigation } from "swiper/modules";
import { OurSvg } from '../svg/our.svg';
import { ArrowCircle } from '../svg/arrowCircle.svg';
import { EyebrowSvg } from '../svg/eyebrow.svg';

interface ISlide {
  title: string,
  image: React.FC,
  description: string,
}

export const Technology = () => {
  const [isFirst, setIsFirst] = React.useState(true);
  const [isLast, setIsLast] = React.useState(false);
  const slides: ISlide[] = [
    {
      title: "Стрейчинг",
      image: EyebrowSvg,
      description: "усовершенствованная форма ламинирования, создающая WOW-эффект, лифтинг от корня",
    },
    {
      title: "Ламинирование",
      image: EyebrowSvg,
      description: "усовершенствованная форма ламинирования, создающая WOW-эффект, лифтинг от корня",
    },
  ];
  return (
    <section>
      <div className="relative max-w-fit mb-8 sm:mb-14 ps-24 md:ps-22 xl:ps-20 mx-auto">
        <h1 className='uppercase font-black text-4xl sm:text-5xl'>Технология лами</h1>
        <div className="max-w-full absolute -top-full left-0 -translate-y-[40%] md:-translate-y-[25%]">
          <OurSvg />
        </div>
      </div>
      <div className='relative'>
        <Swiper
          modules={[EffectCreative, Navigation]}
          navigation={{
            nextEl: '#swiper-tech-next',
            prevEl: '#swiper-tech-prev',
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
          className="w-full xl:w-10/12 max-w-5xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className='backdrop-blur-2xl overflow-visible'>
              {({ isActive }): React.ReactNode => (
                <div className={`${isActive ? "" : "blur-sm opacity-50"} aspect-[1.4] rounded-3xl border-primary border-2 bg-primary/25 flex flex-col items-center justify-between transition-all px-2 py-4 md:py-8`}>
                  <div className="text-center">
                    <h1 className="text-3xl xs:text-4xl xl:text-[2.8rem] font-black text-center">{slide.title}</h1>
                  </div>
                  <div className='max-h-[70px] md:max-h-[200px]'>
                    <slide.image />
                  </div>
                  <p className="text-sm md:text-base text-center">{slide.description}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div id='swiper-tech-next' className={`${isLast ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 right-0 z-10 w-20`}>
          <ArrowCircle />
        </div>
        <div id='swiper-tech-prev' className={`${isFirst ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 left-0 rotate-180 w-20 z-10`}>
          <ArrowCircle />
        </div>
      </div>
    </section>
  )
}
