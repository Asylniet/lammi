import React from 'react'
import { Training } from '@/api/training'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Button from '@/components/button'
import { First } from './courseSlides/first'
import { useModalStore } from '@/store/modal'

interface Props {
  trainings: Training[],
}

export const CourseModal: React.FC<Props> = ({ trainings }) => {
  const openModal = useModalStore(state => state.openModal);
  return (
    <Swiper allowTouchMove={false} allowSlidePrev={false}>
      <SwiperSlide>
        <First trainings={trainings} />
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full h-full flex flex-col items-center justify-center gap-6 text-center px-4'>
          <Image src="/check.svg" width={60} height={60} alt='' />
          <div className="text-2xl font-black uppercase">
            Вы успешно записались на курс
          </div>
          <p className='text-accent mb-auto'>
            Наши операторы свяжутся с вами в ближайшее время <br />
            Не забудьте записаться на прием к нашим специалистам
          </p>
          <Button onClick={() => openModal("appointment")} className='mt-auto text-foreground'>
            Записаться на прием
          </Button>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

