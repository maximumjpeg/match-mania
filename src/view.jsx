import React from 'react';
import { useUserStore } from './store.js'

const View = () => {
// ZUSTAND
const current = useUserStore((state) => state.current);
  return <div className="view">
    {current}
  </div>
}

export default View;