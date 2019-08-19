import {IS_LOADING, LOADING_FAIL} from "../constants";

export const loadingFail = () => ({ type: LOADING_FAIL });
export const isLoading = () => ({ type: IS_LOADING });