// src/App.js
import React from 'react';
import { FastFoodProvider } from './context/FastFoodContext';


function App() {
  return (
    <FastFoodProvider>
    <div className="App"></div>
      <h1>Resturant App</h1>
    </FastFoodProvider>
  );
}

export default App;
