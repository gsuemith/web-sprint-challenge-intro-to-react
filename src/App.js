import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        // name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair",
        // birth_year: "19BBY"
        // created: "2014-12-09T13:50:51.644000Z"
        // edited: "2014-12-20T21:17:56.891000Z"
        // eye_color: "blue"
        // films: (4) ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "Revenge of the Sith"]
        // gender: "male"
        // hair_color: "blond"
        // height: "172"
        // homeworld: "http://swapi.dev/api/planets/1/"
        // mass: "77"
        // name: "Luke Skywalker"
        // skin_color: "fair"
        // species: []
        // starships: (2) ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"]
        // url: "http://swapi.dev/api/people/1/"
        // vehicles: (2) ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"]
        // __proto__: Object
        setCharacters(res.data);
      })
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      
      {
        characters.map((char, index) => {
          return <Character key={index} name={char.name}/>
        })
      }
      
      
    </div>
  );
}

export default App;
