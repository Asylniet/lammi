import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { First } from './courseSlides/first'
import Button from '@/components/button'
import { Second } from './courseSlides/second'

export const CourseModal = () => {
  return (
    <Swiper allowTouchMove={false} className='w-full'>
      <SwiperSlide>
        <First />
      </SwiperSlide>
      <SwiperSlide >
        {({ isActive }): React.ReactNode => (
          <Second isActive={isActive} />
        )}
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-full flex flex-col items-center justify-center gap-6 text-center px-4'>
          <Image src="/check.svg" width={60} height={60} alt='' />
          <div className="text-2xl font-black uppercase">
            оПЛАТА ПРОШЛА УСПЕШНО!
          </div>
          <p className='text-accent mb-auto'>
            LOREM IPSUM LOREM IPSUM LOREM LOREM IPSUM <br /> LOREM IPSUM LOREM  LOREM IPSUM LOREM
          </p>
          <Button className='mt-auto text-foreground'>
            Записаться на прием
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

