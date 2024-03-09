import { create } from 'zustand';

const useUserStore = create((set) => ({
  current: '',
  count: 7,
  setCurrent: (newKana) => set({current: newKana}),
}));

export default useUserStore;