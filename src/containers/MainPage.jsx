import React, { useState } from 'react';
import { connect } from "react-redux";
import { Input, Select } from "antd";
import {MovieList} from "../components";

const {Option} = Select;

const MainPage = ({ movies, genres }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
        const arr = value
            ? filteredMovies.length
            ? filteredMovies.filter(item => (
                item.title.toLowerCase().includes(value.toLowerCase()))
            ) : movies.filter(item => (
                    item.title.toLowerCase().includes(value.toLowerCase()))
                )
            : [];
        setFilteredMovies(arr);
    };


    const handleChangeSelect = (value) => {
        setValueSelect(value);
        const arr = filteredMovies.length
            ? filteredMovies.filter(item => (
            item.genre && item.genre.some(elem => elem.trim() === value)
        )) : movies.filter(item => (
                item.genre && item.genre.some(elem => elem.trim() === value)
            ));
        setFilteredMovies(arr);
    };
    return (
        <React.Fragment>
            <div className="filter">
                <h2>Filter:</h2>
                <div>
                    <span>Genre</span>
                    <Select onChange={handleChangeSelect} allowClear>
                        {genres.map((item, i) => <Option key={i} value={item}>{item}</Option>)}
                    </Select>
                    <span>Title</span>
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