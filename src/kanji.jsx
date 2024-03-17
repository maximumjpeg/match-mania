import React, { useEffect } from 'react';
import KanjiCard from './kanji-card.jsx';
import KanjiView from './kanji-view.jsx';
import useUserStore from './store.js';
import { kanji } from '../dist/kanji.js';

const Kanji = (props) => {
  const { updateKanji } = useUserStore();
  useEffect(() => { updateKanji('') }, []);
  return <div className="kanji-gallery-wrapper">
    <KanjiView />
    <div className="kanji-gallery">
      {kanji.map((character) => <KanjiCard key={Object.keys(character)[0]} character={character} japanese={Object.keys(character)[0]} translation={Object.values(character)[0]} />)}
    </div>
  </div>
}

export default Kanji