import { root } from './config';

export const api = Object.freeze({
        getLatestFilms: () => {
            return fetch(`${root}/latest-movie`, {
                method: "GET",
            });
        },
});

//root = 'https://lab.lectrum.io/rtx/api/movies';
///movies/latest-moviemovies/