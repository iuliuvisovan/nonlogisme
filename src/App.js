import React, { useState } from "react";
import Word from "./components/Word";
import wordList from "./word-list";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <div className="header">
        <img src={`images/nonlogism.jpeg`} alt="Nonlogism" />
        <h1>Dicționar de Nonlogisme</h1>
      </div>
      <h2>
        Ce sunt <b>nonlogismele</b>?
      </h2>
      <h3 className="subtitle">
        Un <b>"nonlogism"</b> este un cuvânt care nu există într-o limbă dar ar
        trebui să existe conform realității lingvistice. Un gol/lacună lexicală.
      </h3>
      <div className="search-bar">
        <img src="images/search.svg" alt="Caută" />
        <input
          type="text"
          value={query}
          placeholder="Caută un nonlogism..."
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <h2>Lista nonlogismelor actuale</h2>
      <div>
        {wordList
          .filter((x) => x.word.includes(query))
          .filter((x) => !x.groupId)
          .map((word) => (
            <Word
              key={word.slug}
              word={word}
              query={query}
              sisterWords={wordList.filter(
                (x) => x.groupId && x.groupId === word.slug
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
