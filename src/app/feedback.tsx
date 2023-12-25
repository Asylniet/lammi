"use client"
import React from 'react'
import { FeedbacksSvg } from './svg/feedbacks.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Navigation } from "swiper/modules";
import { ArrowCircle } from './svg/arrowCircle.svg';
import { StarSvg } from './svg/star.svg';

interface ISlide {
  name: string,
  age: number,
  comment: string,
  rating: number,
}

export const Feedback = () => {
  const [isFirst, setIsFirst] = React.useState(true);
  const [isLast, setIsLast] = React.useState(false);
  const slides: ISlide[] = [
    {
      name: "Анна",
      age: 25,
      comment: "Спасибо за прекрасное настроение и красивые брови! Я в восторге!",
      rating: 5,
    },
    {
      name: "Светлана",
      age: 30,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, turpis non ullamcorper faucibus, lacus ex sagittis magna, sed pharetra augue purus id quam. ",
      rating: 5,
    },
    {
      name: "Галина",
      age: 21,
      comment: "Спасибо за прекрасное настроение и красивые брови! Я в восторге!",
      rating: 4,
    },
  ];
  return (
    <section id='feedback'>
      <div className="relative max-w-fit mb-8 sm:mb-14 ps-24 md:ps-22 xl:ps-20 mx-auto">
        <h1 className='uppercase font-black text-4xl sm:text-5xl'>гостей</h1>
        <div className="max-w-full absolute -top-full left-0 -translate-y-[40%] md:-translate-y-[25%]">
          <FeedbacksSvg />
        </div>
      </div>
      <div className='relative'>
        <Swiper
          modules={[EffectCreative, Navigation]}
          navigation={{
            nextEl: '#swiper-feedback-next',
            prevEl: '#swiper-feedback-prev',
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
            <SwiperSlide key={index} className='overflow-visible'>
              {({ isActive }): React.ReactNode => (
                <div className={`${isActive ? "" : " brightness-50"} feedback-card aspect-[1.35] rounded-xl md:rounded-3xl flex flex-col items-center justify-start transition-all p-4 md:p-8`}>
                  <div className="w-full flex justify-end items-center gap-2 mb-4 md:mb-8">
                    {[...Array(slide.rating)].map((_, index) => (
                      <StarSvg key={index} filled />
                    ))}
                    {[...Array(5 - slide.rating)].map((_, index) => (
                      <StarSvg key={index} />
                    ))}
                    <span className=' text-2xl'>
                      {slide.rating.toFixed(1)}
                    </span>
                  </div>
                  <div className="text-sm min-h-[70%] md:text-base p-4 md:p-8 bg-foreground text-background rounded-md md:rounded-lg">
                    <p className="font-bold mb-2">
                      {slide.name}, {slide.age} лет
                    </p>
                    <p>{slide.comment}</p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div id='swiper-feedback-next' className={`${isLast ? "opacity-50" : ""} max-sm:hidden no-highlight absolute top-1/2 -translate-y-1/2 right-0 z-10 w-20`}>
          <ArrowCircle />
        </div>
        <div id='swiper-feedback-prev' className={`${isFirst ? "opacity-50" : ""} max-sm:hidden no-highlight absolute top-1/2 -translate-y-1/2 left-0 rotate-180 w-20 z-10`}>
          <ArrowCircle />
        </div>
      </div>
    </section>
  )
}

