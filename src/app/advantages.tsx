import React from 'react'
import Image from 'next/image'
import WhySvg from './svg/why.svg'
import { Parallax } from 'react-scroll-parallax'

export const Advantages = () => {
  return (
    <section className='wrapper px-2 sm:px-3 md:px-4 relative'>
      <div className="absolute top-full -translate-x-[50%] xl:-translate-x-2/3 2xl:-translate-x-2/3 -translate-y-full sm:-translate-y-1/2 xl:-translate-y-2/3 2xl:-translate-y-1/2 left-full w-[290px] sm:w-[500px] 2xl:w-[700px] aspect-square z-[1] pointer-events-none">
        <Image fetchPriority="low" src="/benefit-0.png" alt="" fill sizes="24rem" />
      </div>
      <div className="pt-28"></div>
      <div className="relative max-w-fit mb-4 sm:mb-8 xs:ps-12 sm:ps-32 md:ps-40 xl:ps-44 isolate">
        <h1 className='uppercase font-black text-4xl sm:text-5xl'>нужно выбирать нас</h1>
        <div className="w-3/5 absolute -top-full left-0 -translate-y-[40%] -z-[1]">
          <WhySvg />
        </div>
      </div>
      <p className='text-lg max-w-4xl mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper, turpis non ullamcorper faucibus, lacus ex sagittis magna 
      </p>
      <div className="flex flex-wrap gap-6">
        <div className="relative flex-1 background-gradient flex justify-end text-center pb-6 flex-col h-72 rounded-md px-2 mx-auto min-w-[250px] max-w-[300px] sm:max-w-none xs:min-w-[300px] xl:min-w-[400px]">
          <Parallax speed={4}>
            <div className="absolute left-1/2 -translate-x-1/2 -top-64 aspect-[1] h-80">
              <Image className='object-contain' src="/benefit-1.png" fill sizes='100%' alt='4 года на рынке' />
            </div>
          </Parallax>
          <div className="text-3xl font-black">
            4 года на рынке
          </div>
        </div>
        <div className="relative flex-1 background-gradient flex justify-end text-center pb-8 flex-col h-72 rounded-md px-2 mx-auto min-w-[250px] max-w-[300px] sm:max-w-none xs:min-w-[300px] xl:min-w-[400px]">
          <Parallax speed={5}>
            <div className="absolute left-1/2 -translate-x-1/2 -top-44 aspect-[1.4] h-44">
              <Image className='object-contain' src="/benefit-2.png" fill sizes='100%' alt='Ламимейкеров экспертного класса' />
            </div>
          </Parallax>
          <div className="text-3xl font-black">
            Ламимейкеров экспертного класса
          </div>
        </div>
        <div className="relative flex-1 background-gradient flex justify-end text-center pb-8 flex-col h-72 rounded-md px-2 mx-auto min-w-[250px] max-w-[300px] sm:max-w-none xs:min-w-[300px] xl:min-w-[400px]">
          <Parallax speed={6}>
            <div className="absolute left-1/2 -translate-x-1/2 -top-64 aspect-[1] h-80">
              <Image className='object-contain' src="/benefit-3.png" fill sizes='100%' alt='Гарантия результата либо вернем деньги' />
            </div>
          </Parallax>
          <div className="text-3xl font-black">
            Гарантия результата либо вернем деньги
          </div>
        </div>
        <div className="relative flex-1 background-gradient flex justify-end text-center pb-8 flex-col h-72 rounded-md px-2 mx-auto min-w-[250px] max-w-[300px] sm:max-w-none xs:min-w-[300px] xl:min-w-[400px]">
          <Parallax speed={7}>
            <div className="absolute left-1/2 -translate-x-1/2 -top-64 aspect-[1] h-72">
              <Image className='object-contain' src="/benefit-4.png" fill sizes='100%' alt='Авторская техника ламинирования' />
            </div>
          </Parallax>
          <div className="text-3xl font-black">
            Авторская техника ламинирования
          </div>
        </div>
        <div className="relative flex-1 background-gradient flex justify-end text-center pb-8 flex-col h-72 rounded-md px-2 mx-auto min-w-[250px] max-w-[300px] sm:max-w-none xs:min-w-[300px] xl:min-w-[400px]">
          <Parallax speed={5}>
            <div className="absolute left-1/2 -translate-x-1/2 -top-64 aspect-[1] h-80">
              <Image className='object-contain' src="/benefit-5.png" fill sizes='100%' alt='Собственное производство' />
            </div>
          </Parallax>
          <div className="text-3xl font-black">
            Собственное <br /> производство
          </div>
        </div>
        <div className='hidden xs:block flex-1 px-2 mx-auto min-w-[250px] max-w-[300px] sm:max-w-none xs:min-w-[300px] xl:min-w-[400px]'></div>
      </div>
    </section>
  )
}
