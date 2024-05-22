// src/App.js
import React from 'react';
import { FastFoodProvider } from './context/FastFoodContext';
import SearchBar from './components/SearchBar';
import Location from './components/Location';


function App() {
  return (
    <FastFoodProvider>
      <div className="App">
        <SearchBar />
        <Location />
      </div>
    </FastFoodProvider>
  );
}

export default App;
