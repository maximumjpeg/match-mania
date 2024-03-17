import React from 'react';
import useUserStore from './store.js';
import { hiragana, katakana } from '../dist/kana.js';
import { kanji } from '../dist/kanji.js';
import Game from './game.jsx';
import PieChart from './pie-chart.jsx';

const Home =(props) => {
  const count = useUserStore((state) => state.count);
  return <div className="app-wrapper">
    <h1>UserDashboard</h1>
    <h5><span className="bold">{hiragana.length + katakana.length + kanji.length}</span>{' study cards in your library'}</h5>
    <PieChart />
  </div>
}

export default Home