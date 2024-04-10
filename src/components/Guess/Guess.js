import React from 'react';
import { range } from '../../utils';


function Guess({guess}) {

  function returnClass(ind) {
    return guess.statuses[ind] !== '' ?
      ` ${guess.statuses[ind]}` :
      ''
  }

  return (
  <div className='guess'>
    {range(0, 5, 1).map(ind => {
      return <span className={'cell' + returnClass(ind)} key={guess.id + `-${ind}`}>{guess.value !== '' ? guess.value[ind] : ''}</span>})}
  </div>);
}

export default Guess;
