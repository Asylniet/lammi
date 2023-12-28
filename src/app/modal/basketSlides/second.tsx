import React from 'react'
import { TotalSum } from './totalSum';
import Button from '@/components/button';
import { useSwiper } from 'swiper/react';
import { makeOrder } from '@/api/appointment';
import { useMutation } from '@tanstack/react-query';
import { useProductStore } from '@/store/products';
import { ArrowSvg } from '@/app/svg/arrow.svg';

export const Second = () => {
  const swiper = useSwiper();
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const products = useProductStore(state => state.products);

  const mutation = useMutation({
    mutationKey: ['createOrder'],
    mutationFn: makeOrder,
    onSuccess: (data) => {
      window.location.href = data;
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ 
      client: {
        full_name: name,
        delivery_address: address,
      },
      products: products.map(product => ({
        id: product.product.id,
        quantity: product.quantity,
      })),
     });
  }
  return (
    <>
      <h1 className='font-bold uppercase text-center text-xl px-2 mb-4'>Корзина</h1>
      <div className="bg-accent w-full h-px mb-6"></div>
      <div className='flex flex-col h-full mx-auto max-w-[600px] px-6'>
        <TotalSum />
        <button onClick={() => swiper.slidePrev()} className='my-4 w-fit rounded-md flex items-center px-4 py-2 bg-accent/20 gap-2'>
          <div className="rotate-180 max-w-[15px] flex items-center">
            <ArrowSvg />
          </div>
          Изменить корзину
        </button>
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='name'>Полное имя</label>
            <input type="text" placeholder='Имя Фамилия' id='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-6'>
            <label htmlFor='address'>Адрес доставки</label>
            <input type="text" placeholder='Адрес' id='address' value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="w-fit mx-auto mt-12 text-foreground">
            <Button status={mutation.status} disabled={!name || !address}>
              Оформить заказ
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
