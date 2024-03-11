import React, { useState } from 'react';
// const katakana = require('../dist/katakana.js');
// import Gallery from '../gallery.jsx';
import View from '../view.jsx';
import Landing from '../landing.jsx';
import NavBar from '../navbar.jsx';

const Root = () => {
  const [loggedIn, setLoggedIn] = useState('false');
  const [current, setCurrent] = useState('');
  if (loggedIn && loggedIn === true) {
  return <div className="app-wrapper">
    <NavBar />
    <h1>Match Mania</h1>
    <View current={current} />
    <Katakana setCurrent={setCurrent} />
    <Hiragana />
  </div>
  } else {
    return <div className="app-wrapper">
      <Landing setLoggedIn={setLoggedIn} />
    </div>
  }
};

export default Root

