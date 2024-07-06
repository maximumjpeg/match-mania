import React from 'react';
import GameCard from './game-card.jsx';
import { hiragana, katakana } from '../dist/kana.js';
import useUserStore from './store.js';


const Game = () => {
  // helper functions
  const randomSert = (array, element) => {
    var randomIndex = Math.floor(Math.random() * (array.length + 1));
    array.splice(randomIndex, 0, element);
  }
  // ZUSTAND state
  const { score, startGame, endGame, gameStart, gameEnd, nextMatch, setNext, selected, updateSelected } = useUserStore();
  const deck = [];
  var romajiShuff = new Array(5);
  var kanaShuff = new Array(5);
  for (var i = 0; deck.length < 5; i++) {
    var rando = (Math.round(Math.random() * katakana.length));
    var curr = katakana[rando + i];
    // console.log('curr', (Object.values(curr))[0], (Object.keys(curr))[0]);
    console.log('curr', curr, curr );
    deck.push(curr);
    // romajiShuff.unshift(katakana[rando + i]);
    // kanaShuff.push(katakana[rando + i]);
    randomSert(kanaShuff, curr);
    randomSert(romajiShuff, curr);
    // blank arrays with length defined then splice random indices into them to populate?
  };


  if (gameStart) {
    if (romajiShuff && kanaShuff) {
    return <div className="game-wrapper">
      <div className="progress-bar-wrapper">
        <label>Matches</label>
        <progress value={5 - deck.length} max={5}></progress>
      </div>
      <div className="tiles-wrapper">
        <div className="left-tiles">{kanaShuff.map((card, index) => <GameCard index={index} text={Object.keys(card)[0]} match={Object.values(card)[0]} />)}</div>
        <div className="right-tiles">{romajiShuff.map((card, index) => <GameCard index={index} text={Object.values(card)[0]} match={Object.keys(card)[0]} />)}</div>
      </div>
    </div>
    }
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