import React, { createContext, useReducer } from 'react';
import axios from 'axios';

// Create a context for our fast food application
const FastFoodContext = createContext();

// Define the initial state of our application
const initialState = {
  // The current fast food chain (e.g. KFC, McDonald's, etc.)
  chain: 'kfc',
  // An array of locations for the current chain
  locations: [],
  // The current status of our data fetching (idle, loading, succeeded, or failed)
  status: 'idle',
  // Any error message that occurred during data fetching
  error: null,
};

// Define a reducer function to handle state changes
const fastFoodReducer = (state, action) => {
  switch (action.type) {
    // When the user selects a new chain, update the state accordingly
    case 'get chain':
      return { ...state, chain: action.payload };
    // When we start fetching locations, set the status to loading
    case 'locations loading':
      return { ...state, status: 'loading', error: null };
    // When we successfully fetch locations, update the state with the new data
    case 'we got locations':
      return { ...state, status: 'succeeded', locations: action.payload };
    // When we encounter an error while fetching locations, update the state with the error message
    case 'locations failure':
      return { ...state, status: 'failed', error: action.payload };
    // If we receive an unknown action type, return the current state unchanged
    default:
      return state;
  }
};

// Create a provider component that wraps our application
const FastFoodProvider = ({ children }) => {
  // Use the useReducer hook to create a state and dispatch function
  const [state, dispatch] = useReducer(fastFoodReducer, initialState);

  // Define a function to fetch locations for a given chain
  const fetchLocations = async (chain) => {
    // Dispatch an action to indicate that we're loading locations
    dispatch({ type: 'locations loading' });
    try {
      // Make an API request to fetch locations for the given chain
      const options = {
        method: 'GET',
        url: `https://fast-food-restaurants-usa-top-50-chains.p.rapidapi.com/restaurants-top/${chain}/location/0`,
        headers: {
          'X-RapidAPI-Key': '5999fde4b9msh625934ac2a37b3fp17f6bejsn9043990c8431',
          'X-RapidAPI-Host': 'fast-food-restaurants-usa-top-50-chains.p.rapidapi.com',
        },
      };
      const response = await axios.request(options);
      // Dispatch an action to update the state with the fetched locations
      dispatch({ type: 'we got locations', payload: response.data });
    } catch (error) {
      // Dispatch an action to update the state with the error message
      dispatch({ type: 'locations failure', payload: error.message });
    }
  };

  // Define a function to update the current chain
  const setChain = (chain) => {
    dispatch({ type: 'get chain', payload: chain });
  };

  // Return a context provider that wraps our application
  return (
    <FastFoodContext.Provider value={{ state, fetchLocations, setChain }}>
      {children}
    </FastFoodContext.Provider>
  );
};

// Export the provider and context for use in our application
export { FastFoodProvider, FastFoodContext };