import React from 'react';
import useUserStore from './store.js';
import { hiragana, katakana } from '../dist/kana.js';

const Home =(props) => {
  const count = useUserStore((state) => state.count);
  return <div className="app-wrapper">
    <h1>UserDashboard</h1>
    <h5><span className="bold">{hiragana.length + katakana.length}</span>{' total kana in your library'}</h5>
  </div>
}

export default Home