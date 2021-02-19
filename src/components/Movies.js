import React from 'react'

const Movies = ({ movies, movieTitles}) => {
    return (
        <div>
            {
                movies.filter(movie => (
                    movieTitles.includes(movie.title)
                ))
                .map(movie => (
                    <p key={movie.title}><em>{movie.title}</em>, ({movie.release_date.split('-')[0]})</p>
                ))
            }
        </div>
    )
}

export default Movies
