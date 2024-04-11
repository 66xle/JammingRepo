import React, { useEffect, useState } from 'react';
import '../css/SearchBar.css';
import Button from './Button.js';

function SearchBar({accessToken, setTracks}) {

    const [input, setInput] = useState("");

    

    return (
        <div>
            <input id="searchBar" onChange={(event) => setInput(event.target.value)}></input>
            <Button searchQuery={input} accessToken={accessToken} setTracks={setTracks}/>
        </div>
    )
}
export default SearchBar;