import React from 'react'
import WhySvg from './svg/why.svg'

export const Advantages = () => {
  return (
    <section className='wrapper px-2 sm:px-3 md:px-4 relative'>
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
    </section>
  )
}
