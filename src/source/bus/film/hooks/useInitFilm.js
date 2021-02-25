import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filmActions } from '../actions';


export const useInitFilm = id => {
  const dispatch = useDispatch();
  const { selectedFilm, reviews, similarFilms, recommendationFilms, mostPopularFilm,
    isFetching, error } = useSelector(state => state.film);

  const getData = useCallback(() => {
    dispatch(filmActions.getSelectedFilm(id));
    dispatch(filmActions.getReviews(id));
    dispatch(filmActions.getSimilarFilms(id));
    dispatch(filmActions.getRecommendationFilms(id));
    if(!mostPopularFilm){
      dispatch(filmActions.getMostPopuparFilm());
    }
  }, [id]);

  useEffect(() => {
    getData()
  }, [getData]);

  return { selectedFilm, reviews, similarFilms, recommendationFilms, isFetching, error }
}