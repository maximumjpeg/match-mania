import React from 'react';
import useUserStore from './store.js';

const View = () => {
  // Zustand state
  const currentKana = useUserStore((state) => state.currentKana);
  return <div className="view">
    {currentKana}
  </div>
}

export default View;