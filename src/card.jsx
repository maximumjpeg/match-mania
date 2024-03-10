import React from 'react';
import useUserStore from './store.js';

const Card = (props) => {
  // ZUSTAND
  const updateKana = useUserStore((state) => state.updateKana);
  // return <div className="card" onClick={() => console.log(props.romaji)}>
  return <div className="card" onClick={() => {updateKana(props.romaji)}}>
    {props.japanese}
  </div>
}

export default Card