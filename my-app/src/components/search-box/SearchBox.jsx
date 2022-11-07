import React from "react";

function SearchBox(props) {

    let animeList = props.animeList 
    return <div className="card-list">
         {animeList.map(anime => {
         const {name, genre, id, image, link} = anime;
         return <div className="card-container">
            <img 
             alt={name}
             src={image}
             style={{
              width: "180px",
              height: "250px",
              margin: "auto",
              display: "block"}}>   
             </img>
            <h1 key={id}><a
            href={link}
            target="_blank"
            rel="noopener noreferrer">
            {name}
            </a></h1>
            <p>{genre} anime</p>
         </div>
         })}
    </div>
}

export default SearchBox