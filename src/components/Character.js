// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const characterDiv = styled.div`
    text-align: justify;
`

const Character = ( { name }) => {
    return (
        <div>
            <h4>{name}</h4>
        </div>
    )
}

export default Character
