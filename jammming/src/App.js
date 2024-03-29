import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar.js';
import Button from './Components/Button.js';
import MusicInfo from './Components/MusicInfo.js';

import { getToken } from './GetAPI.js'

function App() {

  const [accessToken, setAccessToken] = useState(null)

  useEffect(() => {
    getToken().then(response => setAccessToken(response.access_token))
  }, [])

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
            <div className="scrollable">
              <MusicInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
