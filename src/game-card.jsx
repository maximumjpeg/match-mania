import React from 'react';

const GameCard = (props) => {
  const userChoice = () => { };
  return <div className="tile" onClick={() => (console.log(props.match))}>
    {props.text}
  </div>
}

export default GameCard