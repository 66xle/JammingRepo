import './App.css';
import React from 'react';
import SearchBar from './Components/SearchBar.js';
import Button from './Components/Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Jammming </h1>
      </header>
      <div id="Body">
        <div id="Content">
          <div id="SearchBar">
            <h2 className="title">Search</h2>
            <SearchBar/>
            <Button />
          </div>
          <div id="Results">
            <h2 className="title">Results</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
