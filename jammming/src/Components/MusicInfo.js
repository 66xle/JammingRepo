import { React, useEffect } from 'react';
import '../css/MusicInfo.css';
import '../css/Button.css';



function MusicInfo({tracks}) {
    
    return (
        <div class="music-info">
            {
                tracks.map((value, index) => {
                    
                    if (value.isTrackSelected)
                    {
                        console.log("no");
                        return (
                            <div class="song">
                                <h3 class="text">{value.track.name} - {value.track.artists.map((value, index) => value.name)}</h3>
                                <button id="button">-</button>
                            </div>
                        )
                    }
                    else if (!value.isTrackSelected)
                    {
                        console.log(!value.isTrackSelected);
                        return (
                            <div class="song">
                                <h3 class="text">{value.track.name} - {value.track.artists.map((artist, index) => artist.name)}</h3>
                                <button id="button">+</button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default MusicInfo;