
import React from 'react'
import { Numbers } from '../../components/numbers'
import { UsSvg } from '../svg/us.svg'
import { WeSvg } from '../svg/we.svg'
import { ClientCount } from '@/api/clients';

interface StatisticsProps {
  clients: ClientCount[];
}

export const Statistics: React.FC<StatisticsProps> = ({ clients }) => {
  const total = clients.reduce((acc, cur) => acc + cur.clients_count, 0);
  const startCount = new Date(2024, 1, 7);
  const differenceInDays = Math.floor((new Date().getTime() - startCount.getTime()) / (1000 * 3600 * 24));
  return (
    <section className='wrapper px-2 sm:px-3 md:px-4 flex flex-wrap gap-20 justify-around py-10 pt-20'>
      <div className="flex flex-col items-end py-10 min-w-[280px]">
        <div className="relative mb-8 sm:mb-14">
          <h1 className='uppercase font-black text-4xl sm:text-5xl'>посетили:</h1>
          <div className="absolute -top-full left-0 -translate-y-1/2 -translate-x-1/3">
            <UsSvg />
          </div>
        </div>
        <Numbers className='mb-8 sm:mb-14' number={total} />
        <h2 data-aos="fade-up" data-aos-delay="300" className="w-full uppercase text-center text-xl font-black">
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
        <Numbers className='mb-8 sm:mb-14' number={1000 + differenceInDays} />
        <h2 data-aos="fade-up" data-aos-delay="300" className="w-full uppercase text-center text-xl font-black">
          довольных студентов
        </h2>
      </div>
    </section>
  )
}
