import React from 'react'

const Movies = ({ movies, movieTitles}) => {
    return (
        <div>
            {   // Filter movies list from App state by
                // what's included in movieTitles list from Character
                movies.filter(movie => (
                    movieTitles.includes(movie.title)
                ))
                .map(movie => (
                    // List Movies, including release year
                    <p key={movie.title}>
                        <em>{movie.title}</em>, ({movie.release_date.split('-')[0]})
                    </p>
                ))
            }
        </div>
    )
}

export default Movies
