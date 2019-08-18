import { SET_MOVIES } from "../constants";

const initialValues = {
    movies: [],
    genres: {},
};

export const movies = (state = initialValues, action)=> {
    switch (action.type) {
        case SET_MOVIES:
            const genres = new Set();
                action.payload.forEach((item) => {
                if (item.genre) {
                    item.genre.forEach((elem) => {
                        if (elem){
                            const formattedElem = elem.trim();
                            genres.add(formattedElem);
                        }
                    });
                }

            }, []);

console.log("genres", genres);
            return {
                ...state,
                movies: action.payload,
                genres: genres
            };
        default:
            return state;
    }
};