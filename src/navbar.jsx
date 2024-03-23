import React from 'react';

const NavBar = (props) => {
  return <div className="navbar">
    <p><a href="home">Home</a></p>
    <p><a href="Hiragana">Hiragana</a></p>
    <p><a href="Katakana">Katakana</a></p>
    {/* <p><a href="game-mode">Game Mode</a></p> */}
    <p><a href="Kanji">Kanji</a></p>
    <p><a href="Study">Study</a></p>
  </div>
}

export default NavBar