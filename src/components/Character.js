// Write your Character component here
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Movies from './Movies'
import Vehicles from './Vehicles'
import styled from 'styled-components'



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
    // Collects multiple promises for each ride url
    // useEffect(() => {
    //     let promises = [];
    //     let ridePromises = [];
    //     [...vehicles, ...starships].forEach(ride => {
    //         promises.push(
    //             axios.get(ride)
    //                 .then(res => {
    //                     console.log(character.name, res.data.name)
    //                     ridePromises.push(res.data.name)
    //                 })
    //                 .catch(err => console.log("Could not get rides", err))
    //         )
    //     })

    //     // Change state once all promises provided
    //     Promise.all(promises).then(() => setRides(ridePromises))
    // }, [starships, vehicles])

    useEffect(() => {
        let ridePromises = [];
        Promise.all(
            [...starships, ...vehicles].map(ride => (
                axios.get(ride).then(res => ridePromises.push(res.data.name))
            ))
        ).then(() => setRides(ridePromises))
    }, [starships, vehicles])

    return (
        <div>
            <h3>{name}</h3>
            <h4>Bio:</h4>
            <p>Born in {birth_year}</p>
            <p>Calls {homeWorld} home</p>

            <h4>Appears in: </h4>
            <Movies movies={movies} movieTitles={character.films}/>
            <h4>Rides: </h4>
            <Vehicles rides={rides}/>
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
// skin_color: "fair"
// species: []
// starships: (2) ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"]
// url: "http://swapi.dev/api/people/1/"
// vehicles: (2) ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"]
// __proto__: Object