import { create } from 'zustand';

const useUserStore = create((set) => ({
  currentKana: '',
  currentKanji: '',
  count: 7,
  score: 0,
  gameStart: false,
  gameEnd: false,
  nextMatch: '',
  selected: 0,
  // updateKana: (newKana) => set({ current: newKana }),
  // When we call 'set', if you need access to state, just argument it in!
  // It's not required if you're updating that state with only data from outside the store
  updateKana: (newKana) => set((state) => ({ currentKana: newKana })),
  updateKanji: (newKanji) => set((state) => ({ currentKanji: newKanji })),
  startGame: (gameState) => set((state) => ({ gameStart: gameState })),
  endGame: (gameState) => set((state) => ({ gameEnd: gameState })),
  setNext: (needMatch) => set((state) => ({ nextMatch: needMatch })),
  updateSelected: (amount) => set((state) => ({ selected: amount }))
  // updateKana: (newKana) => set({ current: newKana }),
}));

export default useUserStore;