import { LatestFilms } from '../pages/latestFilms';

export const book = Object.freeze({
    root: '/',
    popularFilms: '/popular-films',
    films: '/films',
    topRatedFilms: '/top-rated-films',
    film: '/films/:filmId',

    latestFilms: {
        url: '/latest-films',
        component: LatestFilms,
    },

});
