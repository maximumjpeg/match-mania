import React from 'react';

const GameCard = (props) => {
  return <div>
    {props.japanese ? props.japanase : props.romaji}
  </div>
}

export default GameCard