import React from 'react';
import GameCard from './game-card.jsx';
import { hiragana, katakana } from '../dist/kana.js';


const Game = () => {
const deck = [];
for (var i = 0; i < 5; i++) {
  deck.push(katakana[(Math.floor(Math.random() * 2.0)) + i]);
};
console.log(deck);
  return <div className="game-wrapper">
    <div className="progress-bar-wrapper">
      <label>Matches</label>
      <progress value={5 - deck.length} max={5}></progress>
    </div>
    <div className="tiles-wrapper">
      <div className="left-tiles">{deck.map((card, index) => <GameCard japanese={Object.keys(card)[0]} />)}</div>
      <div className="right-tiles">{deck.map((card, index) => <GameCard romaji={Object.values(card)[0]} />)}</div>
    </div>
  </div>
}

export default Game