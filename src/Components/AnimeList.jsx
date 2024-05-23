import React from 'react';
import AnimeItem from './AnimeItem';

const AnimeList = ({ animes }) => (
  <div id="results">
    {animes.map((anime) => (
      <AnimeItem key={anime_id} anime={anime} />
    ))}
  </div>
);

export default AnimeList;
