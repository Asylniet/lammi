import Button from '@/components/button'
import React from 'react'
import { staff } from '../staff'
import { useSearchParams } from 'next/navigation'

export const AppointmentModal = () => {
  const searchParams = useSearchParams()
  const master = searchParams.get('master')
  const [selected, setSelected] = React.useState(master || staff[0].name)

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value)
  }

  React.useEffect(() => {
    setSelected(master || staff[0].name);
  }, [master])
  return (
    <>
      <h1 className='font-bold uppercase text-center text-xl px-2 mb-2'>ЗАПИСАТЬСЯ НА ПРОЦЕДУРУ</h1>
      <div className="bg-accent w-full h-px mb-6"></div>
      <form className='mx-auto max-w-[600px] px-6'>
        <div className='mb-6'>
          <label htmlFor='name'>Имя</label>
          <input type="text" placeholder='Имя' name='name' id='name' />
        </div>
        <div className='mb-6'>
          <label htmlFor='surname'>Фамилия</label>
          <input type="text" placeholder='Фамилия' name='surname' id='surname' />
        </div>
        <div className='mb-6 flex gap-5'>
          <div className='flex-1'>
            <label htmlFor='date'>Выберите дату</label>
            <input type="date" name='date' />
          </div>
          <div className='flex-1'>
            <label htmlFor='time'>Выберите время</label>
            <input type="time" name='time' />
          </div>
        </div>
        <div className='mb-12'>
          <label htmlFor='course'>Выберите Мастера</label>
          <select name="master" id="master" value={selected} onChange={handleSelect} key={master}>
            {staff.map((staff, index) => (
              <option key={index} value={staff.name}>{staff.name}, {staff.position}</option>
            ))}
          </select>
        </div>
        <div className="mx-auto w-fit">
          <Button className='text-foreground' type='button'>
              Записаться на прием
          </Button>
        </div>
      </form>
    </>
  )
}
