import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/katakana">Katakana</Link>
          </li>
          <li>
            <Link to="/hiragana">Hiragana</Link>
          </li>
          <li>
            <Link to="/kanji">Kanji</Link>
          </li>
          <li>
            <Link to="/study">Study</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;