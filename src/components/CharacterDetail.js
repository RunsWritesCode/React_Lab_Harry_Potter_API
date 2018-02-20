import React from 'react';

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return (
    <div>
      <img src={props.character.image}></img>
    <h2>
      {props.character.name}
    </h2>
    <h3>
      {props.character.house}
    </h3>
  </div>
  )
}

export default CharacterDetail;
