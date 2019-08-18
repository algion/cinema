import React, { useState } from 'react';
import { connect } from "react-redux";

import {MovieList, Filter} from "../components";

const MainPage = ({ movies, genres }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);

    return (
        <React.Fragment>
            <Filter
                movies={movies}
                genres={genres}
                setFilteredMovies={setFilteredMovies}
            />
            <div className="movieList-wrap">
                { filteredMovies.length
                    ? filteredMovies.map(item => (<MovieList key={item._id} movie={item}/>))
                    : movies.map(item => (<MovieList key={item._id} movie={item}/>))
                }
            </div>
        </React.Fragment>

    );
};

const mapStateToProps = (state) => ({
    movies: state.data.movies,
    genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);