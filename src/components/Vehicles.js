import React from 'react'

const Vehicles = ({ rides }) => {
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
