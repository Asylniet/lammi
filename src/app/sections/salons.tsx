import React from 'react'
import Image from 'next/image'
import { SalonSvg } from '../svg/salon.svg'
import { PlaceSvg } from '../svg/place.svg'

export const Salons = () => {
  return (
    <section id='contacts' className='wrapper px-2 md:px-4'>
      <div className="relative max-w-fit sm:mb-14 pe-16 max-md:mx-auto mb-20 md:mb-32">
        <h1 className='uppercase font-black text-4xl sm:text-5xl'>фотографии</h1>
        <div className="max-md:max-w-full md:w-full absolute -top-full left-0 translate-y-1/2">
          <SalonSvg />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap items-start justify-center md:justify-between gap-10 md:gap-6 mb-12">
        <div data-aos="fade-up" data-aos-delay="100" className='flex-1 min-w-[270px] max-w-sm max-md:mx-auto max-sm:w-full'>
          <a href="https://2gis.kz/almaty/geo/70000001048009372" target="_blank" rel="noopener noreferrer">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4">
              <Image src="/location-1.jpg" alt='Таугуль' fill sizes='100%' />
            </div>
            <div className="flex items-center text-3xl font-bold gap-3">
              <p>Таугуль</p>
              <PlaceSvg size="24" />
            </div>
            <p className='mt-2 w-full'>
              ​Микрорайон Таугуль, 19
            </p>
          </a>
          <div className="py-2"></div>
          <a href='tel:+77078635399'>
            +7 707 863 53 99
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className='flex-1 min-w-[270px] max-w-sm max-md:mx-auto max-sm:w-full'>
          <a href="https://2gis.kz/almaty/geo/70000001067112853" target='_blank' rel="noopener noreferrer">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4">
              <Image src="/location-2.jpg" alt='Назарбаева' fill sizes='100%' />
            </div>
            <div className="flex items-center text-3xl font-bold gap-3">
              <p>Назарбаева</p>
              <PlaceSvg size="24" />
            </div>
            <p className='mt-2 w-full'>
              Проспект Назарбаева, 223, 1 этаж, А36 бутик
            </p>
          </a>
          <div className="py-2"></div>
          <a href='tel:+77073453183'>
            +7 707 345 31 83
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className='flex-1 min-w-[270px] max-w-sm max-md:mx-auto max-sm:w-full'>
          <a href='https://2gis.kz/astana/geo/70000001080663230' target='_blank' rel="noopener noreferrer">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4">
              <Image src="/location-3.jpg" alt='Астана' fill sizes='100%' />
            </div>
            <div className="flex items-center text-3xl font-bold gap-3">
              <p>Астана</p>
              <PlaceSvg size="24" />
            </div>
            <p className='mt-2 w-full'>
              Проспект Туран, 55/10, 1 этаж
            </p>
          </a>
          <div className="py-2"></div>
          <a href='tel:+77070702603'>
            +7 707 070 26 03
          </a>
        </div>
      </div>
    </section>
  )
}

