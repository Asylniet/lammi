import Button from '@/components/button'
import React from 'react'
import { Branch } from '@/api/branch'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getCategories, getDates, getServices, getSpeicalists, getTimes, makeAppointment } from '@/api/appointment'
import { CustomDatePicker } from './courseSlides/datePicker'
import { formatPhone } from '@/lib/formatPhone'

interface Props {
  branches: Branch[],
}

export const AppointmentModal: React.FC<Props> = ({ branches }) => {
  const [phone, setPhone] = React.useState('');
  const [branchId, setBranchId] = React.useState<number | undefined>();
  const [categoryId, setCategoryId] = React.useState<number | undefined>();
  const [serviceId, setServiceId] = React.useState<number | undefined>();
  const [specialistId, setSpecialistId] = React.useState<number | undefined>();
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(undefined);
  const [selectedHour, setSelectedHour] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    setCategoryId(undefined);
  }, [branchId]);

  React.useEffect(() => {
    setServiceId(undefined);
  }, [categoryId]);

  React.useEffect(() => {
    setSpecialistId(undefined);
  }, [serviceId]);

  React.useEffect(() => {
    setSelectedDate(undefined);
  }, [specialistId]);

  React.useEffect(() => {
    setSelectedHour(undefined);
  }, [selectedDate]);

  const categoryDisabled = !branchId || branchId < 0;
  const serviceDisabled = categoryDisabled || !categoryId || categoryId < 0;
  const specialistDisabled = serviceDisabled || !serviceId || serviceId < 0;
  const dateDisabled = specialistDisabled || !specialistId || specialistId < 0;
  const hourDisabled = dateDisabled || !selectedDate;

  const useCategoryQuery = (branchId?: number) => useQuery({
    queryKey: ['categories', branchId],
    queryFn: () => getCategories(branchId!),
    enabled: !categoryDisabled,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const categoryQuery = useCategoryQuery(branchId);

  const useServiceQuery = (branchId?: number, categoryId?: number) => useQuery({
    queryKey: ['services', branchId, categoryId],
    queryFn: () => getServices(branchId!, categoryId!),
    enabled: !serviceDisabled,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const serviceQuery = useServiceQuery(branchId, categoryId);

  const useSpecialistQuery = (branchId?: number, serviceId?: number) => useQuery({
    queryKey: ['specialists', branchId, serviceId],
    queryFn: () => getSpeicalists(branchId!, serviceId!),
    enabled: !specialistDisabled,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const specialistQuery = useSpecialistQuery(branchId, serviceId);

  const useDateQuery = (branchId?: number, serviceId?: number, specialistId?: number) => useQuery({
    queryKey: ['dates', branchId, serviceId, specialistId],
    queryFn: () => getDates(branchId!, serviceId!, specialistId!),
    enabled: !dateDisabled,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const dateQuery = useDateQuery(branchId, serviceId, specialistId);

  const useHourQuery = (branchId?: number, serviceId?: number, specialistId?: number, date?: Date) => useQuery({
    queryKey: ['hours', branchId, serviceId, specialistId, date],
    queryFn: () => getTimes(branchId!, serviceId!, specialistId!, date!.toISOString().slice(0, 10)),
    enabled: !hourDisabled,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const hourQuery = useHourQuery(branchId, serviceId, specialistId, selectedDate);

  const appointmentMutation = useMutation({
    mutationFn: makeAppointment,
    mutationKey: ['appointment'],
    onSuccess: (data) => {
      window.location.href = data;
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dateId = dateQuery.data?.find(date => new Date(date.name).setHours(0, 0, 0, 0) === selectedDate?.setHours(0, 0, 0, 0))?.id;
    appointmentMutation.mutate({
      phone_number: formatPhone(phone),
      branch_id: branchId!,
      category_id: categoryId!,
      service_id: serviceId!,
      employee_id: specialistId!,
      date_id: dateId!,
      time_id: selectedHour!,
    });
  }

  return (
    <>
      <h1 className='font-bold uppercase text-center text-xl px-2 mb-2'>ЗАПИСАТЬСЯ НА ПРОЦЕДУРУ</h1>
      <div className="bg-accent w-full h-px mb-6"></div>
      <form onSubmit={onSubmit} className='mx-auto max-w-[600px] px-6'>
        <div className='mb-6'>
          <label htmlFor='phone'>Номер телефона</label>
          <input type="tel" placeholder='+7 777 777 77 77' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className='mb-6'>
          <label htmlFor='branch'>Выберите филиал</label>
          <select name="branch" id="branch" value={branchId} onChange={(e) => setBranchId(parseInt(e.target.value))}>
            <option value="-1">Не выбрано</option>
            {branches.map((branch, index) => (
              <option key={index} value={branch.id}>{branch.name}</option>
            ))}
          </select>
        </div>
        <div className={`mb-6 ${!categoryQuery.isFetched && "opacity-50 pointer-events-none"}`}>
          <label htmlFor='category'>Выберите категорию</label>
          <select 
            name="category" 
            id="category" 
            value={categoryId} 
            onChange={(e) => setCategoryId(parseInt(e.target.value))} 
            key={branchId}
          >
            {!categoryQuery.isLoading && !categoryQuery.isError && categoryQuery.data && categoryQuery.data.length > 0 && <option value={-1}>Не выбрано</option>}
            {categoryQuery.isError && <option value={-2}>Произошла ошибка</option>}
            {categoryQuery.isLoading && <option>Загрузка...</option>}
            {categoryQuery.isSuccess && (
              categoryQuery.data.length > 0 ? (
                categoryQuery.data.map((category, index) => (
                  <option key={index} value={category.id}>{category.name}</option>
                ))
              ) : <option value={-3}>Ничего не найдено</option>
            )}
          </select>
        </div>
        <div className={`mb-12 ${!serviceQuery.isFetched && "opacity-50 pointer-events-none"}`}>
          <label htmlFor='course'>Выберите Сервис</label>
          <select 
            name="master" 
            id="master" 
            value={serviceId} 
            onChange={(e) => setServiceId(parseInt(e.target.value))} 
            key={branchId}
          >
            {!serviceQuery.isLoading && !serviceQuery.isError && serviceQuery.data && serviceQuery.data.length > 0 && <option value={-1}>Не выбрано</option>}
            {serviceQuery.isError && <option value={-2}>Произошла ошибка</option>}
            {serviceQuery.isLoading && <option>Загрузка...</option>}
            {serviceQuery.isSuccess && (
              serviceQuery.data.length > 0 ? (
                serviceQuery.data.map((service, index) => (
                  <option key={index} value={service.id}>{service.name}</option>
                ))
              ) : <option value={-3}>Ничего не найдено</option>
            )}
          </select>
        </div>
        <div className={`mb-12 ${!specialistQuery.isFetched && "opacity-50 pointer-events-none"}`}>
          <label htmlFor='course'>Выберите Специалиста</label>
          <select 
            name="master" 
            id="master" 
            value={specialistId} 
            onChange={(e) => setSpecialistId(parseInt(e.target.value))} 
            key={serviceId}
          >
            {!specialistQuery.isLoading && !specialistQuery.isError && specialistQuery.data && specialistQuery.data.length > 0 && <option value={-1}>Не выбрано</option>}
            {specialistQuery.isError && <option value={-2}>Произошла ошибка</option>}
            {specialistQuery.isLoading && <option>Загрузка...</option>}
            {specialistQuery.isSuccess && (
              specialistQuery.data.length > 0 ? (
                specialistQuery.data.map((specialist, index) => (
                  <option key={index} value={specialist.id}>{specialist.name}</option>
                ))
              ) : <option value={-3}>Ничего не найдено</option>
            )}
          </select>
        </div>
        <div className='mb-6 flex gap-5'>
          <div className={`flex-1 ${dateDisabled && "opacity-50 pointer-events-none"}`}>
            <label htmlFor='date'>Выберите дату</label>
            <CustomDatePicker 
              enabledDates={dateQuery.data} 
              disabled={dateDisabled} 
              selectedDate={selectedDate} 
              setSelectedDate={setSelectedDate} 
            />
          </div>
          <div className='flex-1'>
            <div className={`mb-12 ${!hourQuery.isFetched && "opacity-50 pointer-events-none"}`}>
              <label htmlFor='time'>Выберите время</label>
              <select 
                name="master" 
                id="master" 
                value={selectedHour} 
                onChange={(e) => setSelectedHour(parseInt(e.target.value))} 
                key={selectedDate?.getTime()}
              >
                {!hourQuery.isLoading && !hourQuery.isError && hourQuery.data && hourQuery.data.length > 0 && <option value={-1}>Не выбрано</option>}
                {hourQuery.isError && <option value={-2}>Произошла ошибка</option>}
                {hourQuery.isLoading && <option>Загрузка...</option>}
                {hourQuery.isSuccess && (
                  hourQuery.data.length > 0 ? (
                    hourQuery.data.map((hour, index) => (
                      <option key={index} value={hour.id}>{hour.name}</option>
                    ))
                  ) : <option value={-3}>Ничего не найдено</option>
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="mx-auto w-fit">
          <Button status={appointmentMutation.status} disabled={selectedHour === undefined || selectedHour < 0 || !phone} className='text-foreground' type='submit'>
              Записаться на прием
          </Button>
        </div>
      </form>
    </>
  )
}
