import {types} from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
};

export const topRatedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.TOP_RATED_START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.TOP_RATED_STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.TOP_RATED_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
      };
    case types.TOP_RATED_FILL:
      return {
        ...state,
        data: payload,
        error: null,
      };

    default:
      return state
  }
};
