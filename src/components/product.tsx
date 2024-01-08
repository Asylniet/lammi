import React, { use } from 'react'
import Image from 'next/image'
import { useGetScreenSize } from '@/hooks/getScreenSize';
import { useModalStore } from '@/store/modal';
import { useProductStore } from '@/store/products';

export type Product = {
  id: number,
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

export const Product: React.FC<IProps> = ({ id, title, description, category, image, price, discount = 0, isActive = false }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openModal = useModalStore(state => state.openModal);
  const addProduct = useProductStore(state => state.addProduct);
  const { width } = useGetScreenSize();
  const isMobile = width && width < 520;

  const handleClick = () => {
    const product: Product = {
      id,
      title,
      description,
      category,
      image,
      price,
      discount,
    }
    addProduct(product);
    openModal('basket');
  }
  return (
    <div className={`${isMobile ? `${isActive ? "active" : "blur-sm opacity-50"}` : ""} transition-all bg-background product m-4 p-4 flex items-center justify-center flex-col text-center`}>
      <div className="w-2/3 max-h-60 relative aspect-[0.8] mb-4">
        <Image src={image} priority className=' object-contain' sizes='100%' fill alt={title} />
      </div>
      <div className="font-black mb-2" onClick={() => setIsOpen(val => !val)}>{title}</div>
      <p className={isOpen ? "line-clamp-none" : "line-clamp-2"} onClick={() => setIsOpen(val => !val)} dangerouslySetInnerHTML={{ __html: description }}></p>
      <div dangerouslySetInnerHTML={{ __html: category }} className='text-accent mb-2'></div>
      <div className="flex w-11/12 justify-between items-center mb-4">
        <div className="line-through text-accent">{price.toLocaleString('ru-RU')}₸</div>
        <div>{((100 - discount) / 100 * price).toLocaleString("ru-RU")}₸ {id === 3 && "(каждая)"}</div>
      </div>
      <button onClick={handleClick} className={`button transition-all white uppercase w-11/12 font-black py-2 px-8 mx-auto hover:rounded-md`}>
        Купить
      </button>
    </div>
  )
}
