
import React from 'react'
import { Numbers } from './numbers'
import { UsSvg } from './svg/us.svg'
import { WeSvg } from './svg/we.svg'

export const Statistics = () => {
  return (
    <section className='wrapper px-2 sm:px-3 md:px-4 flex flex-wrap gap-20 justify-around py-10 pt-20'>
      <div className="flex flex-col items-end py-10 min-w-[280px]">
        <div className="relative mb-8 sm:mb-14">
          <h1 className='uppercase font-black text-4xl sm:text-5xl'>посетили:</h1>
          <div className="absolute -top-full left-0 -translate-y-1/2 -translate-x-1/3">
            <UsSvg />
          </div>
        </div>
        <Numbers className='mb-8 sm:mb-14' number={5887} />
        <h2 className="w-full uppercase text-center text-xl font-black">
          довольных клиентов
        </h2>
      </div>
      <div className="flex flex-col items-end py-10 min-w-[280px]">
        <div className="relative mb-8 sm:mb-14">
          <h1 className='uppercase font-black text-4xl sm:text-5xl'>обучили:</h1>
          <div className="absolute -top-full left-0 -translate-y-1/3 -translate-x-[85%]">
            <WeSvg />
          </div>
        </div>
        <Numbers className='mb-8 sm:mb-14' number={3216} />
        <h2 className="w-full uppercase text-center text-xl font-black">
          довольных студентов
        </h2>
      </div>
    </section>
  )
}
