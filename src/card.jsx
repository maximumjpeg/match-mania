import React from 'react';

const Card = (props) => {
  return <div className="card" onClick={() => props.setCurrent(props.romaji)}>
    {props.japanese}
  </div>
}

export default Card