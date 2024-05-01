import { React, useEffect } from 'react';
import '../css/Button.css';

function RemoveFromPlaylist(tracks, setTracks, trackToRemove, playlist, setPlaylist)
{
    let newPlaylist = playlist.filter(track => track !== trackToRemove);
    setPlaylist(newPlaylist);

    let newTracks = [...tracks];
    newTracks.push(trackToRemove);
    setTracks(newTracks);
}

function Playlist({tracks, setTracks, playlist, setPlaylist}) {
    return (
        <div class="music-info">
            {
                playlist.map((value, index) => {
                    return (
                        <div class="song">
                            <h3 class="text">{value.track.name} - {value.track.artists.map((value, index) => value.name)}</h3>
                            <button id="button" onClick={() => {RemoveFromPlaylist(tracks, setTracks, value, playlist, setPlaylist)}}>-</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Playlist;