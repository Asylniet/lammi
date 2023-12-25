"use client"
import Button from '@/components/button'
import React from 'react'
import { AppointmentModal } from './appointment.modal';
import { CourseModal } from './course.modal';

export type ModalTypes = 'appointment' | 'course' | 'basket';

interface IProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  type: ModalTypes
}

const modals = {
  'appointment': AppointmentModal,
  'course': CourseModal,
  'basket': () => <h1>Basket</h1>,
}

export const Modal: React.FC<IProps> = ({ isOpen, setIsOpen, type }) => {
  return (
    <div className={`${isOpen ? "opacity-1 visible" : "invisible opacity-0"} transition-all fixed top-0 left-0 w-screen h-screen z-30 flex items-center justify-center`}>
      <div className="absolute top-0 left-0 bg-background/80 w-full h-full" onClick={() => setIsOpen(!isOpen)} />
      <div className="modal w-11/12  sm:w-4/5 rounded-3xl bg-foreground text-background py-8">
        {modals[type]()}
      </div>
    </div>
  )
}
