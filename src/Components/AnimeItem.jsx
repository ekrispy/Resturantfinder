import React from "react";


const AnimeItem = ({ anime }) => (
  // returns anime details
  <div>
    <img src={anime.images.webp.image_url} alt={anime.title} />
    <h2>{anime.title}</h2>
    <p>{anime.synopsis}</p>
  </div>
);


export default AnimeItem;
