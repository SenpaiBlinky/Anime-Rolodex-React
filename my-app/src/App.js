import React, {useState, useEffect} from 'react';
import "./App.css"

function App() {



    let [animeList, updateAnime] = useState([])

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => updateAnime(() => users),
     () => console.log(animeList))
    })

  

  return (
    <div className="App">

    {animeList.map(anime => <h1 key={anime.id}>{anime.name}</h1>)}

    </div>
  );
}

export default App;
