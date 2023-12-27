"use client"
import React from 'react'
import { Product } from '../../components/product'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Navigation } from "swiper/modules";
import { useGetScreenSize } from '@/hooks/getScreenSize'
import { OurSvg } from '../svg/our.svg'
import { ArrowCircle } from '../svg/arrowCircle.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-creative";

const products: Product[] = new Array(9).fill({
  title: 'Lorem ipsum',
  description: 'Lorem ipsum Lorem ipsum',
  category: 'Lorem ipsum Lorem ipsum',
  image: '/Product.png',
  price: 42500,
  discount: 40,
});

export const Products = () => {
  const { width } = useGetScreenSize();
  const [isFirst, setIsFirst] = React.useState(true);
  const [isLast, setIsLast] = React.useState(false);

  if(!width) return null;

  return (
    <section id='products' className='wrapper px-2 sm:px-3 md:px-4 relative'>
      <div className="pt-20"></div>
      <div className="relative max-w-fit mb-8 sm:mb-14 ps-24 md:ps-22 xl:ps-20">
        <h1 className='uppercase font-black text-4xl sm:text-5xl'>продукция</h1>
        <div className="max-w-full absolute -top-full left-0 -translate-y-[40%] md:-translate-y-[25%]">
          <OurSvg />
        </div>
      </div>
      <p className='text-lg max-w-4xl mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, turpis non ullamcorper faucibus, lacus ex sagittis magna, sed pharetra augue purus id quam. 
      </p>
      <Swiper
        modules={[EffectCreative, Navigation]}
        navigation={{
          nextEl: '#product-swiper-next',
          prevEl: '#product-swiper-prev',
        }}
        mousewheel
        slidesPerGroupAuto
        slideToClickedSlide
        slidesPerView={1.4}
        effect={width < 520 ? 'creative' : "slide"}
        centeredSlides={width < 520 ? true : false}
        creativeEffect={width < 520 ? {
          limitProgress: 3,
          prev: {
            translate: ["-91.7%", 0, -500],
          },
          next: {
            translate: ["91.7%", 0, -500],
          },
        } : undefined}
        breakpoints={{
          520: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
          },
          768: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsFirst(isBeginning);
          setIsLast(isEnd);
        }}
        className="sm:w-11/12 w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            {({ isActive }): React.ReactNode => (
              <Product {...product} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div id='product-swiper-next' className={`${isLast ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 right-0 z-10 w-20`}>
        <ArrowCircle />
      </div>
      <div id='product-swiper-prev' className={`${isFirst ? "opacity-50" : ""} no-highlight absolute top-1/2 -translate-y-1/2 left-0 rotate-180 w-20 z-10`}>
        <ArrowCircle />
      </div>
    </section>
  )
}
