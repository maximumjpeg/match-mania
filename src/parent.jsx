import React, { useState } from 'react';
// const katakana = require('../dist/katakana.js');
import Gallery from './gallery.jsx';
import View from './view.jsx';
import Landing from './landing.jsx';

const Parent = () => {
  const [loggedIn, setLoggedIn] = useState('false');
  const [current, setCurrent] = useState('');
  if (!loggedIn) {
    return <Landing setLoggedIn={setLoggedIn} />
  } else if (loggedIn) {
    return <div className="app-wrapper">
    <Landing setLoggedIn={setLoggedIn} />
  </div>
  }
};

export default Parent

// return <div className="app-wrapper">
// <h1>Match Mania</h1>
// <View current={current} />
// <Gallery setCurrent={setCurrent} />
// </div>