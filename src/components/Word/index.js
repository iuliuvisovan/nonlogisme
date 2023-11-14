import React from 'react';
import './styles.css';

function Word({ word }) {
  return (
    <div className="word">
      <h2>{word.word}</h2>
      <p>{word.definition}</p>
      {word.examples.map((example, index) => (
        <p key={index}>
          <b>{example}</b>
        </p>
      ))}
    </div>
  );
}

export default Word;
