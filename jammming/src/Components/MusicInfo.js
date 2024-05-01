import { React, useEffect } from 'react';
import '../css/MusicInfo.css';
import '../css/Button.css';



function AddToPlaylist(tracks, setTracks, trackToAdd, playlist, setPlaylist)
{
    let newTracks = tracks.filter(track => track !== trackToAdd);
    setTracks(newTracks);

    let newPlaylist = [...playlist];
    newPlaylist.push(trackToAdd);
    setPlaylist(newPlaylist);
}

function MusicInfo({tracks, setTracks, playlist, setPlaylist}) {
    return (
        <div class="music-info">
            {
                tracks.map((value, index) => {
                    return (
                        <div class="song">
                            <h3 class="text">{value.track.name} - {value.track.artists.map((artist, index) => artist.name)}</h3>
                            <button id="button" onClick={() => {AddToPlaylist(tracks, setTracks, value, playlist, setPlaylist)}}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MusicInfo;