import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard'
import '../App.css'

const MovieList = ({movies, filterTitle, filterRating}) => {
    return (
        <div style={{display: "flex", alignContent: "center", justifyContent: "space-around" , flexWrap: "wrap"}}>
            {movies
            .filter((movie) => 
            movie.title.toLowerCase().trim().includes(filterTitle.toLowerCase().trim())&&
            movie.rating >= filterRating
            )
            .map((movie) => (
                <div className="movie-det" key={movie.id} >
                <Link to={`/${movie.id}`}>
                <MovieCard movie={movie} key={movie.id} />
                </Link>
                </div>
            ))}
        </div>
    );
};

export default MovieList;