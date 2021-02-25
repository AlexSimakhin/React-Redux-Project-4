import {types} from "./types";
import {api} from "../../../api";

const {
    TRENDING_FILMS_START_FETCHING,
    TRENDING_FILMS_STOP_FETCHING,
    TRENDING_FILMS_FILL_STATE,
    TRENDING_FILMS_SET_FETCHING_ERROR
} = types;

export const mainActions = Object.freeze({
    startFetching: () => {
       return {
           type: TRENDING_FILMS_START_FETCHING
       }
    },
    stopFetching: () => {
        return {
            type: TRENDING_FILMS_STOP_FETCHING
        }
    },
    fillState: payload => {
        return {
            type: TRENDING_FILMS_FILL_STATE,
            payload
        }
    },
    setFetchingError: error => {
        return {
            type: TRENDING_FILMS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
    fetchAsync: (time) => async (dispatch) => {

        dispatch(mainActions.startFetching);
        const response = await api.getTrendingMovies.fetch(time);
        if(response.status === 200){
            const data = await response.json();
            dispatch(mainActions.fillState(data));
        }else {
            const error = `Error ${response.status} = ${response.statusText}`;
            dispatch(mainActions.setFetchingError(error))
        }
        dispatch(mainActions.stopFetching());
    }
});

