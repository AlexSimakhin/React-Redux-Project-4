import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {popularFilmsActions} from '../actions';

export const usePopularFilmsFetch = (page) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popularFilmsActions.fetchAsync(page));
  }, [dispatch, page]);

  const { data, isFetching, error } = useSelector((state) => state.popularFilms);

  return { data, isFetching, error }
};
