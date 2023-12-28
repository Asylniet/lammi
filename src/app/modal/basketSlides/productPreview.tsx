import React, { use } from 'react'
import Image from 'next/image'
import { useProductStore } from '@/store/products';

interface Props {
  id: number,
}

export const ProductPreview: React.FC<Props> = ({ id: productId }) => {
  const products = useProductStore(state => state.products);
  const product = products.find(product => product.product.id === productId);

  const { id, title, description, image, price, discount } = product!.product;
  const addProduct = useProductStore(state => state.addProduct);
  const removeProduct = useProductStore(state => state.removeProduct);
  return (
    <div className='flex gap-3'>
      <div className='relative flex items-center justify-center min-w-[90px] aspect-[0.75]'>
        <Image src={image} alt={title} fill sizes='100%' className='object-contain' />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className='text-sm mb-2'>{description}</p>
        <div className="bg-background text-foreground w-fit text-sm">
          <button type='button' onClick={() => removeProduct(id)} className='p-2 px-4'>-</button>
          <span className='p-2 text-sm'>{product?.quantity}</span>
          <button type='button' onClick={() => addProduct(product?.product!)} className='p-2 px-4'>+</button>
        </div>
        <p className='text-lg mt-auto'>{((100 - discount!) / 100 * price).toLocaleString("ru-RU")}₸</p>
      </div>
    </div>
  )
}
