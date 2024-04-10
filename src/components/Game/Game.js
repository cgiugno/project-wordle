import React from 'react';

import { range, sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import Banner from '../Banner/Banner';
import Keyboard from '../Keyboard/Keyboard';
import RestartGameButton from '../RestartGameButton/RestartGameButton';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function Game() {
  const [guesses, setGuesses] = React.useState(() => initializeState());
  const [guessNum, setGuessNum] = React.useState(0);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  console.log(answer);

  function initializeState() {
    const newArray = [];
    range(0, NUM_OF_GUESSES_ALLOWED, 1).forEach((ind) => {
      newArray.push({
        id: crypto.randomUUID(),
        value: '',
        statuses: new Array(5).fill('')
      });
    });
    return newArray;
  }

  function addGuess(guessString) {
    if (guessNum > 5) { return; }

    const newGuesses = [...guesses];
    const guessStatuses = checkGuess(guessString, answer);
    newGuesses[guessNum].value = guessString;
    newGuesses[guessNum].statuses = guessStatuses.map(({letter, status}) => status);

    setGuesses(newGuesses);
    setGuessNum(guessNum + 1);

  }

  function checkWinState() {
    const guessIndex = Math.max(Math.min(guessNum - 1, guesses.length - 1), 0);
    return (guesses[guessIndex].value === answer) ? true : false;
  }

  function checkLetter(letter) {
    var status='';
    guesses.filter((guess, ind) => ind < guessNum).forEach((guess) => {
      const letterVal = guess.value.indexOf(letter);
      if (letterVal !== -1) {
        status = guess.statuses[letterVal]
      }
    });
    return status;
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setGuesses(initializeState());
    setGuessNum(0);
  }

  const currWinState = checkWinState();

  return <>
    <GuessList guessList={guesses}/>
    <GuessInput addGuess={addGuess} isEnabled={(currWinState) ? false : true}/>
    <Keyboard checkLetter={checkLetter}/>
    {(guessNum > 5 || currWinState) && <Banner bannerType={(currWinState) ? 'happy' : 'sad'} answerText={currWinState ? `${guessNum} guesses` : answer}>
        <RestartGameButton resetGame={resetGame}/>
      </Banner>}
  </>;
}

export default Game;
