import React from 'react';
import '../css/Button.css';
import { getTracks, getTrackInfo } from '../GetAPI.js';


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

function Button({searchQuery, accessToken, setTracks}) {


    return (
        <button id="button" onClick={() => {displayResults(searchQuery, accessToken, setTracks)}}>Go</button>
    )
}

export default Button;