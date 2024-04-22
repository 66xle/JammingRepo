import React, { useEffect, useState } from 'react';
import { getTracks, getTrackInfo } from '../GetAPI.js';
import '../css/SearchBar.css';
import '../css/Button.css';
import Track from '../Class/Track.js';

function displayResults(searchQuery, accessToken, setTracks)
{
    if (searchQuery !== "")
    {
        let items = null;

        const response = getTracks(accessToken, searchQuery);
        response.then((_items) => {
            items = [..._items];
            console.log("string", items);

            let newTracks = [];

            items.map((element, index) => {
                newTracks.push(new Track(element, false));
            })

            setTracks(newTracks);
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