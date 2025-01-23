import { create } from 'zustand';

interface UserState {
  birthDate: Date | null;
  setBirthDate: (date: Date) => void;
  zodiacSign: string | null;
  setZodiacSign: (sign: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  birthDate: null,
  setBirthDate: (date) => set({ birthDate: date }),
  zodiacSign: null,
  setZodiacSign: (sign) => set({ zodiacSign: sign }),
}));