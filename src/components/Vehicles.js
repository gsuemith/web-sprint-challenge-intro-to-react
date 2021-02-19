import React from 'react'

const Vehicles = ({ rides }) => {
    return (
        <div>
            {
                rides.map(ride => (
                    <p key={ride}>{ride}</p>
                ))
            }
        </div>
    )
}

export default Vehicles
