import { root, init } from './config';

export const api = Object.freeze({
  getMovie: {
    fetch: filmId => {
      return fetch(`${root}/movie-details/${filmId}`, {...init})
    }
  },
  getSimilarMovies: {
    fetch: filmId => {
      return fetch(`${root}/${filmId}/similar`, {...init})
    }
  },
  getRecommendationsMovies: {
    fetch: filmId => {
      return fetch(`${root}/${filmId}/recommendations`, {...init})
    }
  },
  getReviewsToMovie: {
    fetch: filmId => {
      return fetch(`${root}/${filmId}/reviews`, {...init})
    }
  },
  getPopularMovies: {
    fetch: (page) => {
      return fetch(`${root}/popular-movies?page=${page}`, {...init})
    }
  },
  getTrendingMovies: {
    fetch: (time) => {
      return fetch(`${root}/trending/movie/${time}`, {...init})
    }
  },
  movies: {
    getTopRated: (page) => {
      return fetch(`${root}/top-rated?page=${page}`, {...init})
    }
  }

});
