import { Training } from "@/api/getTrainings";
import { create } from "zustand";

interface TrainingState {
  trainings: Training[],
  setTrainings: (trainings: Training[]) => void
}

export const useTrainingStore = create<TrainingState>((set) => ({
  trainings: [],
  setTrainings: (trainings) => set({ trainings: trainings })
}));