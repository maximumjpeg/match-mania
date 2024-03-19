import React from 'react';

const Landing = (props) => {
  return <div className="landing-wrapper">
    <h1>Welcome to Match Mania!</h1>
    <h1 className="big-emoji">🏯🇯🇵🇯🇵🏯</h1>
    <h5>Practice studying Kana</h5>
    <p>Log in here</p>
    <button onClick={() => { props.setLoggedIn(true) }}>LOG IN</button>
  </div>
}

export default Landing