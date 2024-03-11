import React from 'react';
import { katakana, hirgana } from '../dist/kana.jsx';

const deck = [];
for (var i = 0; i < 6; i++) {
  deck.push(katakana)
};

const Game = () => {
  return <div className="game-wrapper">
    <div>Progress Bar</div>
    <div className="tiles-wrapper">
      <div className="left-tiles">{deck.map((card) => <GameCard japanese={Object.} />)}</div>
      <div className="right-tiles">{}</div>
    </div>
  </div>
}

export Default Game