import { create } from 'zustand';

const useUserStore = create((set) => ({
  currentKana: '',
  count: 7,
  updateKana: (newKana) => set({ current: newKana }),
  // When we call 'set', if you need access to state, just argument it in!
  // It's not required if you're updating that state with only data from outside the store
  updateKana: (newKana) => set((state) => ({ currentKana: newKana })),

}));

export default useUserStore;