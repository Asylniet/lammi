import React, { use } from 'react'
import Image from 'next/image'
import { useGetScreenSize } from '@/hooks/getScreenSize';
import Button from './button';

export type Product = {
  title: string,
  description: string,
  category: string,
  image: string,
  className?: string,
  price: number,
  discount?: number,
}

interface IProps extends Product {
  isActive: boolean,
}

export const Product: React.FC<IProps> = ({ title, description, category, image, price, discount = 0, isActive = false }) => {
  const { width } = useGetScreenSize();
  const isMobile = width && width < 520;
  return (
    <div className={`${isMobile ? `${isActive ? "active" : "blur-sm opacity-50"}` : ""} transition-all bg-background product m-4 p-4 flex items-center justify-center flex-col text-center`}>
      <div className="w-1/2 max-h-60 relative aspect-[0.3] mb-4">
        <Image src={image} className=' object-contain' sizes='100%' fill alt={title} />
      </div>
      <div className="font-black mb-2">{title}</div>
      <p>{description}</p>
      <div className='text-accent mb-2'>{category}</div>
      <div className='text-accent'>LOREM</div>
      <div className="flex w-11/12 justify-between items-center mb-4">
        <div className="line-through text-accent">{price}₸</div>
        <div>{(100 - discount) / 100 * price}₸</div>
      </div>
      <button className={`button transition-all white uppercase w-11/12 font-black py-2 px-8 mx-auto hover:rounded-md`}>
        Купить
      </button>
    </div>
  )
}
