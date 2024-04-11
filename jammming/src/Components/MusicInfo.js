import React from 'react';
import Button from './Button.js';
import '../css/MusicInfo.css';

function MusicInfo({tracks}) {

    


    return (
        <div class="music-info">
            {
                tracks.map((value, index) => {
                    return (
                        <h3>{value.name} - {value.artists.map((value, index) => value.name)}</h3>
                    )
                })
            }
        </div>
    )
}

export default MusicInfo;