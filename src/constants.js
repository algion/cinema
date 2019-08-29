// const proxyurl = "https://cors-anywhere.herokuapp.com/";

// export const URL_MOVIES = `${BASE_URL}movie/`;
// export const URL_SESSIONS = "https://cors-anywhere.herokuapp.com/http://tmhanuman.ru/media/session.json";
// export const URL_ROOMS = "https://cors-anywhere.herokuapp.com/http://tmhanuman.ru/media/room.json";
// export const URL_SPACE_SHADOW = "http://localhost:3000/source/space-shadow.json";

export const BASE_URL = "http://subdomain.entony.fs.a-level.com.ua/api/";
export const URL_MOVIES = "http://localhost:3000/source/movi2.json";
export const URL_SESSIONS = "http://localhost:3000/source/session.json";
export const URL_ROOMS = "http://localhost:3000/source/room.json";
export const URL_SPACE_SHADOW = `${BASE_URL}movie/space-shadow`;

export const SET_MOVIES = "SET_MOVIES";
export const IS_LOADING = "IS_LOADING";
export const LOADING_FAIL = "IS_LOADING";
export const SET_SESSIONS = "SET_SESSIONS";
export const SET_ROOMS = "SET_ROOMS";

export const dateOptions = {
    month: 'long',
    day: 'numeric',
};