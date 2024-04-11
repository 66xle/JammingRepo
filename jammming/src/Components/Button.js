import React from 'react';
import '../css/Button.css';
import { getTracks, getTrackInfo } from '../GetAPI.js';


function displayResults(searchQuery, accessToken)
{
    const idk = getTracks(accessToken, searchQuery);
    console.log(idk);
}

function Button({searchQuery, accessToken}) {

    

    return (
        <button id="button" onClick={displayResults(searchQuery, accessToken)}>Go</button>
    )
}

export default Button;