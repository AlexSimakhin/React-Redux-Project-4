import {api} from '../../api';
import {types} from './types';

export const popularFilmsActions = Object.freeze({
  startFetching: () => {
    return { type: types.POPULAR_FILMS_START_FETCHING }
  },
  stopFetching: () => {
    return { type: types.POPULAR_FILMS_STOP_FETCHING }
  },
  fill: (payload) => {
    return { type: types.POPULAR_FILMS_FILL, payload }
  },
  setFetchingError: (error) => {
    return {
      type: types.POPULAR_FILMS_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  fetchAsync: (page) => async (dispatch) => {
    dispatch(popularFilmsActions.startFetching());

    const response = await api.getPopularMovies.fetch(page);

    if (response.status === 200) {
      const { data } = await response.json();

      dispatch(popularFilmsActions.fill(data));
    } else {
      const error = {
        status: response.status
      };

      dispatch(popularFilmsActions.setFetchingError(error));
    }
    dispatch(popularFilmsActions.stopFetching());
  }
});
