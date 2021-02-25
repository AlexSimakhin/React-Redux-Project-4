import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { book } from './book';
import { PopularFilms } from '../pages/popular-films';
import { TopRatedFilms } from '../pages/topRatedFilms';
import { Main } from '../pages/main';
import { Film } from '../pages/film';

import { LatestFilms } from '../pages/latestFilms/';

export const Routes = () => (
    <>
        <Switch>
            <Route exact path={book.root}>
                <Main />
            </Route>
            <Route exact path={book.films}>
                <Redirect to={book.topRatedFilms} />
            </Route>
            <Route exact path={book.topRatedFilms}>
                <TopRatedFilms />
            </Route>
            <Route exact path={book.popularFilms}>
                <PopularFilms/>
            </Route>
            <Route path={book.film}>
                <Film />
            </Route>
            <Route exact path = { book.latestFilms.url } >
                < LatestFilms />
            </Route>

        </Switch>
    </>
);

