// Write your Character component here
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Movies from './Movies'
import Vehicles from './Vehicles'
import styled from 'styled-components'



const Character = ({ character }) => {
    const { name, homeworld, birth_year } = character

    const [homeWorld, setHomeWorld] = useState('A Galaxy Far, Far Away')
    useEffect(() => {
        axios.get(homeworld)
            .then(res => {
                setHomeWorld(res.data.name)
            })
            .catch(err => console.log("Home World Error:", err))
    }, [homeworld])

    return (
        <div>
            <h3>{name}</h3>
            <h4>Bio:</h4>
            <p>Born in {birth_year}</p>
            <p>Calls {homeWorld} home</p>

            <h4>Appears in: </h4>

            <h4>Rides: </h4>
        </div>
    )
}

export default Character

/** SWAPI CHARACTER OBJECT */
// name: "Luke Skywalker"
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