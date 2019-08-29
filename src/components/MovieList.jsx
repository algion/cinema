import React from 'react';
import { Link } from "react-router-dom";

export const MovieList = ({movie}) => {
    
    return (
        <div className="movie-wrap">
        <Link to={`movie/${movie._id}`} >

            <img src={movie.poster} alt="poster for movie"/>
            <div className="movie-title">{movie.title}</div>
        </Link>
        </div>
    );
};