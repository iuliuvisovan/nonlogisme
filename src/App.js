import React from 'react';
import Dictionary from './components/Dictionary';
import wordList from './word-list';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={`/images/nonlogism.png`} alt="Nonlogism" />
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
      <Dictionary words={wordList} />
    </div>
  );
}

export default App;
