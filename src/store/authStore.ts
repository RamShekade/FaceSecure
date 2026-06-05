import { create } from 'zustand';

interface AuthState {
  employeeId: string | null;
  status: 'idle' | 'enrolling' | 'authenticating' | 'verified' | 'rejected';
  setEmployeeId: (employeeId: string | null) => void;
  setStatus: (status: AuthState['status']) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  employeeId: null,
  status: 'idle',
  setEmployeeId: (employeeId) => set({ employeeId }),
  setStatus: (status) => set({ status })
}));