import React from 'react';

function RestartGameButton({resetGame}) {
  return <button onClick={() => resetGame()}>
    Restart Game
  </button>;
}

export default RestartGameButton;
