import Button from '@/components/button';
import React from 'react'
import { ProductPreview } from './productPreview';
import { Product } from '@/components/product';
import { useModalStore } from '@/store/modal';
import { useSwiper } from 'swiper/react';
import { TotalSum } from './totalSum';

interface Props {
  products: {product: Product, quantity: number}[],
}

export const First: React.FC<Props> = ({ products }) => {
  const closeModal = useModalStore(state => state.closeModal);
  const swiper = useSwiper();
  return (
    <>
      <h1 className='font-bold uppercase text-center text-xl px-2 mb-4'>Корзина</h1>
      <div className="bg-accent w-full h-px mb-6"></div>
      {products.length === 0 ? (
        <div className='flex flex-col items-center justify-center'>
          <div className="text-center text-2xl font-black mb-4">Корзина пуста</div>
          <Button size='small' className='text-foreground mx-auto' onClick={closeModal}>Добавить товары</Button>
        </div> 
      ) : (
        <div className='flex flex-col h-full mx-auto max-w-[600px] px-6'>
          <TotalSum />
          <div className='flex flex-col gap-4 mt-4'>
            {products.map((product, index) => <ProductPreview key={index} id={product.product.id} />)}
            <div className="mx-auto w-fit mt-12">
              <Button className="text-foreground" onClick={() => swiper.slideNext()}>
                Перейти к оформлению
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
