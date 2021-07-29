import React from 'react';
import MovieCard from './MovieCard'


const MovieList = ({movies, filterTitle, filterRating}) => {
    return (
        <div style={{display: "flex", alignContent: "center", justifyContent: "space-around" , flexWrap: "wrap"}}>
            {movies
            .filter((movie) => 
            movie.title.toLowerCase().trim().includes(filterTitle.toLowerCase().trim())&&
            movie.rating >= filterRating
            )
            .map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    );
};

export default MovieList;