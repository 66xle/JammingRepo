import React from 'react';
import Button from './Button.js';
import '../css/MusicInfo.css';

function MusicInfo() {
    return (
        <div class="music-info">
            <h3>Song Name - Album: Artist</h3>
            <Button style="float: left;"></Button>
        </div>
    )
}

export default MusicInfo;