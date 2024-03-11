import React from 'react';

const GameCard = (props) => {
  return <div className="tile">
    {props.japanese ? props.japanese : props.romaji}
  </div>
}

export default GameCard