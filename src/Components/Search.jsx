import React from "react";

const Search = ({ query, setQuery, onSearch }) => {
  <form onSubmit={onSearch}>
    <input
      type="text"
      placeholder="Search for an Anime"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button type="submit">Search</button>
  </form>;
};

export default Search;