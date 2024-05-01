import './css/App.css';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar.js';
import MusicInfo from './Components/MusicInfo.js';
import Playlist from './Components/Playlist.js';

import { getToken } from './GetAPI.js'

function App() {

  const [accessToken, setAccessToken] = useState(null);

  const [tracks, setTracks] = useState([]);

  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    getToken().then(response => setAccessToken(response.access_token))
  }, [])

  useEffect(() => {
    
  }, [tracks, playlist])

  return (
    <div className="App">
      <header className="App-header">
        <h1> Jammming </h1>
      </header>
      <div id="Body">
        <div id="Content">
          <div id="SearchBar">
            <h2 className="title">Search</h2>
            <SearchBar accessToken={accessToken} setTracks={setTracks}/>
          </div>
          <div id="Results">
            <h2 className="title">Results</h2>
            <div className="scrollable">
              <MusicInfo tracks={tracks} setTracks={setTracks} playlist={playlist} setPlaylist={setPlaylist}/>
            </div>
          </div>
        </div>
        <div id="Content">
          <div className="playlist">
            <h2 className="title">Playlist</h2>
            <div className="scrollable">
                <Playlist tracks={tracks} setTracks={setTracks} playlist={playlist} setPlaylist={setPlaylist}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
