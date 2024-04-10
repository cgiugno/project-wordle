import React from 'react';

function Banner({bannerType, answerText, children}) {
  function createMessage() {
    return (bannerType === 'happy') ?
      (
        <p>
          <strong>Congratulations!</strong> Got it in
          {' '}
          <strong>{answerText}</strong>.
        </p>
      ) :
      (
        <p>Sorry, the correct answer is <strong>{answerText}</strong></p>
      )
  }
  return (
    <div className={`${bannerType} banner`}>
      {createMessage()}
      {children}
    </div>
  );
}

export default Banner;
