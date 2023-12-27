import { Training, bookTraining } from '@/api/training';
import Button from '@/components/button';
import { useMutation } from '@tanstack/react-query';
import React from 'react'
import { useSwiper } from 'swiper/react';

interface Props {
  trainings: Training[],
}

export const First: React.FC<Props> = ({ trainings }) => {
  const swiper = useSwiper();
  const mutation = useMutation({
    mutationFn: bookTraining,
    mutationKey: ['bookTraining'],
    onSuccess: () => {
      swiper.slideNext();
    }
  });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ phone, trainingId: selected });
  }

  const [selected, setSelected] = React.useState<number>(trainings[0].id);
  const [phone, setPhone] = React.useState<string>('');
  return (
    <>
      <h1 className='font-bold uppercase text-center text-xl px-2 mb-4'>ЗАПИСАТЬСЯ НА ПРОЦЕДУРУ</h1>
        <div className="bg-accent w-full h-px mb-6"></div>
        <form className='flex flex-col h-full mx-auto max-w-[600px] px-6' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='phone'>Номер телефона</label>
            <input type="tel" placeholder='+7 777 777 77 77' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className='mb-12'>
            <label htmlFor='course'>Выберите курс</label>
            <select name="course" id="course" value={selected} onChange={(e) => setSelected(parseInt(e.target.value))}>
              {trainings.map((training, index) => (
                <option key={index} value={training.id}>{training.name}</option>
              ))}
            </select>
          </div>
          <div className="mx-auto w-fit mt-auto">
            <Button status={mutation.status} disabled={!phone} className='text-foreground'>
                Записаться на курс
            </Button>
          </div>
      </form>
    </>
  )
}
