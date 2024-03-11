import React from 'react';
import GameCard from './game-card.jsx';
import { hiragana, katakana } from '../dist/kana.js';


const Game = () => {
const deck = [];
for (var i = 0; i < 5; i++) {
  deck.push(katakana[Math.floor(Math.random() * 10.0)]);
};
console.log(deck);
  return <div className="game-wrapper">
    <div>Progress Bar</div>
    <div className="tiles-wrapper">
      <div className="left-tiles">{deck.map((card, index) => <GameCard japanese={Object.keys(card)[0]} />)}</div>
      <div className="right-tiles">{deck.map((card, index) => <GameCard romaji={Object.values(card)[0]} />)}</div>
    </div>
  </div>
}

export default Game