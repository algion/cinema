import React, { useState } from 'react';
import { connect } from "react-redux";
import { Input } from "antd";


import {MovieList} from "../components";

const MainPage = ({ movies, genres }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const handleChangeInput = (e) => {
        const { value } = e.target;
        setValueInput(value);
        setFilteredMovies(value ? movies.filter(item => (
            item.title.toLowerCase().includes(value.toLowerCase()))
        ) : []);
    };
    const filterMovies = Object.getOwnPropertyNames(filteredMovies);
    const checkMovies = filterMovies.length-1;
    console.log("genres", genres)

    return (
        <React.Fragment>
            <div className="filter">
                <h2>Filter:</h2>
                <div>
                    <Input
                        type="text"
                        name="filter-name"
                        onChange={handleChangeInput}
                        value={valueInput}
                        placeholder="Title search..."
                        allowClear
                    />
                </div>
            </div>
        <div className="movieList-wrap">

            { checkMovies
                ? filteredMovies.map(item =>(<MovieList key={item._id} movie={item} /> ))
                : movies.map(item =>(<MovieList key={item._id} movie={item} /> ))}
        </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
   movies: state.data.movies,
   genres: state.data.genres
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);


