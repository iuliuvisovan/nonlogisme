import React from 'react';
import './styles.css';

export default function Word({ word }) {
  return (
    <div className="word">
      <div className="word-header">
        <img className="word-image" src={`/images/${word.slug}.png`} alt={word.word} />
        <div className="word-header-info">
          <h2 className="word-title">{word.word}</h2>
          <span className="word-part-of-speech">{word.partOfSpeech}</span>
          <span className="word-definition">{word.definition}</span>
        </div>
      </div>
      <div className="word-content">
        <div className="word-examples">
          <span className="label">Exemple</span>
          <ul>
            {word.examples.map((example, index) => (
              <li key={index} className="example">
                „{example}”
              </li>
            ))}
          </ul>
        </div>
        <div className="word-etymology">
          <span className="label">Etimologie</span>
          <p>{word.etymology}</p>
        </div>
      </div>
    </div>
  );
}
