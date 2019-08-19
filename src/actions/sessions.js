import axios from "axios";

import {URL_SESSIONS, SET_SESSIONS} from "../constants";
import {isLoading, loadingFail} from "./general";

export const setSessions = (sessions) => ({ type: SET_SESSIONS, payload: sessions });

export const getSessions = () => {
    return dispatch => {
        dispatch(isLoading());
        axios.get(URL_SESSIONS)
            .then( ({ data }) => {
                console.log("data", data);
                dispatch(setSessions(data.session))
            })
            .catch((error) => {
                dispatch(loadingFail());
                console.error(error)
            });
    }
};