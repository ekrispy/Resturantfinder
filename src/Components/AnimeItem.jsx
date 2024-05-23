import React from "react";

const AnimeItem = ({ anime }) => (

    <div>
        <img src="{anime.image.webp.image_url}" alt={anime.title} />
        <h2>{anime.title}</h2>
        <p>{anime.title}</p>
    </div>
)

export default AnimeItem