import { create } from 'zustand';

interface EnrollmentState {
  sampleCount: number;
  isComplete: boolean;
  setSampleCount: (sampleCount: number) => void;
  setComplete: (isComplete: boolean) => void;
}

export const useEnrollmentStore = create<EnrollmentState>((set) => ({
  sampleCount: 0,
  isComplete: false,
  setSampleCount: (sampleCount) => set({ sampleCount }),
  setComplete: (isComplete) => set({ isComplete })
}));