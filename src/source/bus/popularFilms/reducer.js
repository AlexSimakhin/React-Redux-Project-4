import {types} from './types';

const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

export const popularFilmsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.POPULAR_FILMS_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.POPULAR_FILMS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.POPULAR_FILMS_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
      };
    case types.POPULAR_FILMS_FILL:
      return {
        ...state,
        data: payload,
        error: null,
      };

    default:
      return state
  }
};
