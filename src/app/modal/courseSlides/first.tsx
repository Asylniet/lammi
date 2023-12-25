import Button from '@/components/button'
import React from 'react'
import { useSwiper } from 'swiper/react';

export const First = () => {
  const swiper = useSwiper();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    swiper.slideNext();
  }
  return (
      <>
        <h1 className='font-bold uppercase text-center text-xl px-2 mb-4'>ЗАПИСАТЬСЯ НА ПРОЦЕДУРУ</h1>
        <div className="bg-accent w-full h-px mb-6"></div>
        <form className='flex flex-col h-full mx-auto max-w-[600px] px-6' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='name'>Имя</label>
            <input type="text" placeholder='Имя' name='name' id='name' required />
          </div>
          <div className='mb-6'>
            <label htmlFor='surname'>Фамилия</label>
            <input type="text" placeholder='Фамилия' name='surname' id='surname' required />
          </div>
          <div className='mb-12'>
            <label htmlFor='course'>Выберите курс</label>
            <select name="course" id="course" defaultValue="Курс1">
              <option value="Курс1">Курс 1</option>
              <option value="Курс2">Курс 2</option>
              <option value="Курс3">Курс 3</option>
            </select>
          </div>
          <div className="mx-auto w-fit mt-auto">
            <Button className='text-foreground'>
                Записаться на курс
            </Button>
          </div>
        </form>
      </>
  )
}
