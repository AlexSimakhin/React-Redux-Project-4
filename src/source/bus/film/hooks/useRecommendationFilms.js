import { useSelector } from 'react-redux';


export const useRecommendationFilms = () => {
  const { recommendationFilms, mostPopularFilm } = useSelector(state => state.film);

  const sortRecommendationFilms = recommendationFilms.sort((a, b) => b.popularity - a.popularity);

  const mostPopularity = mostPopularFilm?.popularity || sortRecommendationFilms[0]?.popularity;

  const sortFilms = sortRecommendationFilms
    .map(film => ({...film, popularity: (film?.popularity / mostPopularity) * 5}));

  const topRecommendationFilms = sortFilms.length > 5 ? sortFilms.slice(0, 5) : [...sortFilms];

  return { topRecommendationFilms }

}