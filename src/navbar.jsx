import React from 'react';

const NavBar = (props) => {
  return <div className="navbar">
    {/* <a>Home</a>
    <a>Gallery</a>
    <a>Game Mode</a> */}
    <p><a href="home">Home</a></p>
    <p><a href="gallery">Gallery</a></p>
    <p><a href="game-mode">Game Mode</a></p>
  </div>
}

export default NavBar