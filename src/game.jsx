import React from 'react';
import GameCard from './game-card.jsx';
import { hiragana, katakana } from '../dist/kana.js';
import useUserStore from './store.js';


const Game = () => {
  // ZUSTAND state
  const { score, startGame, endGame, gameStart, gameEnd } = useUserStore();
  const deck = [];
  for (var i = 0; i < 5; i++) {
    deck.push(katakana[(Math.floor(Math.random() * 2.0)) + i]);
  };
  console.log(deck);

  if (gameStart) {
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
  if (gameEnd) {
    return <>
      <div>Game Over</div>
      <div>Score: {score}</div>
    </>
  } else {
    return <button onClick={() => { startGame(true) }}>Start Game</button>
  }
}

export default Game