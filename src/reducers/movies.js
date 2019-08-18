import { SET_MOVIES } from "../constants";

const initialValues = {
    movies: [],
    genres: [],
};

export const movies = (state = initialValues, action)=> {
    switch (action.type) {
        case SET_MOVIES:
            const genres = action.payload.reduce((acc, item) => {
                if (item.genre && item.genre.length) {
                    item.genre.forEach((elem) => {
                        if (!acc.includes(elem.trim())) {
                            acc.push(elem.trim());
                        }
                    });
                }

                return acc
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