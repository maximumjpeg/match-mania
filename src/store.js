import { create } from 'zustand';

export const useUserStore = create((set) => ({
  current: {},
  setCurrent: (newKana) => set({current: newKana}),
}));