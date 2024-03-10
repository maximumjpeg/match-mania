import React from 'react';
import Card from './card.jsx';
import View from './view.jsx';
import useUserStore from './store.js';
const kana = require('../dist/kana.js');

class Kana {
  constructor(japanese, romaji, repetition, ease, interval) {
    this.japanese = japanese;
    this.romaji = romaji;
    this.repetition = repetition;
    this.ease = ease;
    this.interval = interval;
  }
};

const Gallery = (props) => {
  return <div className="gallery-wrapper">
    <View />
    <div className="gallery">{kana.katakana.map((character) => <Card key={Object.keys(character)[0]} character={character} japanese={Object.keys(character)[0]} romaji={Object.values(character)[0]} />)}</div>
  </div>
}

export default Gallery