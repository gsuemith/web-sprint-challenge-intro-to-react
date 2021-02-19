// Write your Character component here
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Movies from './Movies'
import Vehicles from './Vehicles'
import styled from 'styled-components'

const CharacterCard = styled.div`
    color: white;
    background: rgba(0,0,0,.7);
    width: 350px;
    margin: 1em;
    padding: 2em;
    transition: .6s ease-in-out;

    &:hover {
        margin: 0;
        padding: 3em;
    }

    & h4 {
        cursor: pointer;
        padding: 1em;
        transition: .4s ease-in-out;
    }
    
    & h4:hover {
        background: black;
    }
`
const InfoCard = styled.div`
    margin: 0;
`


const Character = ({ character, movies}) => {
    const { name, homeworld, birth_year, starships, vehicles } = character
    
    // Retreive Home World name
    const [homeWorld, setHomeWorld] = useState('A Galaxy Far, Far Away')
    useEffect(() => {
        axios.get(homeworld)
            .then(res => {
                setHomeWorld(res.data.name)
            })
            .catch(err => console.log("Home World Error:", err))
    }, [homeworld])

    // Retrieve starship and vehicle names
    const [rides, setRides] = useState([])
    useEffect(() => {
        let ridePromises = [];
        // Collect multiple promises for each ride url
        Promise.all(
            [...starships, ...vehicles].map(ride => (
                axios.get(ride)
                .then(res => (
                    ridePromises.push(res.data.name)
                ))
                .catch(err => (
                    console.log("Unable to retrieve ride", err)
                ))
            ))
        ) // Once complete, update state
        .then(() => setRides(ridePromises))
    }, [starships, vehicles])

    // Section visibility
    const [moviesVisible, toggleMovies] = useState(false)
    const [ridesVisible, toggleRides] = useState(false)
    const [bioVisible, toggleBio] = useState(false)

    return (
        <CharacterCard>
            <h2>{name}</h2>
            <InfoCard>
                <h4 onClick={e => toggleBio(!bioVisible)}>Bio:</h4>
                {
                    bioVisible && <div className="Bio">
                        <p>Born in <strong>{birth_year}</strong></p>
                        <p>Calls <strong>{homeWorld}</strong> home</p>
                    </div>
                }

                <h4 onClick={e => toggleMovies(!moviesVisible)}>Appears in: </h4>
                {moviesVisible && <Movies movies={movies} movieTitles={character.films}/>}
                <h4 onClick={e => toggleRides(!ridesVisible)}>Rides: </h4>
                {ridesVisible && <Vehicles rides={rides}/>}
            </InfoCard>
        </CharacterCard>
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
// skin_color: "fair"
// species: []
// starships: (2) ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"]
// url: "http://swapi.dev/api/people/1/"
// vehicles: (2) ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"]
// __proto__: Object