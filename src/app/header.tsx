import React from 'react'
import Image from 'next/image'
import Button from '@/components/button'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='hidden sm:block fixed top-0 left-0 bg-background/40 backdrop-blur-lg z-10 w-screen'>
      <div className='wrapper mx-auto px-2 sm:px-3 md:px-4 py-3 text-white text-center flex items-center justify-between w-full'>
        <Link href="/" className='flex gap-2 md:gap-5'>
          <div className="relative aspect-square w-8">
            <Image src="/Lammi.png" fill alt='Lammi logo' sizes='2rem' />
          </div>
          <div className='relative w-[8.75rem] aspect-[5.6]'>
            <Image src="/Lammi-text.png" fill alt='Lammi Me' sizes='8.75rem' className='object-contain' />
          </div>
        </Link>
        <nav>
          <ul>
            <li className='flex items-center gap-12 md:gap-24'>
              <a href="#">Описание</a>
              <a href="#">Наша продукция</a>
              <a href="#">Отзывы гостей</a>
            </li>
          </ul>
        </nav>
        <Button size='small'>
          Контакты
        </Button>
      </div>
    </header>
  )
}
