import { ModalTypes } from "@/app/modal/modal";
import { create } from "zustand";

interface ModalState {
  isOpen: boolean
  type: ModalTypes
  openModal: (type: ModalTypes) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: "appointment",
  openModal: (type) => set({ isOpen: true, type: type }),
  closeModal: () => set({ isOpen: false }),
}));