import React from 'react';

const CharacterSelector = (props) => {

  function handleChange(e){
    props.onCharacterSelected(e.target.value)
  }

  const options = props.characters.map((character, index) => {
    return <option value= {index} key={index}>
      {character.name}
    </option>
  });

  return (
    <select id="character-selector" onChange={handleChange} defaultValue="default">
    <option disabled value="default">Choose a character</option>
    {options}
    </select>
  )

}

export default CharacterSelector;
