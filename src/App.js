import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const URL = 'https://swapi.dev/api'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${URL}/people/`)
      .then(res => {
        setCharacters(res.data);
      })
      .catch(err => console.log("Error:", err));
  }, []);

  // Fetching movies list for local use
  // Normally not preferred but the movie list is short and
  // character api only provides movie titles
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchList = (state_url, setState) => {
      axios.get(state_url)
        .then(res => {
          setState(res.data.results)
        })
        .catch(err => console.log("Can't fetch List", err))
    }

    fetchList(`${URL}/films/`, setMovies);
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      {
        characters.map((character, index) => {
          return <Character key={index} character={character} movies={movies}/>
        })
      }
      
    </div>
  );
}

export default App;
