import React from 'react';
// import { useUserStore } from './store.js';

const Card = (props) => {
  // ZUSTAND
  // const current = useUserStore((state) => state.current);
  // const setCurrent = useUserStore((state) => state.setCurrent);
  return <div className="card" onClick={() => console.log(props.romaji)}>
    {props.japanese}
  </div>
}

export default Card