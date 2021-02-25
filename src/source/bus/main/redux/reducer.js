import {types} from "./types";

const {
    TRENDING_FILMS_START_FETCHING,
    TRENDING_FILMS_STOP_FETCHING,
    TRENDING_FILMS_FILL_STATE,
    TRENDING_FILMS_SET_FETCHING_ERROR,
} = types;

const initialState = {};

export const trendingReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case TRENDING_FILMS_START_FETCHING: {
            return {
                ...state,
                isFetching: true
            }
        }
        case TRENDING_FILMS_STOP_FETCHING: {
            return {
                ...state,
                isFetching: false
            }

        }
        case TRENDING_FILMS_FILL_STATE: {
            return {
                ...state,
                data: payload.data,
                error: null
            }
        }
        case TRENDING_FILMS_SET_FETCHING_ERROR: {
            return {
                ...state,
                data: null,
                error: true
            }
        }
        default: {
            return state;
        }
    }
};