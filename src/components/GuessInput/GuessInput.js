import React from 'react';

function GuessInput({addGuess, isEnabled}) {
  const [currGuess, setCurrGuess] = React.useState('');

  function submitGuess(event) {
    event.preventDefault();
    
    addGuess(currGuess);

    setCurrGuess('');
  }

  return (
  <form className="guess-input-wrapper" onSubmit={(event) => submitGuess(event)}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input  id="guess-input" 
            type="text" 
            value={currGuess} 
            onChange={(event)=> setCurrGuess(event.target.value.toLocaleUpperCase())}
            minLength={5}
            maxLength={5}
            pattern='[A-Za-z]{5}'
            title='e.g., five letter word'
            disabled={!isEnabled}/>
  </form>);
}

export default GuessInput;