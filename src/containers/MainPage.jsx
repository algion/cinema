import React, {useState} from 'react';
import {connect} from "react-redux";
import {Input, Select} from "antd";
import {MovieList} from "../components";

const MainPage = ({ movies }) => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
        setFilteredMovies(movies.filter(item => item.title.toLowerCase().includes(value.toLowerCase())));
    };

    const handleChangeSelect = (value) => {
        setValueSelect(value);
        setFilteredMovies(movies.filter(item => (
            item.genre && item.genre.some(elem => elem.trim() === value)
        )));
    };

    return (
        <div className="movieList-wrap">
            <span>Title</span>
            <Input
                type="text"
                name="filter-name"
                onChange={handleChangeInput}
                value={valueInput}
                placeholder="Title search..."
            />



            {filteredMovies.map(item => (
                <MovieList key={item._id} movie={item}/>)
            ) }

        </div>

    );
};

const mapStateToProps = (state) => ({
    movies: state.data.movies
});

export const MainPageContainer = connect(mapStateToProps)(MainPage);
