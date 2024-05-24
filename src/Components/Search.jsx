import React from "react";

const Search = ({ query, onQueryChange, onSearch }) => {
  try {
    // Render the search form
    return (
      <form onSubmit={onSearch}>
        <input
          type="text"
          placeholder="Search for an Anime"
          value={query}
          onChange={(e) => {
            onQueryChange(e.target.value);
          }}
        />

        <button type="submit">Search</button>
      </form>
    );
  } catch (error) {
    console.error("Error in Search component:", error);
    return <div>Error occurred while rendering the search form.</div>;
  }
};

export default Search;
