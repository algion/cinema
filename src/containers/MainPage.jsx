import React, { useState } from 'react';
import { connect } from "react-redux";

import {MovieList} from "../components";

const MainPage = ({ movies }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [valueInput, setValueInput] = useState("")
    const handleChangeInput = (e) => {
        const { value } = e.target;
        setValueInput(value);
        setFilteredMovies(movies.filter(item => (
            item.title.toLowerCase().includes(value.toLowerCase()))
        ));
    };

    return (
        <div className="movieList-wrap">
            <input
                type="text"
                name="filter-name"
                onChange={handleChangeInput}
                value={valueInput}
            />
            {filteredMovies.map(item =>(
                <MovieList key={item._id} movie={item} /> )
            )}
        </div>
    )
};

const mapStateToProps = (state) => ({
   movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);


