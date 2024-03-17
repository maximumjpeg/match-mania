import React from 'react';
import useUserStore from './store.js';

const KanjiCard = (props) => {
  // ZUSTAND
  const updateKanji = useUserStore((state) => state.updateKanji);
  // return <div className="kanji-card" onClick={() => console.log(props.translation)}>
  return <div className="kanji-card" onClick={() => {updateKanji(props.translation)}}>
    {props.japanese}
  </div>
}

export default KanjiCard