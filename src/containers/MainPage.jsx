import React, { useState } from 'react';
import { connect } from "react-redux";
import { Input, Select } from "antd";
import {MovieList} from "../components";

const {Option} = Select;

const MainPage = ({ movies }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
        const arr = value ? movies.filter(item => (
            item.title.toLowerCase().includes(value.toLowerCase()))
        ) : [];
        setFilteredMovies(arr);
    };

    const handleChangeSelect = (value) => {
        setValueSelect(value);
        setFilteredMovies(movies.filter(item => (
            item.genre && item.genre.some(elem => elem.trim() === value)
        )));
    };

    return (
        <React.Fragment>
            <div className="filter">
                <h2>Filter:</h2>
                <div>
                    <span>Genre</span>
                    <Select onChange={handleChangeSelect} allowClear>
                        {genre.map((item, i) => <Option key={i} value={item}>{item}</Option>)}
                    </Select>
                    <span>Title</span>
                    <Input
                        type="text"
                        name="filter-name"
                        onChange={handleChangeInput}
                        value={valueInput}
                        placeholder="Title search..."
                    />
                </div>
            </div>
            <div className="movieList-wrap">
                { filteredMovies.lenght
                    ? filteredMovies.map(item => (<MovieList key={item._id} movie={item}/>))
                    : movies.map(item => (<MovieList key={item._id} movie={item}/>))
                }
            </div>
        </React.Fragment>

    );
};

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);


