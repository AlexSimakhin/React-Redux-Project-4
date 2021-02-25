// Types
import { types } from './types';

const initialState = {
  selectedFilm: null,
  mostPopularFilm: null,
  reviews: [],
  similarFilms: [],
  recommendationFilms: [],
  isFetching: false,
  error: null,
};

export const filmReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case types.START_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case types.STOP_FETCHING:
      return {
        ...state,
        isFetching: false
      };
    case types.SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        selectedFilm: null,
        mostPopularFilm: null,
        reviews: [],
        similarFilms: [],
        recommendationFilms: [],
      };
    case types.SELECTED_FILM_FILL:
      return {
        ...state,
        error: null,
        selectedFilm: payload,
      };
    case types.REVIEWS_FILL:
      return {
        ...state,
        reviews: [...payload],
      };
    case types.SIMILAR_FILMS_FILL: {
      return {
        ...state,
        similarFilms:[...payload],
      }
    };
    case types.RECOMMENDATION_FILMS_FILL: {
      return {
        ...state,
        recommendationFilms: [...payload],
      }
    };
    case types.MOST_POPULAR_FILM_FILL: {
      return {
        ...state,
        mostPopularFilm: payload,
      }
    };
    case types.FILM_CLEAN: {
      return {
        ...state,
        selectedFilm: null,
        mostPopularFilm: null,
        reviews: [],
        similarFilms: [],
        recommendationFilms: [],
        isFetching: false,
        error: null
      }
    };

    default:
      return state
  }
}