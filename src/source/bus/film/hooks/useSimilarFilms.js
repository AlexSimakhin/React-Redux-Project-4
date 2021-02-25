import { useSelector } from 'react-redux';


export const useSimilarFilms = () => {
  const { similarFilms } = useSelector(state => state.film);

  const sortSimilarFilms = similarFilms.sort((a, b) => b.popularity - a.popularity);

  const topSimilarFilms = sortSimilarFilms.length > 5 ? sortSimilarFilms.slice(0, 5) : [...sortSimilarFilms];

  return { topSimilarFilms }

}