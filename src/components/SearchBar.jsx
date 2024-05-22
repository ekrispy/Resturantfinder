import React, { useState, useContext } from 'react';
import { FastFoodContext } from '../context/FastFoodContext';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const { setChain, fetchLocations } = useContext(FastFoodContext);

    const handleSearch = () => {
        setChain(input);
        fetchLocations(input);
    };
}

return (
    <div>
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>
)