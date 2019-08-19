import React, {useState} from "react";
import {Input, Select} from "antd";

const {Option} = Select;

export const Filter = ({movies, setFilteredMovies, genres}) => {
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilteredMovies = (valueInput, valueSelect) => {
        return movies.reduce((acc, item) => {
            const hasAllFilters = valueInput && valueSelect;
            const hasJustTitleFilter = valueInput && !valueSelect;
            const hasJustSelectFilter = !valueInput && valueSelect;
            const checkSelectFilter = item.genre.length &&
                item.genre.some(elem => elem.trim() === valueSelect);
            const checkTitleFilter = item.title.toLowerCase().includes(valueInput.toLowerCase());
            if (hasAllFilters && checkSelectFilter && checkTitleFilter) {
                acc.push(item);
            }  else  if (hasJustTitleFilter && checkTitleFilter) {
                acc.push(item);
            } else if (hasJustSelectFilter && checkSelectFilter){
                acc.push(item);
            }
            return acc;
            }, []);
    };

    const handleChangeInput = (e) => {
    const {value} = e.target;
    setValueInput(value) ;
    setFilteredMovies(getFilteredMovies(value, valueSelect));
    };
    const handleChangeSelect = (value) => {
    setValueSelect(value);
    setFilteredMovies(getFilteredMovies(valueInput, value));
    };
    return (
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
    )
};