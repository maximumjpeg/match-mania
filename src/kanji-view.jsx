import React from 'react';
import useUserStore from './store.js';

const KanjiView = () => {
  // Zustand state
  const currentKanji = useUserStore((state) => state.currentKanji);
  return <div className="view">
    {currentKanji}
  </div>
}

export default KanjiView;