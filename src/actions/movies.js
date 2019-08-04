import axios from "axios";

import {SET_MOVIES, URL_MOVIES, IS_LOADING, LOADING_FAIL} from "../constants";

export const isLoading = () => ({ type: IS_LOADING });
export const setMovies = (movies) => ({ type: SET_MOVIES, payload: movies });
export const loadingFail = () => ({ type: LOADING_FAIL });

export const getMovies = () => {
    return dispatch => {
        dispatch(isLoading());
        axios.get(URL_MOVIES)
            .then( ({ data }) => dispatch(setMovies(data.movie)))
            .catch((error) => {
                dispatch(loadingFail());
                console.error(error)
            });
    }
};