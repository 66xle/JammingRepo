import React, { useEffect, useState } from 'react';
import { getTracks, getTrackInfo } from '../GetAPI.js';
import '../css/SearchBar.css';
import '../css/Button.css';


function displayResults(searchQuery, accessToken, setTracks)
{
    if (searchQuery !== "")
    {
        let items = null;

        const response = getTracks(accessToken, searchQuery);
        response.then((_items) => {
            items = [..._items];
            console.log("string", items);

            setTracks(items);
        });
    }
}

function SearchBar({accessToken, setTracks}) {

    const [input, setInput] = useState("");

    
    return (
        <div class="inputContainer">
            <input id="searchBar" onChange={(event) => setInput(event.target.value)}></input>
            <button id="button" onClick={() => {displayResults(input, accessToken, setTracks)}}>Go</button>
        </div>
    )
}
export default SearchBar;