import { combineReducers} from "redux";

import { movies } from "./movies";
import { loading } from "./loading";

export const rootReducer = combineReducers({
    loading: loading,
    data: movies

});