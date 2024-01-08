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

export const products: Product[] = [
  {
    id: 1,
    title: 'HALAL Составы для ламинирования Lammi me. 7 мл. Умываться можно сразу.',
    description: 'Состав 2 шага: <br/> Aqua (Water\Eau), Cetearly, Lauryl, Hydrogen Peroxide, Ceteareth-20, Ceteareth-30, Etidronic Acid. <br/> Состав 1 шага:Aqua (Water\'Eau), Ammonium thioglycolate, Cetearly, Lauryl, Ceteareth-20, Ceteareth-30, Ammonia, parfum (Fragrance), Tetrasodium Edta',
    category: '<br/>Инструкция: <br/> Тонкий волос от 3 минут <br/> Средний волос от 4 минут <br/> Жесткий волос от 5 минут <br/><br/> Made in Korea',
    image: '/Product-1.JPG',
    price: 6250,
    discount: 20,
  },
  {
    id: 2,
    title: 'Гель для бровей Herra с эффектом ламинирование бровей,сильная фиксация',
    description: 'Состав: Purified Water, Bis-isobutyl, Peg/PPG-10/Di-methicone, Copolymer, 2-Ethylhexanoicacid Hexadecyl Ester, Polysorbate 80 Hyaluronic Acid, Propanediol Benzyl Alcohol, Polysorbate 20',
    category: '<br/>Способ применения: <br/> нанесите гель против роста бровей и расчешите по нужной форме.',
    image: '/Product-2.JPG',
    price: 4150,
    discount: 40,
  },
  {
    id: 3,
    title: 'HALAL Составы для ламинирования Lammi me. 0,8 мл. Умываться можно сразу',
    description: 'Состав 2 шага: <br/> Aqua (Water\Eau), Cetearly, Lauryl, Hydrogen Peroxide, Ceteareth-20, Ceteareth-30, Etidronic Acid. <br/> Состав 1 шага:Aqua (Water\'Eau), Ammonium thioglycolate, Cetearly, Lauryl, Ceteareth-20, Ceteareth-30, Ammonia, parfum (Fragrance), Tetrasodium Edta',
    category: '<br/>Инструкция: <br/> Тонкий волос от 3 минут <br/> Средний волос от 4 минут <br/> Жесткий волос от 5 минут <br/><br/> Made in Korea',
    image: '/Product-3.JPG',
    price: 1500,
    discount: 20,
  },
  {
    id: 4,
    title: 'Сыворотка для роста и укрепления ресниц и бровей Lammi me. Сыворотка на основе кератина и протеинов шелка.',
    description: 'Состав сыворотки: Water 71%; Propylene Glycol 8%; Glycerin 5%; Olive Oil 7%; Butylene Glycol 3%; PEG-7 Glyceryl Cocoate 1%; Phenoxyethanol 0.3%; PEG-40 Hydrogenated Castor Oil 0.2%; Squalane 0.5%; Hydrolyzed Wheat Protein 0.5%; Sodium Hyaluronate 0.8%; Dextran 0.5%; Golden Chamomile (CHRYSANTHELLUM INDICUM) Extract 0.3%; Portulaca (PORTULACA OLERACEA) Extract 0.5%; Geranium Geranium (PELARGONIUM GRAVEOLENS) Extract 1%; Methylparaben 0.2%; CI 19140 (Ingredient B6291) 0.5%',
    category: '<br/>Способ применения: <br/> наносим на ресницы и брови утром,вечером. Так же можно использовать как базу под тушь.',
    image: '/Product-4.JPG',
    price: 3980,
    discount: 50,
  },
];

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
