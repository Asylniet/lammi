import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { First } from './basketSlides/first'
import { Product } from '@/components/product'
import { Second } from './basketSlides/second'

interface Props {
  products: {product: Product, quantity: number}[],
}

export const BasketModal: React.FC<Props> = ({ products }) => {
  return (
    <Swiper allowTouchMove={false}>
      <SwiperSlide>
        <First products={products} />
      </SwiperSlide>
      <SwiperSlide>
        <Second />
      </SwiperSlide>
    </Swiper>
  )
}

