import React, { useEffect } from 'react';
import KanjiCard from './card.jsx';
import KanjiView from './kanji-view.jsx';
import useUserStore from './store.js';
import { kanji } from '../dist/kanji.js';

const Kanji = (props) => {
  const { updateKanji } = useUserStore();
  useEffect(() => {updateKanji('test')}, []);
  return <div className="gallery-wrapper">
    <KanjiView />
      <div className="gallery">{kanji.map((character) => <KanjiCard key={Object.keys(character)[0]} character={character} japanese={Object.keys(character)[0]} translation={Object.values(character)[0]} />)}</div>
    </div>
}

export default Kanji