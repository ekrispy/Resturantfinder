import React from 'react';
import AnimeItem from './AnimeItem';


const AnimeList = ({ animes }) => (
  
  <div id="results">
    {
      // Use the map() function to iterate over the array of anime 
      animes.map((anime) => (
        // Render an AnimeItem component for each anime object, passing the anime object as a prop
        // Use the mal_id property of the anime object as the key for the component
        <AnimeItem key={anime.mal_id} anime={anime} />
      ))
    }
  </div>
);


export default AnimeList;