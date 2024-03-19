import React from 'react';
import GameCard from './game-card.jsx';
import { hiragana, katakana } from '../dist/kana.js';
import useUserStore from './store.js';


const Game = () => {
  // ZUSTAND state
  const { score, startGame, endGame, gameStart, gameEnd, nextMatch, setNext, selected, updateSelected } = useUserStore();
  const deck = [];
  for (var i = 0; deck.length < 5; i++) {
    var rando = (Math.round(Math.random() * katakana.length));
    deck.push(katakana[rando + i]);
  };

  if (gameStart) {
    return <div className="game-wrapper">
      <div className="progress-bar-wrapper">
        <label>Matches</label>
        <progress value={5 - deck.length} max={5}></progress>
      </div>
      <div className="tiles-wrapper">
        <div className="left-tiles">{deck.map((card, index) => <GameCard index={index} text={Object.keys(card)[0]} match={Object.values(card)[0]} />)}</div>
        <div className="right-tiles">{deck.map((card, index) => <GameCard index={index} text={Object.values(card)[0]} match={Object.keys(card)[0]} />)}</div>
      </div>
    </div>
  }
  if (gameEnd) {
    return <>
      <div>Game Over</div>
      <div>Score: {score}</div>
      <button onClick={() => { startGame(true) }}>Start Game</button>
    </>
  } else {
    return <button onClick={() => { startGame(true) }}>Start Game</button>
  }
}

export default Game