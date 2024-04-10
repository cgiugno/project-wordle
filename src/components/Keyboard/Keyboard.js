import React from 'react';
import Key from '../Key/Key';

const alphabet = [
  {id: crypto.randomUUID(), value: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']},
  {id: crypto.randomUUID(), value: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']},
  {id: crypto.randomUUID(), value: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']}
];

function Keyboard({checkLetter}) {
  return <>
    {alphabet.map((row) => {
      return <div className='keyboard-row' key={row.id}>{row.value.map((letter) => {
        return <Key letter={letter} key={letter} status={checkLetter(letter)}/>
      })}</div>
    })}
  </>;
}

export default Keyboard;
