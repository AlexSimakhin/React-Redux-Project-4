import {combineReducers} from 'redux';

import {trendingReducer as trending} from '../bus/main/redux/reducer';
import {popularFilmsReducer as popularFilms} from '../bus/popularFilms/reducer';
import { filmReducer as film } from '../bus/film/reducer';
import { topRatedReducer as topRated } from '../bus/topRatedFilms/reducer';
import {latestFilmsReducer as latestFilms} from '../bus/latestFilms/reducer';

export const rootReducer = combineReducers({

  popularFilms,
  film,
  trending,
  topRated,
  latestFilms
});
