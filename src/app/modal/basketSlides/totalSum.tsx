import { useProductStore } from '@/store/products'
import React from 'react'

export const TotalSum = () => {
  const products = useProductStore(state => state.products);
  return (
    <>
      <div className="text-3xl font-black">
        Заказ на сумму 
        {" "}
        <span>
          {products.reduce((acc, product) => acc + (100 - product.product.discount!) / 100 * product.product.price * product.quantity, 0).toLocaleString("ru-RU")}₸
        </span>
      </div>
      <p className="text-accent">
        {products.length} товар
        {products.length > 1 ? "a" : ""}
      </p>
    </>
  )
}
