import React from 'react';
import './styles.css';

const partOfSpeechColors = {
  substantiv: '#102e5e',
  verb: '#4caf50',
  adjectiv: '#2196f3',
  adverb: '#ff9800',
  numeral: '#9c27b0',
  interjecție: '#fc67f0',
};

export default function Word({ word }) {
  const color = partOfSpeechColors[word.partOfSpeech];

  return (
    <div className="word" style={{ borderColor: color }}>
      <div className="word-header">
        <div className="img-wrapper">
          <img className="word-image" src={`/images/${word.slug}.jpeg`} alt={word.word} />
          <div className="gradient"></div>
        </div>
        <div className="word-header-info">
          <h2 className="word-title">{word.word}</h2>
          <span className="word-part-of-speech" style={{ backgroundColor: color }}>
            {word.partOfSpeech}
          </span>
          <span className="word-definition">{word.definition}</span>
        </div>
      </div>
      <div className="word-content">
        {word.examples.length > 0 && (
          <div className="word-examples">
            <label className="label">Exemple</label>
            <ul>
              {word.examples.map((example, index) => (
                <li key={index} className="example" dangerouslySetInnerHTML={{ __html: `„${example}”` }}></li>
              ))}
            </ul>
          </div>
        )}
        <div className="word-etymology">
          <span className="label">Etimologie: </span>
          <span>{word.etymology}</span>
        </div>
      </div>
    </div>
  );
}
