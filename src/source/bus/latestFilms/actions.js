import { types } from './types';
import { api } from './api/index';

export const latestFilmsActions = Object.freeze({

    startFetching: () => {
        return {
            type: types.LATEST_FILMS_START_FETCHING,
        };
    },

    stopFetching: ( ) => {
        return {
            type: types.LATEST_FILMS_STOP_FETCHING
        };
    },

    setFetchingError: ( error ) => {
        return {
            type: types.LATEST_FILMS_FETCHING_ERROR,
            error: true,
            payload: error
        };
    },

    fillLatestFilms: ( payload ) => {
        return {
            type: types.LATEST_FILMS_FILLING,
            payload: payload,
        };
    },

    fetchAsync: () => async ( dispatch ) => { //На старт, внимание, марш
        dispatch(latestFilmsActions.startFetching( ));

        const response = await api.getLatestFilms( ); //у объедка свойство = ф-я
        //подождали
        if ( response.status === 200 ) {
            const { data } = await response.json();

//ок
            dispatch( latestFilmsActions.fillLatestFilms( [ data ]));

        } else {
            const error = {
                status: response.status,
            };

            dispatch(latestFilmsActions.setFetchingError( error ));

        };

        dispatch(latestFilmsActions.stopFetching());

    },
});
