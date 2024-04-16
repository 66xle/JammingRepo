import React from 'react';
import '../css/MusicInfo.css';
import '../css/Button.css';
function MusicInfo({tracks}) {

    


    return (
        <div class="music-info">
            {
                tracks.map((value, index) => {
                    return (
                        <div class="song">
                            <h3 class="text">{value.name} - {value.artists.map((value, index) => value.name)}</h3>
                            <button id="button">+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MusicInfo;