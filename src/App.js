import React from 'react';
import Dictionary from './components/Dictionary';
import wordList from './word-list';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dicționar de Nonlogisme</h1>
      <p>
        Cuvântul <b>"Nonlogism"</b> este un termen creat pentru a descrie un cuvânt care nu există într-o limbă dar ar trebui să existe (un
        gol/lacună lexicală), iar nevoia acestuia se simte în realitatea lingvistică.
      </p>
      <Dictionary words={wordList} />
    </div>
  );
}

export default App;
