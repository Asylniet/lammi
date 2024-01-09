import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full gap-10 py-8 px-2 sm:px-3 md:px-4 flex flex-wrap items-center justify-center border-t border-t-foreground'>
      <Link href="/offer" className='hover:underline'>
        Публичная Оферта
      </Link>
      <Link href="/delivery" className='hover:underline'>
        Условия доставки
      </Link>
      <Link href="/payment" className='hover:underline'>
        Платежи
      </Link>
      <Link href="/privacy" className='hover:underline'>
        Конциденциальность
      </Link>
    </footer>
  )
}
