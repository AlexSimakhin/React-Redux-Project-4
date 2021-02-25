import { useState } from 'react';
import { usePopularFilmsFetch } from './usePopularFilmsFetch';

export const usePopularFilms = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = usePopularFilmsFetch(currentPage);  // isFetching, error — Work In Progress

  const _setCurrentPage = (page) => {
    if (page > 0 && page <= 100) { setCurrentPage(page); }
  };

  return { data, currentPage, _setCurrentPage };
}
