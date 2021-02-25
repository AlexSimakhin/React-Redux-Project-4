import {types} from "./types";

const initialState = {
    latestFilms: null,
    isLoading: false,
    error: null,
}

export const latestFilmsReducer = (state = initialState, {type, payload}) => {

    switch (type) {

        case types.LATEST_FILMS_START_FETCHING: {
            return {
                ...state,
                isLoading: true,
                //latestFilms: null,
            }
        }

        case types.LATEST_FILMS_FETCHING_ERROR: {
            return {
                ...state,
                isLoading: false,
                //latestFilms: null,
                error: payload,
            }
        }

        case types.LATEST_FILMS_STOP_FETCHING: {
            return {
                ...state,
                isLoading: false,
                //error: null,
            }
        }

        case types.LATEST_FILMS_FILLING: {
            return {
                ...state,
                latestFilms: payload,
                error: null,
            }
        }

         default:
            return {...state};
    };
};