import React, { useEffect, useState } from 'react';
import '../css/SearchBar.css';
import Button from './Button.js';

function SearchBar({accessToken}) {

    const [input, setInput] = useState("");

    

    return (
        <div>
            <input id="searchBar" onChange={(event) => setInput(event.target.value)}></input>
            <Button searchQuery={input} accessToken={accessToken}/>
        </div>
    )
}
export default SearchBar;