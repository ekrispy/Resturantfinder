import React, { useReducer } from "react";
import axios from "axios";
import Search from "./Components/Search";
import AnimeList from "./Components/AnimeList";
import "./App.css";

// Initial state for the reducer
const initialState = {
  query: "",
  animes: [],
  loading: false,
  error: null,
};

// Reducer function to handle state changes
function reducer(state, action) {
  switch (action.type) {
    case "UPDATE THE SEARCH":
      return { ...state, query: action.payload };
    case "SEARCHING ANIME":
      return { ...state, loading: true, error: null };
    case "ANIME SEARCH WAS A SUCCESS":
      return { ...state, loading: false, animes: action.payload };
    case "ANIME SEARCH WAS A FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const App = () => {
  // Create a reducer with the initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle search submission
  const handleSearch = async (event) => {
    // Prevent default from restarting
    event.preventDefault();

    // Check if the search query is empty
    if (!state.query) return;

    try {
      // Dispatch a request to search for anime
      dispatch({ type: "SEARCHING ANIME" });

      // Make an API request to search for anime
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${state.query}`
      );

      dispatch({ type: "ANIME SEARCH WAS A SUCCESS", payload: response.data.data });
    } catch (error) {
      dispatch({ type: "ANIME SEARCH WAS A FAILURE", payload: error.message });
    } finally {
      // Always log the completion of the request
      console.log("Search request completed");
    }
  };

  return (
    <div className="app">
      <h1>Search for an Anime</h1>
      <Search
        query={state.query}
        onQueryChange={(query) =>
          dispatch({ type: "UPDATE THE SEARCH", payload: query })
        }
        onSearch={handleSearch}
      />
      {state.loading && <p>Loading...</p>}
      {state.error && <p>Error: {state.error}</p>}
      <AnimeList animes={state.animes} />
    </div>
  );
};

export default App;