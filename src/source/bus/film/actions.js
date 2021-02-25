// API
import { api } from '../../api/index';

// Types
import { types } from './types';



export const filmActions = Object.freeze({
  //Sync
  startFetching: () => ({type: types.START_FETCHING}),
  stopFetching: () => ({type: types.STOP_FETCHING}),
  selectedFilmFill: payload => ({type: types.SELECTED_FILM_FILL, payload}),
  reviewsFill: payload => ({type: types.REVIEWS_FILL, payload}),
  similarFilmsFill: payload => ({type: types.SIMILAR_FILMS_FILL, payload}),
  recommendationFilmsFill: payload => ({type: types.RECOMMENDATION_FILMS_FILL, payload}),
  mostPopularFilmFill: payload => ({type: types.MOST_POPULAR_FILM_FILL, payload}),
  setFetchingError: err => ({type: types.SET_FETCHING_ERROR, error: true, payload: err}),
  filmClean: () => ({type: types.FILM_CLEAN}),

  //Async

  getSelectedFilm:  id => async dispatch => {
    try {
      dispatch(filmActions.startFetching());
      const res = await api.getMovie.fetch(id);
      if(!res.ok){
        throw new Error('Something went wrong')
      }
      const { data } = await res.json();

      dispatch(filmActions.selectedFilmFill(data));

    }catch (err){
      dispatch(filmActions.setFetchingError(err));
    }finally {
      dispatch(filmActions.stopFetching());
    }
  },

  getReviews: id => async dispatch => {
    try {
      dispatch(filmActions.startFetching());
      const res = await api.getReviewsToMovie.fetch(id);
      if(!res.ok){
        throw new Error('Something went wrong')
      }
      const { data } = await res.json();

      dispatch(filmActions.reviewsFill(data))

    }catch (err){
      dispatch(filmActions.setFetchingError(err));
    }finally {
      dispatch(filmActions.stopFetching());
    }
  },

  getSimilarFilms:  id => async dispatch => {
    try {
      dispatch(filmActions.startFetching());
      const res = await api.getSimilarMovies.fetch(id);
      if(!res.ok){
        throw new Error('Something went wrong')
      }
      const { data } = await res.json();

      dispatch(filmActions.similarFilmsFill(data));

    }catch (err){
      dispatch(filmActions.setFetchingError(err));
    }finally {
      dispatch(filmActions.stopFetching());
    }
  },

  getRecommendationFilms: id => async dispatch => {
    try {
      dispatch(filmActions.startFetching());
      const res = await api.getRecommendationsMovies.fetch(id);
      if(!res.ok){
        throw new Error('Something went wrong')
      }
      const { data } = await res.json();

      dispatch(filmActions.recommendationFilmsFill(data));

    }catch (err){
      dispatch(filmActions.setFetchingError(err));
    }finally {
      dispatch(filmActions.stopFetching());
    }
  },

  getMostPopuparFilm: () => async dispatch => {
    try {
      dispatch(filmActions.startFetching());
      const res = await api.getPopularMovies.fetch(1);

      if(!res.ok){
        throw new Error('Something went wrong')
      }
      const { data } = await res.json();

      dispatch(filmActions.mostPopularFilmFill(data[0]));

    }catch (err){
      dispatch(filmActions.setFetchingError(err));
    }finally {
      dispatch(filmActions.stopFetching());
    }
  },

})