"use client"
import React from 'react'
import { AppointmentModal } from './appointment.modal';
import { CourseModal } from './course.modal';
import { useModalStore } from '@/store/modal';
import { Training } from '@/api/training';
import { Branch } from '@/api/branch';
import { BasketModal } from './basket.modal';
import { useProductStore } from '@/store/products';

export type ModalTypes = 'appointment' | 'course' | 'basket';

const modals = {
  'appointment': AppointmentModal,
  'course': CourseModal,
  'basket': BasketModal,
}

interface Props {
  trainings: Training[],
  branches: Branch[],
}

export const Modal: React.FC<Props> = ({ trainings, branches }) => {
  const isOpen = useModalStore(state => state.isOpen);
  const closeModal = useModalStore(state => state.closeModal);
  const type = useModalStore(state => state.type);
  const products = useProductStore(state => state.products);

  const ModalComponent = modals[type];
  return (
    <div className={`${isOpen ? "opacity-1 visible" : "invisible opacity-0"} transition-all fixed top-0 left-0 w-screen h-screen z-30 flex items-center justify-center`}>
      <div className="absolute top-0 left-0 bg-background/80 w-full h-full" onClick={closeModal} />
      <div className="modal w-11/12  sm:w-4/5 rounded-3xl bg-foreground text-background py-8">
        {ModalComponent && <ModalComponent trainings={trainings} branches={branches} products={products} />}
      </div>
    </div>
  )
}
