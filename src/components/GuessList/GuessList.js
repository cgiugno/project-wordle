import React from 'react';
import Guess from '../Guess';

function GuessList({guessList}) {

  return (
  <div className='guess-results'>
    {guessList.map((guess) => <Guess guess={guess} key={guess.id}/>)}
  </div>);
}

export default GuessList;
