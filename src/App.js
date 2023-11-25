import React from 'react';
import Word from './components/Word';
import wordList from './word-list';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={`/images/nonlogism.jpeg`} alt="Nonlogism" />
        <h1>Dicționar de Nonlogisme</h1>
      </div>
      <h2>
        Ce sunt <b>nonlogismele</b>?
      </h2>
      <span>
        <b>"Nonlogismele"</b> sunt cuvinte create pentru a descrie un cuvânt care nu există într-o limbă dar ar trebui să existe (un
        gol/lacună lexicală), iar nevoia acestora se simte în realitatea lingvistică.
      </span>
      <h2 style={{ marginTop: 40 }}>Lista nonlogismelor actuale</h2>
      <div>
        {wordList
          .filter((x) => !x.groupId)
          .map((word, index) => (
            <Word key={index} word={word} sisterWords={wordList.filter((x) => x.groupId && x.groupId === word.slug)} />
          ))}
      </div>
    </div>
  );
}

export default App;
