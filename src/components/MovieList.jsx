import React from 'react';
import { Link } from "react-router-dom";

export const MovieList = ({movie}) => {
    return (
        <div className="movie-list">
            <img src={movie.poster} alt="poster for movie"/>
            <div className="movie-title">{movie.title}</div>
        </div>
    );
};


