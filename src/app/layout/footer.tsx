import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full gap-10 h-24 flex items-center justify-center border-t border-t-foreground'>
      <Link href="/offer" className='hover:underline'>
        Публичная Оферта
      </Link>
      <Link href="/delivery" className='hover:underline'>
        Условия доставки
      </Link>
    </footer>
  )
}
