import {api} from '../../api';
import {types} from './types';

export const topRatedMoviesActions = Object.freeze({
  startFetching: () => {
    return {
      type: types.TOP_RATED_START_FETCHING
    }
  },
  stopFetching: () => {
    return {
      type: types.TOP_RATED_STOP_FETCHING
    }
  },
  fillData: (payload) => {
    return {
      type: types.TOP_RATED_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.TOP_RATED_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },

  getTopRatedAsync: (data) => async (dispatch) => {
    dispatch(topRatedMoviesActions.startFetching());

    const response = await api.movies.getTopRated(data);

    if (response.status !== 200) {
      dispatch(topRatedMoviesActions.setFetchingError(response.status));
      dispatch(topRatedMoviesActions.stopFetching());
      return
    }

    const {data: dataFromApi} = await response.json();

    dispatch(topRatedMoviesActions.fillData(dataFromApi));
    dispatch(topRatedMoviesActions.stopFetching());
  }
});
