import React, {useState} from "react";
import AnimeDB from "../AnimeDB";
import SearchBox from "./search-box/SearchBox";
import "./Body.css"

function Body() {

    let [animeList, updateAnime] = useState(AnimeDB);
    const [unchangedList] = useState(AnimeDB)

    function onSearchChange(event) {

        let filterAnime = unchangedList.filter(anime => {
            const filteredAnime = event.target.value.toLocaleLowerCase()
            return anime.name.toLocaleLowerCase().includes(filteredAnime)
        });

        updateAnime(filterAnime) 
    }

    return <div className="bg">
    <input 
        className='search-box'
        type="search"
        placeholder='search anime' 
        onChange={onSearchChange}
    ></input>
        <SearchBox animeList={animeList}/>
    </div>
}

export default Body