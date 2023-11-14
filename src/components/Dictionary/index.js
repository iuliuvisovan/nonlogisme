import React from 'react';
import Word from '../Word';

function Dictionary({ words }) {
  return (
    <div>
      {words.map((word, index) => (
        <Word key={index} word={word} />
      ))}
    </div>
  );
}

export default Dictionary;
