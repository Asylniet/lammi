import Button from '@/components/button'
import React from 'react'
import Image from 'next/image'
import { useSwiper } from 'swiper/react';

interface IProps {
  isActive: boolean,
}

export const Second: React.FC<IProps> = ({ isActive }) => {
  const swiper = useSwiper();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    swiper.slideNext();
  }
  return (
    <>
      <h1 className='font-bold uppercase text-center text-xl px-2 mb-4'>записаться на курс</h1>
        <div className="bg-accent w-full h-px mb-6"></div>
        <div className="flex items-center gap-6 mb-8 px-6 max-w-[600px] mx-auto">
          <div className={`tab ${isActive ? "active" : ""}`}>
            <Image src="/card.svg" width={21} height={14} alt='card'  />
          </div>
          <div className={`tab ${isActive ? "active" : ""}`}>
            <Image src="/paypal.svg" width={12} height={14} alt='paypal'  />
          </div>
          <div className={`tab ${isActive ? "active" : ""}`}>
            <Image src="/google_pay.svg" width={37} height={15} alt='google pay'  />
          </div>
        </div>
        <form className='mx-auto px-6 max-w-[600px]' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='card_number'>Номер карты</label>
            <input inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete='cc-number' type="tel" placeholder='xxxx xxxx xxxx xxxx' name='card_number' id='card_number' maxLength={19} required />
          </div>
          <div className='mb-6'>
            <label htmlFor='card_name'>Имя на карте</label>
            <input type="text" placeholder='Имя на карте' name='card_name' id='card_name' required />
          </div>
          <div className='mb-6'>
            <label htmlFor='date'>Дата истечения срока</label>
            <div className='flex gap-5 max-w-[9rem]'>
              <div className='flex-1'>
                <input className='text-center text-xl' type="number" max="12" name='date' required />
              </div>
              <span className='text-3xl text-accent'>/</span>
              <div className='flex-1'>
                <input className='text-center text-xl' type="number" max={99} name='date2' required />
              </div>
            </div>
          </div>
          <div className='mb-6 max-w-[40px]'>
            <label htmlFor='cvv'>CVV</label>
            <input className='text-center text-xl' type="password" maxLength={3} name='cvv' id='cvv' required />
          </div>
          <div className='flex gap-2'>
            <input type="checkbox" name='conditions' className='w-fit' required />
            <label htmlFor="conditions">Я соглашаюсь с условиями использования и политикой конфиденциальности</label>
          </div>
          <div className="mx-auto w-fit mt-10">
            <Button className='text-foreground'>
                Записаться на прием
            </Button>
          </div>
        </form>
    </>
  )
}
