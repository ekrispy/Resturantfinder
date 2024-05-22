// src/context/FastFoodContext.js
import React, { createContext, useReducer } from 'react';
import axios from 'axios';

const FastFoodContext = createContext();

const initialState = {
  chain: 'kfc',
  locations: [],
  status: 'idle',
  error: null,
};

const fastFoodReducer = (state, action) => {
  switch (action.type) {
    case 'get chain':
      return { ...state, chain: action.payload };
    case 'locations loading':
      return { ...state, status: 'loading', error: null };
    case 'we got locations':
      return { ...state, status: 'succeeded', locations: action.payload };
    case 'locations failure':
      return { ...state, status: 'failed', error: action.payload };
    default:
      return state;
  }
};

const FastFoodProvider = ({ children }) => {
  const [state, dispatch] = useReducer(fastFoodReducer, initialState);

  const fetchLocations = async (chain) => {
    dispatch({ type: 'locations loading' });
    try {
      const options = {
        method: 'GET',
        url: `https://fast-food-restaurants-usa-top-50-chains.p.rapidapi.com/restaurants-top/${chain}/location/0`,
        headers: {
          'X-RapidAPI-Key': '5999fde4b9msh625934ac2a37b3fp17f6bejsn9043990c8431',
          'X-RapidAPI-Host': 'fast-food-restaurants-usa-top-50-chains.p.rapidapi.com',
        },
      };
      const response = await axios.request(options);
      dispatch({ type: 'we got locations', payload: response.data });
    } catch (error) {
      dispatch({ type: 'locations failure', payload: error.message });
    }
  };

  const setChain = (chain) => {
    dispatch({ type: 'get chain', payload: chain });
  };

  return (
    <FastFoodContext.Provider value={{ state, fetchLocations, setChain }}>
      {children}
    </FastFoodContext.Provider>
  );
};

export { FastFoodProvider, FastFoodContext };
