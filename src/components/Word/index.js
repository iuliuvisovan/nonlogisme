import React, { useState } from 'react';
import './styles.css';

const partOfSpeechColors = {
  substantiv: '#102e5e',
  verb: '#4caf50',
  adjectiv: '#2196f3',
  adverb: '#ff9800',
  numeral: '#9c27b0',
  interjecție: '#fc67f0',
};

export default function Word({ word: mainWord, sisterWords }) {
  const color = partOfSpeechColors[mainWord.partOfSpeech];

  const [selectedWord, setSelectedWord] = useState(mainWord);

  const showWord = (targetWord) => {
    setSelectedWord(targetWord);
  };

  return (
    <div className="word" style={{ borderColor: color }}>
      <div className="word-header">
        <div className="img-wrapper">
          <img
            className="word-image"
            src={`/images/${mainWord.useAsGroupImage ? mainWord.slug : selectedWord.slug}.jpeg`}
            alt={mainWord.word}
          />
          <div className="gradient"></div>
        </div>
        <div className="word-header-info">
          <h2 className="word-title">
            {[mainWord, ...sisterWords].map((x, i, a) => (
              <span
                className={`word-name ${mainWord.slug} ${selectedWord.slug === x.slug ? 'active' : ''}`}
                onClick={() => showWord(x)}
                title={x.definition}
              >
                {/* {selectedWord.slug !== x.slug && <img className="small-word-image" src={`/images/${x.slug}.jpeg`} alt={mainWord.word} />} */}
                {x.word}
                {i < a.length - 1 ? ', ' : ''}
              </span>
            ))}
          </h2>
          <span className="word-part-of-speech" style={{ backgroundColor: color }}>
            {selectedWord.partOfSpeech}
          </span>
          <span className="word-definition">{selectedWord.definition}</span>
        </div>
      </div>

      <WordBody word={selectedWord} />
    </div>
  );
}

function WordBody({ word }) {
  return (
    <div className={`word-content ${word.slug}`}>
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
  );
}
