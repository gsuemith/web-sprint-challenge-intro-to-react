import React, { useState, useEffect } from 'react'
import axios from 'axios'

// starships and vehicles are a list of api urls
// therfore Promise.all is needed to retrieve their names
const Vehicles = ({ starships, vehicles }) => {
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

    return (
        <div>
            {   
                // If there are any rides
                rides[0] 
                ? 
                // List rides
                rides.map(ride => (
                    <p key={ride}>{ride}</p>
                ))
                :
                'None'
            }
        </div>
    )
}

export default Vehicles
