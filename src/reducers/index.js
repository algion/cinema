import { combineReducers} from "redux";

import { movies } from "./movies";
import { loading } from "./loading";
import { sessions } from "./sessions";

export const rootReducer = combineReducers({
    loading: loading,
    data: movies,
    schedule: sessions,

});